import React, { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Heading from "../Heading/Heading";
import Teacher from "./Teacher";

export default function InstructorMain() {
  const [apiData, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    fetch("https://inspiretostudy.up.railway.app/api/v1/user/allconsultant", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(data?.response_data?.users);
        console.log(data);
      })
      .catch((err) => toast.error(err.meassge));
  }, []);

  return (
    <main className="mt-5 pt-100">
      <Heading
        heading={"Out Coaches"}
        subHeading={
          "You don't have to struggle alone, you've got our assistance and help."
        }
      />
      {loading ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div class="container">
          <div class="row vh-100 mx-0">
            {apiData?.map((item, key) => (
              <>
                  <Teacher
                    key={key}
                    teacherName={item.username}
                    position={item.role}
                  />
              </>
            ))}
          </div>
        </div>
      )}
      {/* Teacher-end */}

      {/* cta-start */}
      {/* <Banner /> */}
      {/* cta-end */}

      {/* cta-start */}
      {/* <Cta /> */}
      {/* cta-end */}
    </main>
  );
}
