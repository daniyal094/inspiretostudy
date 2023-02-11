import Link from "next/link";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";



const Plan = props => {

  const clickHandler = () => {
    Swal.fire(
      'Good job!',
      'Your Package add to cart',
      'success'
    )
  }
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">
          {props.header}
        </h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">
          {`${props.price}`}
          <small className="text-muted">
            / mo
          </small>
        </h1>
        <ul className="list-unstyled mt-3 mb-4">
          <li className="d-flex justify-content-between my-1">
            <strong>
              Promotion
            </strong>
            {props.promotion}
          </li>
          <li className="d-flex justify-content-between my-1">
            <strong>
              Frequancy
            </strong>
            {props.frequancy}
          </li>
          <li className="d-flex justify-content-between my-1">
            <strong >
              Group Size
            </strong>
            {props.groupSize}
          </li>
          <li className="d-flex justify-content-between my-1">
            <strong >
              Free Resources
            </strong>
            {props.freeResources}
          </li>
          <li className="d-flex justify-content-between my-1">
            <strong >
              Teacher
            </strong>
            {props.teacher}
          </li>
        </ul>
        <button
          onClick={clickHandler}
          className={`btn btn-lg btn-block ${props.outline
            ? "btn-outline-primary"
            : "btn-primary"
            }`}
          type="button"
        >
          {props.buttonLabel}
        </button>
      </div>
    </div>
  );
};



export default function Packages() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch("http://192.168.222.221:8000/api/v1/packages")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false)
        setData(data?.response_data?.packages)
      });
  }, [])
  console.log(data);


  return (
    <div className="comparison">
      {loading ? (
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      ) : (

        <div className="container">
          <div className="row justify-content-center">
            {data?.map((item, key) => (
              <>
                {item?.status && (
                  <div className="col-lg-4 col-md-6 col-12">
                    <Plan header={item?.name} price={item?.price} buttonLabel={"Purchase"} promotion={item?.promotion} frequancy={item?.frequency} groupSize={item?.groupSize} freeResources={item?.freeResources} teacher={item?.teacher} />
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
