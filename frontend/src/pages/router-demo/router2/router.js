import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Main from './main';
import About from '../router1/about';
import Topic from '../router1/topic';
import Home from './home';

export default class Irouter extends React.Component{
    render(){
        return(
           <Router>
                <Home>
                    {/* 外层路由不能添加精准匹配“exact”， 因为在点击子路由的时候，是先进入该子路有所在的外层路由
                    再进入子路由的， 如果外层路由添加了精准匹配，就进不来了。
                    例如： 现在要进入路由'/main/a'， 如果'/main'，添加了精准匹配，就不会进来了，也就渲染子路由的组件 */}
                    <Route  path="/main" render={()=>{
                        return (
                            <Main>
                                <Route path="/main/a" component = {About}></Route>
                            </Main>
                        )
                    }}></Route>
                    <Route path="/about" component = {About}></Route>
                    <Route path="/topic" component = {Topic}></Route>    
                </Home> 
           </Router>
        )
    }
}