import Link from "next/link"
import { useState, useEffect } from "react"
export default function RegistrationRight(){
    const [isLogin, setLogin] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem('token');
      setLogin(!!token); // Set `isLogin` to true if token exists, otherwise false
    }, []); 
    
    const handleLogout = ()=>{
        localStorage.removeItem("token")
    }
    return(
        <>
            {isLogin ? (
                <div className=" d-flex menu">
                  <Link onClick={handleLogout} href={ "../../pages/auth/login"}className="btn menu-item">Profile</Link>
                </div>
            ) : (
                <>
                <div className=" d-flex menu">
                    <Link href={ "../../pages/auth/login"}className="btn menu-item">Login/Signup</Link>
                </div>
                </>
            )}
        </>
    )
}