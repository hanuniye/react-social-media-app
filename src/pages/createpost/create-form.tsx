import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { addDoc, collection} from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

interface sch {
  title:string;
  description:string;
}

export const CreateForm = () => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  const schema = yup.object().shape({
    title: yup.string().required("title field is reqiured"),
    description: yup.string().required("description field is reqiured")
  })
  
  const { register, handleSubmit,formState: {errors} } = useForm<sch>({
    resolver: yupResolver(schema)
  });

  const postCollection = collection(db,"posts");

  const onSubmit = async (data: sch) => {
   await addDoc(postCollection,{
    ...data,
    uid:user?.uid,
    username:user?.displayName
   })
   navigate("/")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Title...." {...register("title")} />
      {errors.title && <p style={{ "color":"red" }}>{errors.title?.message}</p>}
      <textarea placeholder="Description...." {...register("description")}  />
      {errors.description && <p style={{ "color":"red" }}>{errors.description?.message}</p>}
      <input type="submit" />
    </form>
  )
}