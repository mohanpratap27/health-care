import React, { useState,useEffect} from 'react';
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "./Layout/layout";
import Banner from "./Components/HomePage/Banner";
import Features from "./Components/HomePage/Features";
import HealthProduct from "./Components/HomePage/health-products";
import Artical from "./Components/HomePage/articles";
import Testimonial from "./Components/HomePage/testimonial";
import Footer from "./Layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {



  return (
    <>
    <Layout>
       <Banner title={"Your health is our top priority"} tag={"Schedule your visit today and experience expert care with personalized attention and compassion."}/>
       <Features/>
       <HealthProduct/>
       <Artical/>
       <Testimonial/>
    </Layout>
    </>
  );
}
