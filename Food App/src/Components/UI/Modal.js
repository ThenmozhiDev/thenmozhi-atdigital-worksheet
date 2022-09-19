import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import {createPortal} from 'react-dom';
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");
console.log(portalElement);

const Modal = (props) => {
  return (
  <Fragment>
    <Backdrop onClose={props.onClose}/>
    {createPortal(<Backdrop />, portalElement)}
    {createPortal(
      <ModalOverlay>{props.children}</ModalOverlay>,
      portalElement
    )}
    <ModalOverlay>{props.children}</ModalOverlay>
  </Fragment>
  )
};

export default Modal;
