import React, { useState, useEffect } from 'react';
import Layout from "@/pages/Layout/layout";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from 'next/link';
import axios from 'axios';

export default function Register() {

  const [firstName, setFirstname] = useState()
  const [lastName, setLastname] = useState()
  const [email, setEmail] = useState()
  const [mobile, setmobile] = useState()
  const [address, setAddress] = useState()
  const [city, setCity] = useState()
  const [state, setState] = useState()
  const [gender, setGender] = useState()
  const [password, setPassword] = useState()
  const [token, setToken] = useState('');
  const [userStatus, setUserstatus] = useState('')
  const [isPassshow, setPasswordShow] = useState(false)

  const localToken = localStorage.getItem("token")


  useEffect(() => {

    if (localToken) {
      window.location.href = '/';
    }

  }, []);

  const handleFirstName = (event) => {
    setFirstname(event.target.value);
  }; const handleLastName = (event) => {
    setLastname(event.target.value);

  }; const handleEmailChange = (event) => {
    setEmail(event.target.value);

  }; const handleMobileChange = (event) => {
    setmobile(event.target.value);

  }; const handleAddressChange = (event) => {
    setAddress(event.target.value);

  }; const handleCityChange = (event) => {
    setCity(event.target.value);

  }; const handleStateChange = (event) => {
    setState(event.target.value);
  }; const handleGenderChange = (event) => {
    setGender(event.target.value);
  }; const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  console.log(email, password, firstName, lastName, mobile, address, city, state, gender);

  const handleRegister = async () => {
    if (email, password, firstName, lastName, mobile, address, city, state, gender) {

      try {
        const response = await axios.post('http://localhost:3001/user/register', { email: email, password: password, firstname: firstName, lastname: lastName, mobile: mobile, address: address, city: city, state: state, gender: gender });
        setToken(response.data.AccessToken)
        localStorage.setItem('token', response.data.AccessToken)
        window.location.href = '/';
      } catch (error) {
        console.log("api is not working")
      }
    } else {
      alert("all feilds are require")
    }
  }


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
                <div className="d-flex">
                  <input type='text' onChange={handleFirstName} className=' mt-2 mx-1 form-control' required placeholder='Enter Your First Name' />
                  <input type='text' onChange={handleLastName} className=' mt-2 form-control' required placeholder='Enter Your Last Name' />
                </div>
                <input type='text' onChange={handleEmailChange} className=' mt-2 mx-1 form-control' required placeholder='Enter Your Valid Email' />
                <input type='text' onChange={handleMobileChange} className=' mt-2 mx-1 form-control' required placeholder='Enter Your Valid Mobile No.' />
                <select className='mt-2 mx-1 form-select' onChange={handleGenderChange} required>
                  <option className=''>Select Your Gender</option>
                  <option className=''>Male</option>
                  <option className=''>Female</option>
                </select>
                <input type='text' onChange={handleAddressChange} className=' mt-2 mx-1 form-control' required placeholder='Enter Your Address' />

                <div className='d-flex'>
                  <select className='mt-2 mx-1 form-select' onChange={handleCityChange} required>
                    <option className=''>Select Your City</option>
                    <option className=''>Jodhpur</option>
                    <option className=''>Jaipur</option>
                    <option className=''>Surat</option>

                  </select>
                  <select className='mt-2  form-select' onChange={handleStateChange} required>
                    <option className=''>Select Your State</option>
                    <option className=''>Rajesthan</option>
                    <option className=''>Gujrat</option>
                  </select>
                </div>
                <div className='d-flex mt-3 form-control' style={{ padding: "0px" }}>
                  <input onChange={handlePasswordChange} type={!isPassshow ? 'Password' : 'text'} className='password-feild' required placeholder='Enter Your Valid Password' />
                  <div className='btn password-feild-show-hide btn-light' onClick={() => setPasswordShow(!isPassshow)}>{!isPassshow ? "Show" : "hide"}</div>
                </div>

                <div onClick={handleRegister} className='btn login-button mt-2'>Sign Up</div>
                <Link href={"./login"} className='btn login-button mt-3'>Already have a account</Link>
              </form>
            </div>
          </div>
          <div className='text-center'>
            <div className='mb-1 text-center' >
              <h6>OR</h6>
            </div>
            <Link href={"/"} style={{ color: "black", textDecoration: "underline !importent" }}><u>back to home</u></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
