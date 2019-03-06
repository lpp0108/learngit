import React from 'react';

import Son from './son';
class Father extends React.Copmonent{
    constructor(){
        super();
        this.state={bgColor:'#999'}
    }
    bgChang(color){
        this.setState({baColor:color})
    }
    render(){
        return (
            <div>
                <Son bg1={this.state.bgColor} backColor={(color)=>{this.bgChang(color)}}/>
            </div>
        )
    }
}

export default Father;