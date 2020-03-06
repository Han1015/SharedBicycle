import React from 'react';

export default class Info extends React.Component{
    render(){
        return(
            <div>
                This page is info
                {this.props.match.params.value}
            </div>
        )
    }
}