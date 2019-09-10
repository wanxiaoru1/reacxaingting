import React, { Component } from 'react';
import '../mock'
import axios from 'axios';
class Shuju extends Component {
    btn=()=>{
    axios.post("/goodlist",{page:1,pageSize:5}).then(({data})=>{
            console.log(data)
        })
    }
    render() {
        return (
            <div>
                <biutton onClick={this.btn}>点击登录</biutton>
            </div>
        );
    }
}

export default Shuju;