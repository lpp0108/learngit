import React from 'react';

class Son extends React.Component{
    constructor(){
        super();
    }
    bghandler=(e)=>{
        this.props.bghandler("green");
    }
    render(){
        return (
            <div>
                <p>子组件{this.props.bgColor}</p>
                <button onClick={this.bghandler(e)}></button>
            </div>
        )
    }
}
export default Son;