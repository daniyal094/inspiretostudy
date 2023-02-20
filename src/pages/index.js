import React from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import HomeMain from "../components/Home/HomeMain";
import { useRouter } from "next/router";
import SplashScreen from "../components/SplashScreen";
import { useState } from "react";

export default function index() {
  const [value, setValue] = useState(true)
  const router = useRouter()
//time out to close splash
  setTimeout(() => {
    setValue(false)
  }, 5000);


  return (
    <>
      {value ? <SplashScreen /> :

        <React.Fragment>
          <Header />
          <HomeMain />
          <Footer />
        </React.Fragment>
      }
    </>
  )
}

