import React from "react";
//import { Link } from 'react-router-dom';
import loginImg from "../trainimg.svg";

export class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {username:'',password:''};
    }
    handleChange = ({target}) => {
        this.setState({[target.name]:target.value });
    }
    render() {
        return <div className="base-container">
            <div className="header">Train Ticket Booking {this.props.usernameper} </div>
            <br />
            <div className="content">
                <div className="image">
                    <img src={loginImg} />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            name="username" 
                            value={this.state.username} 
                            onChange={this.handleChange} 
                            placeholder="username" 
                        />

                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            value={this.state.password} 
                            onChange={this.handleChange} 
                            placeholder="password" 
                        />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">Login</button>
            </div>
            <div className="footer">
                <button to="#" type="button" className="btn">Register</button>
            </div>
        </div>
    }
}