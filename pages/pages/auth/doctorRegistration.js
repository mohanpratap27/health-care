
import React, { useState } from 'react';
import Link from 'next/link';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';

export default function DoctorRegistration() {
    const [currentStep, setCurrentStep] = useState(1);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        mobile: '',
        clinicAddress: '',
        city: '',
        state: '',
        pin: '',
        landmark: '',
        specialist: '',
        expriences: '',
        basicFees: '',
        emergencyFees: '',
        qualification: '',
        password: '',
        image: null,
        qualificationDocument: null,
        medicalCertificate: null,
        availableDays: [],
    });

    const handleNext = () => {
        if (currentStep === 1) {
            if (!formData.firstName || !formData.lastName || !formData.gender || !formData.email || !formData.mobile || !formData.password) {
                alert("Please fill out all fields in Step 1.");
                return;
            }
        }

        if (currentStep === 2) {
            if (!formData.clinicAddress || !formData.city || !formData.state || !formData.pin || !formData.landmark) {
                alert("Please fill out all fields in Step 2.");
                return;
            }
        }

        if (currentStep === 3) {
            if (!formData.specialist || !formData.expriences || !formData.basicFees || !formData.emergencyFees || !formData.qualification) {
                alert("Please fill out all fields in Step 3.");
                return;
            }
        }

        if (currentStep === 4) {
            if (!formData.image || !formData.qualificationDocument || !formData.medicalCertificate) {
                alert("Please upload all required documents in Step 4.");
                return;
            }
        }

        if (currentStep < 5) setCurrentStep(currentStep + 1);
    };

    const handlePrevious = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
    };

    const handleSelectChange = (event) => {
        const { target: { value } } = event;
        setFormData((prevData) => ({ ...prevData, availableDays: typeof value === 'string' ? value.split(',') : value }));
    };

    const handleSubmit = () => {
        // Submit form logic here
        console.log("Form submitted", formData);
    };

    return (
        <div className="container-fluid dr-reg-back">
            <div className="row ">
                <div className="col-lg-12 text-center">
                    <h2 style={{ color: "rgb(225,104,178)" }}>
                        Welcome to <span style={{ color: "#3498db" }}>Health Care</span> Doctor Registration
                    </h2>

                    <div className="note">
                        NOTE: If you are not a doctor, please return to our <Link href="/">Health Care Home</Link>.
                    </div>
                </div>
            </div>
            <div className="row ">
                <div className="col-lg-6 wizard-Container m-auto">
                    <div className="wizard">
                        <div className="steps">
                            {Array.from({ length: 5 }, (_, index) => (
                                <div
                                    key={index + 1}
                                    className={`step ${currentStep === index + 1 ? 'active' : ''}`}
                                >
                                    Step {index + 1}
                                </div>
                            ))}
                        </div>
                        <div className="form-content">
                            {currentStep === 1 && (
                                <Step1 formData={formData} handleChange={handleChange} />
                            )}
                            {currentStep === 2 && (
                                <Step2 formData={formData} handleChange={handleChange} />
                            )}
                            {currentStep === 3 && (
                                <Step3 formData={formData} handleChange={handleChange} handleSelectChange={handleSelectChange} />
                            )}
                            {currentStep === 4 && (
                                <Step4 formData={formData} handleChange={handleChange} handleFileChange={handleFileChange} />
                            )}
                            {currentStep === 5 && (
                                <ReviewStep formData={formData} />
                            )}
                        </div>
                        <div className="navigation-buttons">
                            <button onClick={handlePrevious} disabled={currentStep === 1}>
                                Previous
                            </button>
                            {currentStep === 5 ? (
                                <button onClick={handleSubmit}>Submit</button>
                            ) : (
                                <button onClick={handleNext}>Next</button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Step1({ formData, handleChange }) {
    const [isPassshow, setPasswordShow] = useState(false);

    return (
        <div>
            <h3>Basic Information</h3>
            <input className='form-control mt-3' type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
            <input className='form-control mt-3' type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
            <select className='form-select mt-3' name='gender' value={formData.gender} onChange={handleChange}>
                <option>Select Your Gender</option>
                <option value={"male"}>Male</option>
                <option value={"Female"}>Female</option>
            </select>
            <input className='form-control mt-3' type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <input className='form-control mt-3' type="text" name="mobile" maxLength={10} placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} />
            <div className='d-flex mt-3 form-control' style={{ padding: "0px" }}>
                <input className='password-feild' type={!isPassshow ? 'Password' : 'text'} name="password" placeholder='Enter Your Valid Password' value={formData.password} onChange={handleChange} />
                <div className='btn password-feild-show-hide btn-light' onClick={() => setPasswordShow(!isPassshow)}>{!isPassshow ? "Show" : "hide"}</div>
            </div>
            <div>
            </div>
            <div className='mt-4 text-center'>Already have a account <Link href={"./doctorLogin"}>Sign in </Link></div>
        </div>
    );
}

function Step2({ formData, handleChange }) {
    return (
        <div>
            <h3>Clinic Information</h3>
            <input className='form-control mt-3' type="text" name="clinicAddress" placeholder="Clinic Address" value={formData.clinicAddress} onChange={handleChange} />
            <input className='form-control mt-3' type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
            <input className='form-control mt-3' type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} />
            <input className='form-control mt-3' type="text" name="pin" placeholder="PIN" value={formData.pin} onChange={handleChange} />
            <input className='form-control mt-3' type="text" name="landmark" placeholder="Landmark" value={formData.landmark} onChange={handleChange} />
        </div>
    );
}

function Step3({ formData, handleChange, handleSelectChange }) {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    return (
        <div>
            <h3>Professional Information</h3>
            <input className='form-control mt-3' type="text" name="qualification" placeholder="Qualification" value={formData.qualification} onChange={handleChange} />
            <input className='form-control mt-3' type="text" name="specialist" placeholder="Specialist" value={formData.specialist} onChange={handleChange} />
            <input className='form-control mt-3' type="text" name="experiences" placeholder="Experiences" value={formData.experiences} onChange={handleChange} />
            <input className='form-control mt-3' type="text" name="basicFees" placeholder="Basic Fees" value={formData.basicFees} onChange={handleChange} />
            <input className='form-control mt-3' type="text" name="emergencyFees" placeholder="Emergency Fees" value={formData.emergencyFees} onChange={handleChange} />

            <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={formData.availableDays}
                onChange={handleSelectChange}
                displayEmpty
                renderValue={(selected) => {
                    if (selected.length === 0) {
                        return <em>Please Select Available Days</em>;
                    }
                    return selected.join(', ');
                }}
                style={{ width: '100%', marginTop: '1rem' }}
            >
                <MenuItem disabled value="">
                    <em>Please Select Available Days</em>
                </MenuItem>
                {days.map((name) => (
                    <MenuItem key={name} value={name}>
                        <Checkbox checked={formData.availableDays.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                    </MenuItem>
                ))}
            </Select>
        </div>
    );
}

function Step4({ formData, handleChange, handleFileChange }) {
    return (
        <div>
            <h3>Upload Documents</h3>
            <input className='form-control mt-3' type="file" name="image" onChange={handleFileChange} />
            <input className='form-control mt-3' type="file" name="qualificationDocument" onChange={handleFileChange} />
            <input className='form-control mt-3' type="file" name="medicalCertificate" onChange={handleFileChange} />
        </div>
    );
}

function ReviewStep({ formData }) {
    return (
        <div>
            <h3>Review Your Information</h3>
            <div className='d-flex justify-content-between' >
               
                <div className=''>
                    <h6>Profile Image:</h6>
                    {formData.image ? (
                        <img src={URL.createObjectURL(formData.image)} alt="Uploaded" width={100} />
                    ) : (
                        <h6>Not uploaded</h6>
                    )}
                </div>
                <div>
                    <h6>Qualification Document:</h6>
                    {formData.qualificationDocument ? (
                        <img src={URL.createObjectURL(formData.qualificationDocument)} alt="Qualification Document" width={100}  />
                    ) : (
                        <h6>Not uploaded</h6>
                    )}
                </div>
                <div>
                    <h6>Medical Certificate:</h6>
                    {formData.medicalCertificate ? (
                        <img src={URL.createObjectURL(formData.medicalCertificate)} alt="Medical Certificate" width={100} />
                    ) : (
                        <h6>Not uploaded</h6>
                    )}
                </div>
            </div>
            <div>
                <h4>Basic Information</h4>
                <p>First Name: {formData.firstName}</p>
                <p>Last Name: {formData.lastName}</p>
                <p>Gender: {formData.gender}</p>
                <p>Email: {formData.email}</p>
                <p>Mobile Number: {formData.mobile}</p>
            </div>
            <div>
                <h4>Clinic Information</h4>
                <p>Clinic Address: {formData.clinicAddress}</p>
                <p>City: {formData.city}</p>
                <p>State: {formData.state}</p>
                <p>PIN: {formData.pin}</p>
                <p>Landmark: {formData.landmark}</p>
            </div>
            <div>
                <h4>Professional Information</h4>
                <p>Specialist: {formData.specialist}</p>
                <p>Experiences: {formData.experiences}</p>
                <p>Basic Fees: {formData.basicFees}</p>
                <p>Emergency Fees: {formData.emergencyFees}</p>
                <p>Qualification: {formData.qualification}</p>
                <p>Available Days: {formData.availableDays.join(', ')}</p>
            </div>
        </div>
    );
}
