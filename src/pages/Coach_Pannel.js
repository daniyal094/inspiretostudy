import React from "react";
import CoachPannel from "../components/CoachPannel/CoachPannel";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";
import StudentPannel from "../components/StudentPannel/StudentPannel";

export default function student_pannel() {
    return (
        <>
            <Header />
            <CoachPannel />
            <Footer />
        </>
    );
}
