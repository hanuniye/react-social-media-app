import {Posts} from "./Home"
import {addDoc,collection, deleteDoc, doc, getDocs, query, where} from "firebase/firestore";
import {auth, db} from "../../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useEffect, useState } from "react";

interface Props {
  post: Posts
}

interface Likes {
  uid:string;
  pid:string;
}


export const Post = (props : Props) => {
  const [like,setLike] = useState<Likes[] | null>(null);
  const {post} = props;

  const likeColl = collection(db,"likes")
  const [ user ] = useAuthState(auth)

  const likeDoc = query(likeColl,where("pid", "==", post.id))

  // get likes from like collection 
  const getLike = async () => {
    const data = await getDocs(likeDoc);

    setLike(
      data.docs.map(data => ({uid: data.data().uid, pid:data.data().pid } as Likes))
    )
  }

  useEffect(() => {
    getLike()
  },[])

  // check if the user has already liked the post 
  const checkUserLike = like?.find(data => data.uid === user?.uid);

  // add like to like collection 
  const addLike = async () => {
    try{
      await addDoc(likeColl,{uid : user?.uid, pid: post.id});
    
      if(user){
        setLike(
          like ? [...like, {uid: user?.uid,pid: post.id}] : [{uid: user?.uid,pid: post.id}]
        )
      }
    }catch(err){
      console.log(err);
    }
    
   
  }

  const removeLike = async () => {
    try{
      const likesToDeleteQuery = query(likeColl, where("pid", "==", post.id), where("uid","==", user?.uid));
      const likesToDeleteData = await getDocs(likesToDeleteQuery);
      const likeToDelete = doc(db, "likes",likesToDeleteData.docs[0].id)

      await deleteDoc(likeToDelete);

      if(user){
        setLike(
         like && like?.filter(data => data.uid !== user?.uid)
        )
      }
      
    }catch(err){
      console.log(err);
      
    }
  }



  return (
    <div className="post" style={{ "color":"black" , "textAlign":'center' }}>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <h6>{post.username}</h6>
      <button onClick={checkUserLike ? removeLike : addLike}>{checkUserLike ? <>&#128078;</> : <>&#128077;</>}</button>
      {like && <p>like:{like.length}</p>}
    </div>
  )
}