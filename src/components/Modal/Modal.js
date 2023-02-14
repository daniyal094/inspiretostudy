import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ModalMain(props) {
  const color = false;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Receipt</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="col-xl-8 col-md-8 col-12 containerWithShadow p-4">
          <div className="d-flex justify-content-between">
            <ul>
              <li>
                <span
                  className="light-Color-Para"
                  style={{ fontWeight: "bold", color: "black" }}
                >
                  Student Name
                </span>
                <p>{props.studentName}</p>
              </li>{" "}
              <li>
                <span
                  className="light-Color-Para"
                  style={{ fontWeight: "bold", color: "black" }}
                >
                  Student Email
                </span>
                <p>{props.email}</p>
              </li>{" "}
              <li>
                <span
                  className="light-Color-Para"
                  style={{ fontWeight: "bold", color: "black" }}
                >
                  Patient Number
                </span>
                <p>{props.phoneNumber}</p>
              </li>
            </ul>
            <div>
              <div>
                <p>
                  Payment Status : <span>PAID</span>
                </p>
              </div>
              <div className="col-lg-12">
                <div
                  className="e-btn"
                  style={{ backgroundColor: "green", cursor: "pointer" }}
                >
                  <a>Receipt</a>
                </div>
              </div>
            </div>
          </div>
          <h5 className="mt-4"> Order Details</h5>
          <ul>
            {" "}
            <li>
              <span
                className="light-Color-Para"
                style={{ fontWeight: "bold", color: "black" }}
              >
                Order Number
              </span>
              <p>{props.OrderNumber}</p>
            </li>
            <li>
              <span
                className="light-Color-Para"
                style={{ fontWeight: "bold", color: "black" }}
              >
                Pakage Status
              </span>
              <p style={{ color: color ? "green" : "red" }}>Expired</p>
            </li>
          </ul>
          <h5>Package Details</h5>
          <div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col" style={{ backgroundColor: "#f9f9f9" }}>
                    <span className=" patient-appointment-table-heading">
                      Pakage Name
                    </span>
                  </th>
                  <th scope="col" style={{ backgroundColor: "#f9f9f9" }}>
                    <span className=" patient-appointment-table-heading">
                      Pakage Category
                    </span>
                  </th>
                  <th scope="col" style={{ backgroundColor: "#f9f9f9" }}>
                    <span className=" patient-appointment-table-heading">
                      Price
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Pakage</td>
                  <td>BP Measurement</td>
                  <td>7600</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
