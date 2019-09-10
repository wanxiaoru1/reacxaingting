import React, { Component } from 'react';
import axios from "axios"
import "../mock"
class jing extends Component {
    btn=()=>{
        axios.post("/goodList",{page:3,pageSize:4}).then(({data})=>{
          console.log(data)
      })
  }
    render() {
        return (
            <div>
                    <button onClick={this.btn}>点我</button>
            </div>
        );
    }
}

export default jing;