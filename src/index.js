import React from "react";
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
            snake: [1, 2]

        }
    }

    render(){
        return <>
            <Grid size={this.state.gridsize} food={this.state.food} snake={this.state.snake} />
        </>
    }
}


ReactDOM.render(<Game />, document.getElementById("root"));