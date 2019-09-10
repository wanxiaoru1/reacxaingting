import React, { Component } from 'react';
import Footer from "../componen/Footer"
import Home from "../view/home"
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
                        <Route path="/detail" component={Detail}></Route>
                        <Route path="/cang" component={Cang}></Route>
                        <Redirect to="/home/my"></Redirect>
                    </Switch>
                    <Footer/>
                </HashRouter>
            </div>
        );
    }
}

export default index;