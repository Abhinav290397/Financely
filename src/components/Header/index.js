import "./styles.css";
import { auth } from "../../firebase";
import { useAuthState } from 'react-firebase-hooks/auth'; //we do npm i react-firebase-hooks and get this from npm i documentation(search "react firebase hooks" on googlr).
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userSvg from "../../assets/user.svg";

import { getDoc, doc } from 'firebase/firestore';
import { db } from "../../firebase"; // Import your Firestore instance
const Header = () => {

    const [user] = useAuthState(auth);  //this line taken from "react firebase hooks"(npm) documentation from google.
    const navigate = useNavigate();

    const [userName, setUserName] = useState('');
    
    const logoutFunc = () => {
        auth.signOut();
        navigate("/");
    }

    useEffect(() => {
        if(!user){
            navigate("/");
        }
        else{
            navigate("/dashboard");
        }
    },[user,navigate]);

    useEffect(() => {   //This code is used to show the usename on navbar when user logged in.
        if (user) {
          const fetchUserName = async () => {
            const userDoc = await getDoc(doc(db, 'users', user.uid));
            if (userDoc.exists()) {
              setUserName(userDoc.data().name);
            }
          };
      
          fetchUserName();
        }
      }, [user]);

    return(
        <div className="navbar">
            <a className="logo" href="/">Financely.</a>
            {
                user ? (
                <div style={{display:"flex", justifyContent:"flex-start", alignItems:"center", gap:"0.5rem"}}> 
                    <div className="info">
                        <span>Welcome </span>
                        <p> {userName}</p>
                    </div>
                    <img src={user.photoURL ? user.photoURL : userSvg} style={{borderRadius:"50%",width:"1.5rem", height:"1.5rem"}}/>        
                    <p className="link" onClick={logoutFunc}>Logout</p>
                </div>
                ) :(<></>)
            }   
        </div>
    )
}
export default Header;