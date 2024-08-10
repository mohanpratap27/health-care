import Banner from "../Components/Appointment/banner";
import SearchList from "../Components/Appointment/Search-list";
import Layout from "../Layout/layout";



export default function BookAppointment(){
    return(
        <Layout>
            <Banner/>
            <SearchList/>
        </Layout>
    )
}