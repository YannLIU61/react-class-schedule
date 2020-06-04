import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import { Redirect } from "react-router-dom";
import DataFormator from './outil/DataFormator'
export class LoginComp extends Component {

    state = {
        user: '',
        remember: true,
        uvs: '',
        isLoggIn: false
    }

    handleUser = (e) => {
        this.setState({
            user: e.target.value
        })
    }
    handleCheck = e => {
        this.setState({
            remember: e.target.checked
        })
    }

    handleLogin = (e) => {
        e.preventDefault()

        fetch(`/Edt_ent_rest/myedt/result/?login=${this.state.user}`)
            .then(response => response.json())
            .then(result => {
                if (result.length === 0) {
                    alert("User Login exist pas!")
                } else {
                   console.log(DataFormator(result));
                    this.setState({
                        uvs: result,
                        isLoggIn: true
                    })
                }
            })
    }




    render() {
        if (this.state.isLoggIn) {
            return (<Redirect to={{ pathname: '/home', state: { uvs: DataFormator(this.state.uvs) , user: this.state.user} }} />);
        } else {
            return (
                <div className="App">
                    <div className="auth-wrapper">
                        <div className="auth-inner">
                            <form onSubmit={this.handleLogin}>
                                <h3>Sign In</h3>
                                <div className="form-group">
                                    <label>Login UTC</label>
                                    <input type="text" className="form-control" value={this.state.user} onChange={this.handleUser} />
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" checked={this.state.remember} onChange={this.handleCheck} />
                                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                            </form>
                        </div>
                    </div>
                </div >
            )
        }
    }
}

export default LoginComp
