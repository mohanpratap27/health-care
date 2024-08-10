import Link from "next/link";

export default function Menu(){
return(
    <>
        
            <ul className="d-flex menu">
                <Link className="menu-item" href={"../"}>Home</Link>
                <Link className="menu-item" href={"../../pages/about-us"}>About</Link>
                <Link className="menu-item" href={"../../pages/book-appointment"}>Appointment</Link>
            </ul>
    </>
);

}