import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import FooterDeveloper from './layout-container/footer-dealer-info';
import Link from 'next/link';

export default function Footer(){
    return(
        <>
        <FooterDeveloper/>
            <MDBFooter className='text-center text-lg-start text-muted' style={{background:"white",}} >
                <section className=''>
                    <MDBContainer className='text-center text-md-start'>
                    <MDBRow className='pb-5 pt-5'>
                        <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                        <h6 className='text-uppercase fw-bold '>
                            <img src='../../Images/logo.png' width={80} />
                            {/* <span style={{color:"#2CA8E3"}}>Health</span> <span style={{color:"rgba(225,104,178,1)"}}>CARE</span> */}
                        </h6>
                        <p>
                            Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                            amet, consectetur adipisicing elit.
                        </p>
                        </MDBCol>

                        <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4 mt-4'>
                        <h6 className='text-uppercase fw-bold mb-4'>Health Care</h6>
                        <p>
                            <a href='#!' className='text-reset'>
                            Home
                            </a>
                        </p>
                        <p>
                            <a href='#!' className='text-reset'>
                            About
                            </a>
                        </p>
                        <p>
                            <a href='#!' className='text-reset'>
                            Articals
                            </a>
                        </p>
                        <p>
                            <Link href='../pages/auth/doctorRegistration' className='text-reset'>
                            Register as a doctor
                            </Link>
                        </p>
                        <p>
                            <a href='#!' className='text-reset'>
                            Register as a laboratory</a>
                        </p>
                        <p>
                            <a href='#!' className='text-reset'>
                            Register as a chemist
                            </a>
                        </p>
                        </MDBCol>

                        <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4 mt-4'>
                        <h6 className='text-uppercase fw-bold mb-4'>For patients</h6>
                        <p>
                            <a href='#!' className='text-reset'>
                            Book Appointment
                            </a>
                        </p>
                        <p>
                            <a href='#!' className='text-reset'>
                            Book Test
                            </a>
                        </p>
                        <p>
                            <a href='#!' className='text-reset'>
                            Health Products
                            </a>
                        </p>
                        <p>
                            <a href='#!' className='text-reset'>
                            Help
                            </a>
                        </p>
                        </MDBCol>

                        <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4 mt-4'>
                        <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                        <p>
                            <MDBIcon color='secondary' icon='home' className='me-2' />
                            342017 Jodhpur (Raj.)
                        </p>
                        <p>
                            <MDBIcon color='secondary' icon='envelope' className='me-3' />
                            pratapmohan27@gmail.com
                        </p>
                        <p>
                            <MDBIcon color='secondary' icon='phone' className='me-3' /> + 91 86194-65911
                        </p>
                        
                        </MDBCol>
                    </MDBRow>
                    </MDBContainer>
                </section>
            </MDBFooter>
                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2024 Copyright:
                    <a className='text-reset fw-bold'>
                    pratapmohan27@gamil.com
                    </a>
                </div>
        </>
    )
}