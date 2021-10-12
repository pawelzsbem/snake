import React from "react";
import { ReactDOM } from "react-dom";
import Grid from './components/Grid.js';

class Game extends React.Component{

    constructor(props){


        super(props);
        const gridWidth = 7;
        const gridHeight = 7;
        this.state = {
            gridsize: [gridWidth, gridHeight], 
            food: [], 
            snake: []

        }
    }

    render(){
        return <>
            <Grid size={this.state.gridsize} food={this.state.food} snake={this.state.snake}></Grid>
        </>
    }
}


ReactDOM.render(<Game />, document.getElementById("root"));