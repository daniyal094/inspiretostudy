import React, { useState, useEffect } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Heading from "../Heading/Heading";

export default function FaqData() {
  const [faqs, setFaqs] = useState([
    {
      question: "What is React?",
      answer:
        "React is a JavaScript library for building user interfaces developed by Facebook.",
      open: false,
    },
    {
      question: "What are the benefits of using React?",
      answer:
        "Some benefits of using React include improved performance, reusable components, and easy maintenance.",
      open: false,
    },
    {
      question: "What is the difference between React and React Native?",
      answer:
        "React is used for building web interfaces, while React Native is used for building mobile applications.",
      open: false,
    },
    ,
    {
      question: "What is the difference between React and React Native?",
      answer:
        "React is used for building web interfaces, while React Native is used for building mobile applications.",
      open: false,
    },
    ,
    {
      question: "What is the difference between React and React Native?",
      answer:
        "React is used for building web interfaces, while React Native is used for building mobile applications.",
      open: false,
    },
    ,
    {
      question: "What is the difference between React and React Native?",
      answer:
        "React is used for building web interfaces, while React Native is used for building mobile applications.",
      open: false,
    },
    ,
    {
      question: "What is the difference between React and React Native?",
      answer:
        "React is used for building web interfaces, while React Native is used for building mobile applications.",
      open: false,
    },
    ,
    {
      question: "What is the difference between React and React Native?",
      answer:
        "React is used for building web interfaces, while React Native is used for building mobile applications.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <>
      <main className="mt-5 pt-100">
        <Heading heading={"FAQ"} subHeading={"Answer to your Questions"} />

        <section className="blog__area pt-120 pb-120">
          <h2 className="text-center mb-30">How can we help you?</h2>
          <div
            className="container faq-container "
            style={{ width: "800px", margin: "0 auto", padding: "30px" }}
          >
            {faqs.map((faq, index) => (
              <div key={index} className="bg-light my-4 p-3">
                <h4
                  style={{
                    cursor: "pointer",
                    fontSize: "22px",
                    marginBottom: "30px",
                    fontWeight: "normal",
                    background: "#e9e9e9",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  className="p-3"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>Q: {faq.question}</span>
                  <span
                    style={{
                      transform: faq.open ? "rotate(270deg)" : "rotate(90deg)",
                      fontSize: "18px",
                    }}
                  >
                    {" "}
                    >{" "}
                  </span>
                </h4>
                {faq.open && (
                  <p
                    style={{
                      marginBottom: "15px",
                      padding: "20px",
                      backgroundColor: "#f2f2f2",
                      fontSize: "16px",
                      color: "black",
                    }}
                  >
                    Ans: {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
