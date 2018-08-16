import React from 'react';
import Modal from 'react-modal';

const OptionModal=(props)=>{
  return (
    <div className="modal__container">
      <Modal
        isOpen={props.modalIsOpen}
        contentLabel="Example Modal"
        onRequestClose={props.clickCloseHandler}
        className="modal"
      >
       <h3>Selected Option</h3>
      <h1>{props.msg}</h1>
      <button onClick={props.clickCloseHandler} className="button button__small">Okay</button>
      </Modal> 
    </div>
  );

}
export default OptionModal;