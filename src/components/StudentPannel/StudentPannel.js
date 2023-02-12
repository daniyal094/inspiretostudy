import React, { useState , useEffect} from "react";
import Breadcrumb from "../Common/Breadcrumb";
import StudentPannelApt from "../StudenPannelApt/StudentPannelApt";
import StudentPannelOrder from "../StudenPannelOrder/StudentPannelOrder";
import StudentPannelProfile from "../StudenPannelProfile/StudentPannelProfile";

export default function StudentPannel() {
  const [state, setState] = useState("My Profile");
  const changeHandler = (value) => {
    setState(value);
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.role !== "user") {
      window.location = "/";
    }
  }, []);
  return (
    <>
      <main>
      <Breadcrumb pageTitle="Student Pannel" isImage={false}  />
        <section className="blog__area pt-120 pb-120">
          <div className="d-flex justify-content-center">
            <button
              onClick={() => {
                changeHandler("My Profile");
              }}
              className={
                state === "My Profile"
                  ? "e-btn-outline mr-20"
                  : "e-btn-std mr-20"
              }
            >
              My Profile
            </button>
            <button
              onClick={() => {
                changeHandler("My Order");
              }}
              className={
                state === "My Order" ? "e-btn-outline mr-20" : "e-btn-std mr-20"
              }
            >
              My Order
            </button>
            <button
              onClick={() => {
                changeHandler("My Appointment");
              }}
              className={
                state === "My Appointment"
                  ? "e-btn-outline mr-20"
                  : "e-btn-std mr-20"
              }
            >
              My Appointment{" "}
            </button>
          </div>
          <div>{state === "My Profile" ? <StudentPannelProfile /> : null}</div>
          <div>{state === "My Order" ? <StudentPannelOrder /> : null}</div>
          <div>{state === "My Appointment" ? <StudentPannelApt /> : null}</div>
        </section>
      </main>
    </>
  );
}
