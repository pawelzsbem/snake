import React, { useState } from "react";
import ReactDOM from "react-dom";
import Grid from './components/Grid.js';
import "./index.css";



class Game extends React.Component{

    constructor(props){


        super(props);
        const gridWidth = 7;
        const gridHeight = 7;
        this.state = {
            gridsize: [gridWidth, gridHeight], 
            food: [3, 6], 
            snake: [1, 2], 
            direction: "left", 
            time: 0,
            length: 1,
            body: []

        }
        this.onClick = this.onClick.bind(this);
        this.timeElaps = this.timeElaps.bind(this);
    }

    timeElaps(){
        //this.setState({time: this.state.time + 1});

        let newSnake = [];
        let tmp = 0;
        const gridSizX = this.state.gridsize[0];
        const gridSizY = this.state.gridsize[1];


        switch(this.state.direction){           
            
            case "up":
                tmp = this.state.snake[0] - 1 < 0? this.state.gridsize[0] - 1 :this.state.snake[0] - 1;
                newSnake = [tmp, this.state.snake[1] ];
                break;
            case "down":
                tmp = (this.state.snake[0] + 1) % this.state.gridsize[0];
                newSnake = [tmp, this.state.snake[1] ];
                break;
            case "left":
                tmp = this.state.snake[1] - 1 < 0? this.state.gridsize[1] - 1 :this.state.snake[1] - 1;
                newSnake = [this.state.snake[0], tmp ];
                break;
            case "right":
                tmp = (this.state.snake[1] + 1) % this.state.gridsize[0];
                newSnake = [this.state.snake[0], tmp ];
                break;

            default:
                newSnake = [parseInt(this.state.gridsize[0]/2), parseInt(this.state.gridsize[1]/2)];
        }

            let newBody = this.state.snake;
            for(var i = 2; i + 1 < this.state.body.length; i+=2){

                newBody[i] = this.state.body[i-2];
                newBody[i+1] = this.state.body[i-1];
            }

        if ((newSnake[0]===this.state.food[0])&&(newSnake[1]===this.state.food[1])){
            let newFood = this.state.food;
            
            newFood[0] = Math.floor(Math.random() * this.state.gridsize[0]);
            newFood[1] = Math.floor(Math.random() * this.state.gridsize[1]);

            newBody = [...this.state.body, this.state.snake[0], this.state.snake[1]];


            this.setState({snake: newSnake, time: this.state.time + 1, food: newFood, body: newBody});

        }else{

        this.setState({snake: newSnake, time: this.state.time + 1});
        }


    }


    componentDidMount(){
        this.setState({snake: [parseInt(this.state.gridsize[0]/2), parseInt(this.state.gridsize[1]/2)]});
        setInterval(this.timeElaps, 500);
    }

    onClick(nxtDir){
        this.setState({direction: nxtDir});

    }

    render(){
        return <>
            <Grid size={this.state.gridsize} time={this.state.time} food={this.state.food} snake={this.state.snake} dir={this.state.direction} body={this.state.body} onClick={this.onClick} />
        </>
    }
}

ReactDOM.render(<Game />, document.getElementById("root"));