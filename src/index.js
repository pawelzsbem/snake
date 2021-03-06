import React, { useState } from "react";
import ReactDOM from "react-dom";
import Grid from './components/Grid.js';
import "./index.css";
import { inArray } from './components/equal.js';



class Game extends React.Component{

    constructor(props){


        super(props);
        const gridWidth = 20;
        const gridHeight = 20;
        this.state = {
            gridsize: [gridWidth, gridHeight], 
            food: [3, 6], 
            snake: [1, 2], 
            direction: "left", 
            time: 0,
            reset: false,
            body: [[2, 2]], 
            intval: {}

        }
        this.onClick = this.onClick.bind(this);
        this.timeElaps = this.timeElaps.bind(this);
        this.onReset = this.onReset.bind(this);
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

            let newBody = [this.state.snake];
            for(var i = 0; i < this.state.body.length-1; i++){
                newBody[i+1] = this.state.body[i];
            }
            
        let newFood = this.state.food;
        if ((newSnake[0]===this.state.food[0])&&(newSnake[1]===this.state.food[1])){
            
            const last = newBody.length;
            newBody[last] =  this.state.food.slice();
           do {
                newFood[0] = Math.floor(Math.random() * this.state.gridsize[0]);
                newFood[1] = Math.floor(Math.random() * this.state.gridsize[1]);
            } while(Boolean(inArray(newFood[0], newFood[1], this.state.body)))

            

        }
        
        if (Boolean(inArray(newSnake[0], newSnake[1], this.state.body)) ){

            this.onPause();

            this.setState({reset: true});
            

        

        } else{
        this.setState({snake: newSnake, time: this.state.time + 1, food: newFood, body: newBody});
    }

    }


    componentDidMount(){
        this.setState({snake: [parseInt(this.state.gridsize[0]/2), parseInt(this.state.gridsize[1]/2)], 
            body:  [parseInt(this.state.gridsize[0]/2) + 1, parseInt(this.state.gridsize[1]/2)],
            intval: setInterval(this.timeElaps, 500)
         });
        

        document.addEventListener('keydown', (event)=>{this.onKey(event)})
    }

    onKey(event){
        let dir = this.state.direction;

        console.log(`key: ${event.code}`);
        switch (event.code){

            case "ArrowUp":
                dir = "up";
                break;
            case "ArrowDown":
                dir = "down";
                break;
            case "ArrowLeft":
                dir = "left";
                break;
            case "ArrowRight":
                dir = "right";
                break;

        }
        
        this.setState({direction: dir});
    }

    onClick(nxtDir){
        this.setState({direction: nxtDir});

    }

    onReset(){
        console.log(`reset`);
        this.setState({
            
            food: [3, 6], 
            snake: [1, 2], 
            direction: "left", 
            time: 0,
            reset: false,
           
            body: [[2, 2]]

        });
        return;
    }

    onPause(){
        
        clearInterval(this.state.intval);
    }

    onGoOn(){
        this.setState({intval: setInterval(this.timeElaps, 500)});

    }

    render(){
        return <>
            <Grid size={this.state.gridsize} 
            time={this.state.time}
            food={this.state.food} 
            snake={this.state.snake} 
            dir={this.state.direction}
            body={this.state.body}
            points={this.state.body.length}
            reset={this.state.reset}
            onClick={() => this.onClick()} 
            onReset={() => this.onReset()}
            onPause={() => this.onPause()}
            onGoOn ={() => this.onGoOn()}/>
        </>
    }
}

ReactDOM.render(<Game />, document.getElementById("root"));