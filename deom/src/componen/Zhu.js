import React, { Component } from 'react';
import axios from "axios"
import "../mock"
class Zhu extends Component {
     state={list:[],idx:1,arr:[]}
    componentDidMount(){
        axios.get("/list").then(({data})=>{
            console.log(data.list)
           this.setState({list:data.list})
        })
     }
     btn=(idx)=>{
        idx++
        let lists=this.state.list.splice(0,2)
        this.setState({idx:idx++,arr:lists})

     }
    render() {
        let {idx}=this.state
        return (
            <div>
                <div><b>搜索热点</b><span onClick={this.btn.bind(this,idx)}>换一换</span></div>
                {this.state.arr.map((item,index)=><div key={index}><p><span>{item.id}</span>{item.text}<span></span></p><b>{item.view}万</b></div>)}
            </div>
        );
    }
}

export default Zhu;