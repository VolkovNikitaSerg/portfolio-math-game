import React from "react";
import Number from "./Number";

const Numbers = props => (
    <div className = "container">
        {
            props.numbers.map((number, index) => 
            <Number
            key = {index}
            numberValue = {number}
            handleNumberClick = {props.handleNumberClick}
            />
            )
        }
    </div>
)

export default Numbers;