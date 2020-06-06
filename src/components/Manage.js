import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import '../App.css'

const portalRoot = document.getElementById("portal");

class Portal extends React.Component {
    constructor() {
        super();
        this.el = document.createElement("div");
    }

    componentDidMount = () => {
        portalRoot.appendChild(this.el);
    };

    componentWillUnmount = () => {
        portalRoot.removeChild(this.el);
    };

    render() {
        const { children } = this.props;
        return ReactDOM.createPortal(children, this.el);
    }
}
export class Manage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uvs: JSON.parse(localStorage.getItem("uvs")),
            newuser: ''
        }
    }

    handleDelete = (user) => {
        console.log("Delete :" + user)

        const index = this.state.uvs.findIndex(x => x.nom === user);
        if (index !== undefined) {
            this.setState({
                uvs: this.state.uvs.splice(index, 1)
            })

        }
        localStorage.setItem('uvs', JSON.stringify(this.state.uvs))
        window.location.reload();

    }
    handleAddUser = (e) => {
        this.setState({
            newuser: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()

        fetch(`/Edt_ent_rest/myedt/result/?login=${this.state.newuser}`)
            .then(response => response.json())
            .then(result => {
                if (result.length === 0) {
                    alert("User Login exist pas!")
                } else {
                    let newuvs = { nom: this.state.newuser, uvs: result }
                    this.state.uvs.push(newuvs)
                    this.setState({
                        uvs: this.state.uvs
                    })
                    localStorage.setItem('uvs', JSON.stringify(this.state.uvs))
                    window.location.reload();
                }
            })


    }
    render() {
        const { open, onClose } = this.props;
        return (
            <Portal>
                {
                    open ? (
                        <div className="wrapper">
                            <div className="card">
                                <button onClick={onClose} className="closeButton btn btn-danger">
                                    X
                  </button>
                                <br /><br />
                                <form onSubmit={(this.handleSubmit)}>
                                    <div className="input-group mb-3">
                                        <input type="text" onChange={this.handleAddUser} className="form-control" placeholder="Ajoutez un autre agenda" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                                        <div className="input-group-append">
                                            <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Ajoutez</button>
                                        </div>
                                    </div>
                                </form>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">User</th>
                                            <th scope="col">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.uvs.map((user, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{user['nom']}</td>
                                                    <td><button onClick={this.handleDelete.bind(this, user['nom'])} type="button" className="btn btn-danger btn-sm"  >Delete</button></td>
                                                </tr>
                                            );
                                        })}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : null
                }
            </Portal>
        );
    }
}

export default Manage
