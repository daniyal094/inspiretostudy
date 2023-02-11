import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ModalCheckOut(props) {
    const color = false;
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">CheckOut</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <div>
                        <span>Please Make the transaction on EasyPaisa/JazzCash Account</span>
                        <p>+92 XXX XXXXXXX</p>
                    </div>
                    <div className="sign__input">
                        <input type="text" placeholder="Enter Transaction ID" />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onApproval}>Submit</Button>
            </Modal.Footer>
        </Modal>
    );
}
