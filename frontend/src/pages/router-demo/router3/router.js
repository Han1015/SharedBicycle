import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Main from './main';
import About from '../router1/about';
import Info from './info';
import Topic from '../router1/topic';
import Home from './home';
import NoMatch from './nomatch';
export default class Irouter extends React.Component{
    render(){
        return(
           <Router>
                <Home>
                    <Switch>
                        {/* 外层路由不能添加精准匹配“exact”， 因为在点击子路由的时候，是先进入该子路有所在的外层路由
                        再进入子路由的， 如果外层路由添加了精准匹配，就进不来了。
                        例如： 现在要进入路由'/main/a'， 如果'/main'，添加了精准匹配，就不会进来了，也就渲染子路由的组件 */}
                        <Route  path="/main" render={()=>{
                            return (
                                <Main>
                                    <Route path="/main/:value" component = {Info}></Route>
                                </Main>
                            )
                        }}></Route>
                        <Route path="/about" component = {About}></Route>
                        <Route path="/topic" component = {Topic}></Route> 
                        {/* 下面这个路由没有写path, 这是上面的路由都匹配不到的情况下，就会
                        进入这个路由，404页面*/}
                        <Route component={NoMatch}></Route>   
                    </Switch>
                </Home> 
           </Router>
        )
    }
}