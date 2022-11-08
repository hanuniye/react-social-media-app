 import React,{useState} from 'react';
import { Link } from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth"
import { auth } from '../config/firebase';
import "../App.css"
import { signOut } from 'firebase/auth';

function Navbar(){
    const [click,setClick] = useState(false);

    const [user] = useAuthState(auth);

    function clicked(){
        setClick(!click)
    }

    function closeMenu(){
        setClick(false)
    }

    const logOut = async () => {
      await signOut(auth)
    }

    return (
        <>
        <nav className='navbar-items'>
            <h1 className='navbar-logo'>logo</h1>

            <div className='menu-icon' onClick={clicked}>
                <i className={click ? "fa fa-times":"fa fa-bars"}></i>
            </div>

            <ul className={click ? "nav-menu active":"nav-menu"}>
                <li className='nav-links' onClick={closeMenu}><Link to="/">Home</Link></li>
                {
                   !user ? <li className='nav-links' onClick={closeMenu}><Link to="/login">Login</Link></li> :
                   <li className='nav-links' onClick={closeMenu}><Link to="/createpost">Create Post</Link></li>
                }
            </ul>
            {
                user && <button className='logout' onClick={logOut}>Log-Out</button>
            }

            {user &&
              <div className='users'>
              <p>{user?.displayName}</p>
              <img src={user?.photoURL || ""} alt="" width="50" height="50" />
              </div>
            }   
        </nav>
    </>
    )
    
}

export default Navbar;