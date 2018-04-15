import React from "react";

export default class Button extends React.Component {

    returnButton = () => {
        if (this.props.hasStarted){
            return (
                <button onClick={this.props.handleStopGame} className="button">Stop</button>
            )
        }
        else{
            return(
                <button onClick={this.props.handleStartGame} className="button">Start</button>
            )
        }
    }

    render(){
        return(
            <div className="button-container">
                {this.returnButton()}
            </div>
        )
    }

}