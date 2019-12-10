import React from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import Admin from './admin.js';
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import NoMatch from './pages/nomatch';
import Loadings from './pages/ui/loadings';
import Notice from './pages/ui/notice';
import Messages from './pages/ui/messages';
import NewTabs from './pages/ui/tabs';
import Gallery from './pages/ui/gallery';
import NewCarousel from './pages/ui/carousel';
import FormLogin from './pages/form/formlogin';
import FormRegister from './pages/form/formregister';
import BasicTable from './pages/tabel/basictable';
export default class IRouter extends React.Component{
    render(){
        return(
            <Router>
                <App>
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" render={()=>{
                        return(
                            <Admin>
                                <Switch>
                                    <Route path="/admin/ui/buttons" component={Buttons}/>
                                    <Route path="/admin/ui/modals" component={Modals}/>
                                    <Route path="/admin/ui/loadings" component={Loadings}/>
                                    <Route path="/admin/ui/notification" component={Notice}/>
                                    <Route path="/admin/ui/messages" component={Messages}/>
                                    <Route path="/admin/ui/tabs" component={NewTabs}/>
                                    <Route path="/admin/ui/gallery" component={Gallery}/>
                                    <Route path="/admin/ui/carousel" component={NewCarousel}/>
                                    <Route path="/admin/form/login" component={FormLogin}/>
                                    <Route path="/admin/form/reg" component={FormRegister}/>
                                    <Route path="/admin/table/basic" component={BasicTable}/>
                                    
                                    
                                    <Route component={NoMatch}/>
                                </Switch>
                            </Admin>
                        )
                    }}/>
                    
                </App>
            </Router>
        )
    }
}