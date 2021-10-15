import React from "react";
import Tile from './Tile.js';

class Grid extends React.Component{

    constructor(props){

        super(props);
    }


    render(){


        let grid = Array(this.props.size[0]).fill(Array(this.props.size[1]).fill(null));
        return (<> <div className="grid"> {grid.map((gridX, indexX)=>
            {return ( <div className="snake-row"> { gridX.map((valueY, indexY) => {
                 return <Tile X={indexX} Y={indexY} snake={this.props.snake} food={this.props.food} body={this.props.body}></Tile>} )  } </div>);  }  )} </div> 
                 <div className="button-area"> 

                 <table>
                     <tr><td></td><td><button className="dir" onClick={()=>this.props.onClick("up")}>up</button></td><td></td></tr>
                     <tr><td><button className="dir"  onClick={()=>this.props.onClick("left") }>left</button></td><td></td><td><button className="dir"onClick={()=>this.props.onClick("right") } >right</button></td></tr>
                     <tr><td></td><td><button className="dir"onClick={()=>this.props.onClick("down") } >down</button></td><td></td></tr>
                     

                </table>

                <p>
                    Current direction: {this.props.dir}
                </p>

                <p>
                    Time elapsed: {this.props.time}
                </p>

                <p>
                    Points: {this.props.points}
                </p>

                <p>
                    <button onClick={() => this.props.onReset()}>Reset</button>
                    <button onClick={()=>this.props.onPause()}>Pause</button>
                    <button onClick={() => this.props.onGoOn()}>Go On</button>
                </p>

                <h1>{this.props.reset? "Snake ate itself. Push Reset and Go On to play again" : ""}</h1>



                 
                 </div></>);
    }
}



export default Grid;