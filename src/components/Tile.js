import React from "react";
import { ReactDOM } from "react-dom";


class Tile extends React.Component{

    constructor(props){

        super(props);
    }

    render(){
        return <>

        <div className="tile">{this.props.X}, {this.props.Y}</div>

        </>
    }
}

export default Tile;