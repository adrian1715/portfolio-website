import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

import styles from "./Modal.module.css";

function Backdrop(props) {
  const navigate = useNavigate();
  function closeHandler() {
    if (!props.onClose) {
      return navigate("..");
    }
    return props.onClose();
  }
  return <div className={styles.backdrop} onClick={closeHandler}></div>;
}

function ModalOverlay(props) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}

const portalElement = document.getElementById("modal");

export default function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}
