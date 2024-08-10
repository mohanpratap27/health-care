import { useEffect } from 'react';
import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';
export default function Layout({children}) {
    return (
        <>
            <Header/>
            <div className='site-header-show'></div>
            {children}
            <Footer/>
        </>
    )
}