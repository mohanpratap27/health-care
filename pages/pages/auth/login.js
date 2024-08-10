import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from "@/pages/Layout/layout";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [isPassshow, setPasswordShow] = useState(false)
  useEffect(() => {
      const localToken = localStorage.getItem("token")
    if(localToken){
      window.location.href = '/';
    }
    }, []); 

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleClick = async () => {
    if (email , password){

        try {
            const response = await axios.post('http://localhost:3001/userLogin', { email, password });
            setToken(response.data.AccessToken)   
            localStorage.setItem('token',response.data.AccessToken)
            window.location.href = '/';
          } catch (error) {
            alert( "Please Check Your Email or Password ");
          }

    }else{
        alert("Plese Enter Valid Email and Password")
    }
};

  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <img className="login-banner-image" src="../../../Images/login-banner.jpg" alt="Login Banner" style={{ height: '100vh', width: '100%' }} />
          </div>
          <div className="col-lg-6">
            <div className="w-100 text-center pt-1">
              <img src="../../../Images/logo.png" alt="Logo" height="150" width="150" />
              <h2 style={{ color: "rgb(225,104,178)" }}>
                Welcome to <span style={{ color: "#3498db" }}>Health Care</span> Web Login
              </h2>
            </div>
            <div className="login-form-control">
              <div style={{ marginBottom: '20px' }}>
                <form>
                    <input onChange={handleEmailChange} type='email' className=' mt-3 form-control' required placeholder='Enter Your Valid Email'/>
                    <div className='d-flex mt-3 form-control' style={{padding:"0px"}}>
                    <input onChange={handlePasswordChange} type={!isPassshow ? 'Password': 'text'} className='password-feild' required placeholder='Enter Your Valid Password' />
                    <div className='btn password-feild-show-hide btn-light' onClick={()=>setPasswordShow(!isPassshow)}>{!isPassshow ? "Show":"hide"}</div>
                    </div>
                    <div className='btn login-button mt-3' onClick={handleClick}>Login</div>
                <Link href={"./register"} className='btn login-button mt-3'>don't have a account Sign In</Link> 
                </form>
              </div>
            </div>
            <div className='login-form-control text-center'>
            <div className='mb-3 text-center' >
                <h6>OR</h6>
            </div>
               <Link href={"/"}  style={{color:"black",textDecoration:"underline !importent"}}><u>back to home</u></Link> 
            </div>

          </div>
        </div>
      </div>
  );
}
