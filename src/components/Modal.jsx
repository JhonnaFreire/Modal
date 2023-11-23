import "./Modal.scss";
import Logo from "../img/Paypal.png";

export function Modal({ open, onClose }) {
  if (!open) return;
  return (
    <section className="container" onClick={onClose} >
      <div className="sub-container" onClick={(e) => {
        e.stopPropagation()
      }} >
        <div className="content">
          <div>
            <img src={Logo} width="48" />
          </div>
          <div className="message">
            <div className="title">
              <h3>Payment succesfull</h3>
            </div>
            <div className="text">Thank you for your preference</div>
          </div>
        </div>
        <div className="actions">
          <button className="btn-download">Download</button>
          <button className="btn-back" onClick={onClose} >Back</button>
        </div>
      </div>
    </section>
  );
}
