import React, { Component } from 'react'
import { Link, NavLink } from "react-router-dom";
import Manage from './Manage'
export default class Menu extends Component {

    
    state = {
        showManage: false

    };

    handleShowManage = () => {
       this.setState({
           showManage: !this.state.showManage
       })
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/home">Home</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={this.handleShowManage}>Manage</button>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/sign-in">Disconnect</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Manage open={this.state.showManage} onClose={this.handleShowManage} ></Manage>
            </div>
        )
    }

}

