import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../Layout/layout";
import { BARREL_OPTIMIZATION_PREFIX } from "next/dist/shared/lib/constants";
import Banner from "../Components/HomePage/Banner";
import Vision from "../Components/AboutPage/Vision";
import OurServices from "../Components/AboutPage/our-services";

const inter = Inter({ subsets: ["latin"] });

export default function home2() {
  return (
    <>
    <Layout>
      <Banner title={"About us"} tag={"At HEALTH CARE, we are committed to revolutionizing healthcare by providing easy access to a wide range of medical services. Our platform is designed to connect patients with experienced healthcare professionals, making it simple to manage your health from the comfort of your home."} />
      <Vision/>
      <OurServices/>
    </Layout>
    </>
  );
}
