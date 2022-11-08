import { getDocs,collection} from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../../config/firebase";
import { Post } from "./Post";
import { useAuthState} from "react-firebase-hooks/auth"

export interface Posts {
  username:string;
  title:string;
  description:string;
  uid:string;
  id:string;
}

export const Home = () => {
  const [postList,setPostList] = useState<Posts[] | null>(null);
  const postCollection = collection(db,"posts");
  const [ user ] = useAuthState(auth)

  const getPosts = async () => {
    const data = await getDocs(postCollection);
    setPostList(data.docs.map(docs => ({...docs.data(), id:docs.id})) as Posts[])
  }
  
  useEffect(() => {
    getPosts()
  },[])

  return (
    <div>
      {user ? postList?.map(post => <Post post={post} />) : "hello world👍"}
    </div>
  )
}