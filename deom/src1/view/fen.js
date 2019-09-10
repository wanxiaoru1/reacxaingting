import React, { Component } from 'react';
import axios from "axios"
import mock from "../mock"
class fen extends Component {
    constructor(){
        super();
        this.state={
            list:[],
            xiang:[]
        }
    }
    componentDidMount(){
        axios.get("/book").then((res)=>{
            console.log(res.data);
            this.setState({
                list:res.data.list
            })
        })
    }
    btn=(id)=>{
       let xiang= this.state.list.filter(item=>item.id==id)
       
       this.setState({xiang:xiang.content})
       console.log(xiang)
    }
    render() { 
         let {list}=this.state
        return (
            <div className="biao">
            {this.state.xiang}
              {list.map((item,index)=><b key={index} onClick={this.btn.bind(this,item.id)}>{item.navtitle}</b>)} 
            </div>
        );
    }
}

export default fen;