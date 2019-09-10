import React, { Component } from 'react';
//import Footer from "../componen/Footer"
import Home from "../componen/Zhu"
import 'antd-mobile/dist/antd-mobile.css';
import Detail from "../view/detail"
import Cang from "../view/cang"
import "./index.css"
import {HashRouter,Route,Switch,Redirect} from"react-router-dom"
class index extends Component {
    render() {
        return (
            <div className="quan">
                <HashRouter>
                    <Switch>
                        <Route path="/home" component={Home}></Route>
                       
                        <Redirect to="/home"></Redirect>
                    </Switch>
                    
                </HashRouter>
            </div>
        );
    }
}

export default index;