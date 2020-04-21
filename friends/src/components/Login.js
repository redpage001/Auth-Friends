import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/login', this.state.credentials)
            .then(res => {
                localStorage.setItem('token', JSON.stringify(res.data.payload));
                this.props.history.push('/friends');
            })
            .catch(err => {
                console.log({err})
            })
    };

    render(){
        return (
            <div className="formContainer">
                <h2>Login</h2>
                <form onSubmit={this.login}>
                    <input 
                        placeholder="Username..."
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input 
                        placeholder="Password..."
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <br/>
                    <button>Log In</button>
                </form>
            </div>
        );
    }
}

export default Login;