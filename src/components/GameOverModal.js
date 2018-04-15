import React from "react";
import Modal from "react-modal";

const GameOverModal = props => (
    <Modal
        ariaHideApp={false}
        isOpen={props.gameOver}
        onRequestClose={props.assignState}
        contentLabel="Game Over"
        closeTimeoutMS={500}
        className="modal"
    >
        <h3 className="modal__title">Game Over</h3>
        <p className="modal__body">Your score: {props.score}</p>
        <button className="button" onClick={props.assignState}>Ok</button>
    </Modal>
);

export default GameOverModal;