import React from "react";
import Header from "./Header";
import Numbers from "./Numbers";
import Button from "./Button";
import GameOverModal from "./GameOverModal";
import Instruction from "./Instruction";

export default class MathGameApp extends React.Component {

    state = {
        expression: "",
        answer: 0,
        score: 0,
        minNumber: -100,
        maxNumber: 100,
        numbers: [],
        title: "Math Game",
        progressBar: 100,
        hasStarted: false,
        gameOver: false,
        timerId: undefined
    }

    handleNumberClick = e => {
        e.preventDefault();
        const userAnswer = Number(e.target.elements.number.textContent);
        if(userAnswer === this.state.answer){
            this.setState(prev => ({score: prev.score + 1}));
            this.assignState();
        }else{
            this.setState(() => ({ gameOver: true }));
            clearInterval(this.state.timerId);
        }
    }

    handleStartGame = () => this.assignState();

    handleStopGame = () => {
        clearInterval(this.state.timerId);
        this.setState(() => ({ 
            hasStarted: false,
            numbers:[],
            title: "Math Game"
         }));
    }

    reduceProgressBar = () => {
        const delay = 1000;

        const timerId = setInterval(() => {
            this.setState(prev => ({ progressBar: prev.progressBar - 10 }));
            if (this.state.progressBar <= 0) {
                this.setState(() => ({ gameOver: true }));
                clearInterval(this.state.timerId);
            }
        }, delay);

        this.setState(() => ({timerId}));

    }

    assignState = () => {
        const num_1 = this.randomIntFromInterval(this.state.minNumber, this.state.maxNumber);
        const num_2 = this.randomIntFromInterval(this.state.minNumber, this.state.maxNumber);
        const signNumber = this.randomIntFromInterval(0, 1);
        const numbers = [];
        const title = "Solve the expression";
        const hasStarted = true;
        const progressBar = 100;
        const gameOver = false;
        let signString;
        let answer;
        let expression;

        //Make answer and sign
        if (signNumber === 0){
            answer = num_1 - num_2;
            signString = "-";
        }else{
            answer = num_1 + num_2;
            signString = "+";
        }

        //Make expression
        expression = `${num_1} ${signString} ${num_2}`;

        //Populate numbers
        for (let i = 0; i < 6; i++) {
            let number = this.randomIntFromInterval(this.state.minNumber, this.state.maxNumber);
            numbers.push(number);
        }

        //Assign true answer
        numbers[this.randomIntFromInterval(0, 5)] = answer;

        //Reset timerID
        if (this.state.timerId) {
            clearInterval(this.state.timerId);
        }

        //Reset score
        if(this.state.gameOver){
            this.state.score = 0;
        }

        //Set State
        this.setState(() => ({
            answer,
            expression,
            numbers,
            title,
            hasStarted,
            progressBar,
            gameOver
        }));

        //Reduce the Progress Bar
        this.reduceProgressBar();
    }

    randomIntFromInterval = (min, max) => ( Math.floor(Math.random() * (max - min + 1) + min) );

    render(){
        return (
            <div>
                <Header
                 title = {this.state.title}
                 expression = {this.state.expression}
                 score = {this.state.score}
                 hasStarted = {this.state.hasStarted}
                 progressBar = {this.state.progressBar}/>
                <Instruction hasStarted = {this.state.hasStarted}/>
                <Numbers handleNumberClick = {this.handleNumberClick} numbers = {this.state.numbers}/>
                <Button hasStarted = {this.state.hasStarted} handleStopGame = {this.handleStopGame} handleStartGame = {this.handleStartGame}/>
                <GameOverModal 
                 gameOver = {this.state.gameOver}
                 assignState = {this.assignState}
                 score = {this.state.score}
                />
            </div>
        );
    }
}