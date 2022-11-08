import { auth,provider } from "../config/firebase"
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../App.css"

export const Login = () => {
  const navigate = useNavigate()
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth,provider)
    navigate('/')    
  }
  return(
    <div className="login">
      <h3>sign in with google to contineu</h3>
      <button className="sign-in" onClick={signInWithGoogle}>sign in with google</button>
    </div>
  )
}