import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Heading from "../Heading/Heading";
import ModalCheckOut from "../Modal/ModalCheckOut";

const Plan = (props) => {
  const [show, setshow] = useState(false);
  const [selectedPackage, setselectedPackage] = useState("");
  const [loading, setLoading] = useState(false);
  const [code, setcode] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const token = JSON.parse(localStorage.getItem("token"));
  const clickHandler = () => {
    if (user?.role === "user") {
      setselectedPackage(props.id);
      setshow(true);
    } else {
      toast.info("Please login as a student to purchase package");
    }
    // Swal.fire("Good job!", "Your Package add to cart", "success");
  };
  const onApprovalData = () => {
    setLoading(true);
    const apiData = {
      user_id: user?.id,
      package_id: selectedPackage?._id,
      package_name: selectedPackage.name,
      paymentCode: code,
      username: user?.username,
    };
    console.log(apiData);
    console.log('user---->', user);
    if (code) {
      fetch("https://inspiretostudy.up.railway.app/api/v1/mypackage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...apiData,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          if (data.response_code === 200 || data.response_code === 201) {
            Swal.fire("Good job!", "Your Package add to cart", "success");
            toast.success("Package Purchased.");
          } else {
            toast.error(data.response_message);
          }
        })
        .catch((err) => {
          setLoading(false);
          toast.error(err.message);
        });
      setshow(false);
    } else {
      setLoading(false);
      toast.error("Please enter a valid code ");
    }
  };
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-header py-3">
        <h4 className="my-0 font-weight-normal">{props.header}</h4>
      </div>
      <div className="card-body">
        <h2 className="card-title pricing-card-title">
          {`${props.price}`}
          <small className="text-muted">/ mo</small>
        </h2>
        <ul className="list-unstyled mt-4 mb-4 px-1">
          <li className="d-flex justify-content-between my-3">
            <strong>Promotion</strong>
            {props.promotion}
          </li>
          <li className="d-flex justify-content-between my-3">
            <strong>Frequancy</strong>
            {props.frequancy}
          </li>
          <li className="d-flex justify-content-between my-3">
            <strong>Group Size</strong>
            {props.groupSize}
          </li>
          <li className="d-flex justify-content-between my-3">
            <strong>Free Resources</strong>
            {props.freeResources}
          </li>
          <li className="d-flex justify-content-between my-3">
            <strong>Teacher</strong>
            {props.teacher}
          </li>
        </ul>
        <button
          onClick={() => clickHandler()}
          className={`e-btn`}
          type="button"
        >
          {props.buttonLabel}
        </button>
      </div>
      <ModalCheckOut
        show={show}
        onApproval={onApprovalData}
        onHide={() => setshow(false)}
        setcode={setcode}
        loading={loading}
      />
    </div>
  );
};

export default function Packages() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://inspiretostudy.up.railway.app/api/v1/packages")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(data?.response_data?.packages);
      })
      .catch((err) => toast.error(err.meassge));
  }, []);

  return (
    <div className="comparison ">
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
        <div className="container pt-80 ">
          <div className="row justify-content-center">
            <Heading
              heading={"Programs"}
              subHeading={"Purchase to get enroll"}
            />
            {data?.map((item, key) => (
              <>
        
                {item?.status && (
                  <div className="col-lg-4 col-md-6 col-12 pt-30">
                    <Plan
                      header={item?.name}
                      price={item?.price}
                      buttonLabel={"Purchase"}
                      promotion={item?.promotion}
                      frequancy={item?.frequency}
                      groupSize={item?.groupSize}
                      freeResources={item?.freeResources}
                      teacher={item?.teacher}
                      id={item}
                    />
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
