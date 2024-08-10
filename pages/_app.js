import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/public/bootstrap/css/bootstrap.min.css";
import "@/styles/globals.css";
import Loader from "./loader";
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }) {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 5000ms = 5 seconds

    // Cleanup the timer in case the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
     <Component {...pageProps} />
    </>
    
  )
  

}
