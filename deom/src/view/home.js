import React, { Component } from 'react';
import Header from"../componen/Header"
import My from "../view/my"
import Re from "../view/re"
import Jing from "../view/jing"
import Fen from "../view/fen"
import {HashRouter,NavLink,Route} from"react-router-dom"
import Nei from"../componen/Nei"
class home extends Component {
    render() {
        return (
            <div className="home">
                <HashRouter>
                    <Header/>
                    <div className="nav">
                    <NavLink to="/home/my">我的</NavLink>
                    <NavLink to="/home/re">热门</NavLink>
                    <NavLink to="/home/fen">分类</NavLink>
                    <NavLink to="/home/jing">精品</NavLink>
                    </div>  
                    <Route path="/home/my" component={My}></Route>
                    <Route path="/home/re" component={Re}></Route>
                    <Route path="/home/fen" component={Fen}></Route>
                    <Route path="/home/jing" component={Jing}></Route>
                </HashRouter>
            </div>
        );
    }
}

export default home;