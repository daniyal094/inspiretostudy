import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ModalCheckOut(props) {
  const color = false;

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onBackdropClick={props.onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">CheckOut</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="px-4">
          <div>
            <span>Please Make the transaction on EasyPaisa/Jazz Cash on </span>
            <strong> Account: +92 XXX XXXXXXX</strong>
          </div>
          <div className="sign__input mt-2">
            <input
              type="text"
              placeholder="Enter Transaction ID"
              value={props.code}
              onChange={(e) => props.setcode(e.target.value)}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => props.onApproval()}>
          {props?.loading ? (
            <>
              {" "}
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </>
          ) : (
            "Submit"
          )}{" "}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
