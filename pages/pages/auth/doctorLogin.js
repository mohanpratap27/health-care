import React, { useState } from 'react';
import Link from 'next/link';

export default function DoctorLogin() {
    const [isPassshow, setPasswordShow] = useState(false);
    return (
        <div className="container-fluid dr-reg-back">
            <div className="row ">
                <div className="col-lg-12 text-center">
                    <h2 style={{ color: "rgb(225,104,178)" }}>
                        Welcome to <span style={{ color: "#3498db" }}>Health Care</span> Doctor Login
                    </h2>

                    <div className="note">
                        NOTE: If you are not a doctor, please return to our <Link href="/">Health Care Home</Link>.
                    </div>
                </div>
            </div>

            <div className="row ">
                <div className="col-lg-4 wizard-Container m-auto">
                    <div className="wizard">
                        <div className='text-center'><h2>Login</h2></div>
                        <div className="">
                            <input className='form-control mt-3' type="email" name="email" placeholder="Email" />
                            <div className='d-flex mt-3 form-control' style={{ padding: "0px" }}>
                                <input className='password-feild' type={!isPassshow ? 'Password' : 'text'} name="password" placeholder='Enter Your Valid Password' />
                                <div className='btn password-feild-show-hide btn-light' onClick={() => setPasswordShow(!isPassshow)}>{!isPassshow ? "Show" : "hide"}</div>
                            </div>
                            <div className='btn login-button mt-3' >Login</div>
                            <div className='mt-4 text-center'>don't have a account <Link href={"./doctorRegistration"}>Sign in </Link></div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
}
