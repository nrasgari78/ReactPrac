import React, {Component} from "react";
class ProductClassBase extends Component{
state={
    count:5
}

    render() {
        return (
            <div>
                <span>title:{this.state.count}</span>
                <button onClick={this.IncrementHandler}>Add</button>
                <button onClick={this.DecrementHandler}>Remove</button>
            </div>
        )
    }
    IncrementHandler= ()=>{
    this.setState({count:this.state.count+1})
    }
    DecrementHandler =()=>{
        this.setState({count:this.state.count-1})

    }
}

export default ProductClassBase
