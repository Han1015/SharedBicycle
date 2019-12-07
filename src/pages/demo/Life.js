import React from 'react';
import Child from './Child.js';
import './style.less';

import { Button } from 'antd';
export default class Life extends React.Component{
    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.state = {
            count: 100
        }
    } 
    handleAdd(){
        let count = this.state.count + 1;
        this.setState({
            count
        })
    }
    handleClikc = ()=>{
        this.setState({
            count: this.state.count + 100
        })
    }
    render(){
        return(
            <div className="content">
                <p>React生命周期函数</p>
                <Button type="primary" onClick={this.handleAdd}>+ 1</Button>
                <button onClick={this.handleClikc}>+ 100</button>
                <p>{this.state.count}</p>
                <Child name={this.state.count}></Child>
            </div>
        )
    }
}