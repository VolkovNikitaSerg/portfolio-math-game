import React from "react";
import Progress from "react-progressbar";

const Header = props => (
    <div className = "header">
        <h1 className="header__title">{props.title}</h1>
        {
            props.hasStarted && 
                <div>
                    <p className="header__expression">{props.expression}</p>
                    <Progress completed={props.progressBar} style={{ border: "1px solid white" }} color="#c42525" className="header__progress" />
                    <div className="header__score">Score: {props.score}</div>
                </div>
        }
    </div>
);

export default Header;