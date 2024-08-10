
export default function Banner(){

    return(
        <>
        <div className="book-appointment-banner" >
            <div className="">
                <img src="../../../Images/book-appointment.jpg" />
            </div>
            <div className="container-fluid book-appointment">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-6 input-booking-search-group">
                            <select className="input-booking-search-group-item">
                                <option>Jaipur</option>
                                <option>Jodhpur</option>
                                <option>Udaipur</option>
                            </select>
                            <input type="text" placeholder="Search Doctors, Clinics, Hospitals, Etc." className="input-booking-search-group-input"/>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
        </>
    )

}