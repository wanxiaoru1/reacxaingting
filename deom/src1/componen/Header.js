import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div>想听FM</div>
                <input type="text" placeholder="抖音"/>
            </div>
        );
    }
}

export default Header;