import React from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import HomeMain from "../components/Home/HomeMain";
import { useRouter } from "next/router";
import SplashScreen from "../components/splashScreen";
import { useState } from "react";

export default function index() {
  const [value, setValue] = useState(true)
  const router = useRouter()

  setTimeout(() => {
    setValue(false)
  }, 5000);

  console.log(value);
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

