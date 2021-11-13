import React from 'react';
import './Header.css';
import Nav from '../Nav/Nav'

class Header extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     }
    //     }
    render() {
        return (
            <header>
                <div className="top-bar animate-dropdown"></div>
                <div className="header-container">
                    <div className="main-header">
                        <div className="container">
                            <h1 className="site-title">Обмен валют</h1>
                        </div>
                    </div>
                   
                </div>
                <Nav/>
            </header>
        );
    }
}

export default Header;
