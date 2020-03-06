import React from 'react';
import { Link} from 'react-router-dom';

export default class Main extends React.Component{
    render(){
        return(
            <div>
                This is Main
                <Link to="/main/test-id">嵌套1</Link>
                <br/>
                <Link to="/main/456">嵌套2</Link>
                <hr/>
                {this.props.children}
            </div>
        )
    }
}