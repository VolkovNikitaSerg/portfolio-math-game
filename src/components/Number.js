import React from "react";

const Number = props => (
    <form onSubmit = {props.handleNumberClick}>
        <button name="number" className="number">{props.numberValue}</button>
    </form>
);

export default Number;