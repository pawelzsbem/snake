import React from "react";
import Tile from './Tile.js';

class Grid extends React.Component{

    constructor(props){

        super(props);
    }


    render(){


        let grid = Array(this.props.size[0]).fill(Array(this.props.size[1]).fill(null));
        return grid.map((gridX, indexX)=>{return gridX.map((valueY, indexY) => {return <Tile X={indexX} Y={indexY} snake={this.props.snake} food={this.props.food}></Tile>} )} )
    }
}



export default Grid;