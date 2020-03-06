import React from 'react';

export default class Child extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count: 100
        }
    }s

    componentWillMount(){
        console.log("will mount")
    }
    componentDidMount(){
        console.log("did mount");
    }
    UNSAFE_componentWillReceiveProps(newProps){
        console.log("new props " + newProps.name)
    }
    shouldComponentUpdate(){
        console.log("should update")
        return true;
    }
    componentWillUpdate(){
        console.log("will update")
    }
    componentDidUpdate(){
        console.log("did update")
    }
    render(){
        return(
            <div>
                <p>{this.props.name}</p>
            </div>
        )
    }
}