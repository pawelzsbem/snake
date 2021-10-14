import React from "react";
import { ReactDOM } from "react-dom";

function tuplesEqual(a0, a1, b0, b1){

    if ((a0===b0)&&(a1===b1)){
        return true;
    }
    return false;
};
//check if elem is in Array arr
function inArray(elemX, elemY, arr){

    

    if(arr.length<1){        
        return false;
    }

    for (var i = 0; i < arr.length; i+=2){

        if((arr[i] === elemX)&& (arr[i+1]===elemY)){

            return true;
        }
    }

    return false;

}

class Tile extends React.Component{

    constructor(props){

        super(props);
    }

    render(){

        let ClassN = tuplesEqual(this.props.X, this.props.Y, this.props.food[0], this.props.food[1]) ? "tile food" : "tile";
        ClassN = tuplesEqual(this.props.X, this.props.Y, this.props.snake[0], this.props.snake[1]) ? "tile snake" : ClassN;
        ClassN = inArray(this.props.X, this.props.Y, this.props.body)? "tile body": ClassN;

        return (<div className={ClassN}>({this.props.X}, {this.props.Y})</div>);
    }

}
       


export default Tile;