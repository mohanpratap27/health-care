import {FaCalendarCheck, FaChalkboardTeacher, FaShoppingCart} from 'react-icons/fa'

export default function OurServices(){

    return(
        <>
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-lg-12 text-center">
                         <h2>
                            Our <span style={{color:"rgb(225, 104, 178)"}}> Service</span>
                        </h2>
                    </div>
                </div>
               
                <div className="row pt-5 justify-content-between">
                    <div className="col-lg-3 our-services-box">
                        <div className='d-flex'>
                            <FaCalendarCheck size={22.6}/><h4 className='mx-2'>Book appointments</h4>
                        </div>
                        <div>
                            <p>
                            Scheduling appointments has never been easier. With <strong>Health Care</strong>, you can browse available time slots, select your preferred healthcare provider, and book an appointment in just a few clicks.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-3 our-services-box">
                        <div className='d-flex'>
                            <FaChalkboardTeacher size={24.6}/><h4 className='mx-2'>Video Consultation</h4>
                        </div>
                        <div>
                            <p>
                            Access medical advice and consultations from the comfort of your home. Our secure video consultation feature allows you to connect with doctors online, ensuring you receive timely medical guidance without the need to travel.

                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 our-services-box">
                        <div className='d-flex'>
                            <FaShoppingCart size={24.6}/><h4 className='mx-2'>Order Medicines</h4>
                        </div>
                        <div>
                            <p>
                            Order your medicines and health products through our platform with ease. We offer a wide range of products and ensure timely delivery to your doorstep, making it convenient to manage your prescriptions and health supplies.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-3 our-services-box">
                        <div className='d-flex'>
                            <FaShoppingCart size={24.6}/><h4 className='mx-2'>Surgery and Procedures</h4>
                        </div>
                        <div>
                            <p>
                            We partner with top-rated healthcare facilities to provide you with the best options for surgeries and medical procedures. Our team is dedicated to helping you find the most suitable and trusted places for your healthcare needs.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 our-services-box">
                        <div className='d-flex'>
                            <FaShoppingCart size={24.6}/><h4 className='mx-2'>Book Lab Tests</h4>
                        </div>
                        <div>
                            <p>
                            Easily book lab test slots through our platform. We collaborate with accredited laboratories to offer reliable and timely diagnostic services, ensuring you get accurate results for your health assessments.
                            </p>
                        </div>
                    </div>


                    <div className="col-lg-3 our-services-box">
                        <div className='d-flex'>
                            <FaShoppingCart size={24.6}/><h4 className='mx-2'>Find Doctors Near You</h4>
                        </div>
                        <div>
                            <p>
                            Find and connect with registered and trusted doctors in your area. Our comprehensive directory makes it easy to locate healthcare professionals who meet your specific needs and preferences.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}