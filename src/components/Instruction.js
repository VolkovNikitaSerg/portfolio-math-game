import React from "react";

const Instruction = props => (
    <div>
        {
            !props.hasStarted && (
                <p className="instruction">
                    Welcome user,<br />
                    In this game you should to solve math expressions for a certain time to score as many points as possible
                </p>
            )
        }
    </div>
);

export default Instruction;