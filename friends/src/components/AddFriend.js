import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

class AddFriend extends React.Component {
    state = {
        friend: {
            name: "",
            age: "",
            email: ""
        }
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post(`/api/friends`, this.state.friend)
            .then(response => {
                console.log({ response })
                this.setState({
                    friend: {
                        name: "",
                        age: "",
                        email: ""
                    }
                })
            })
            .catch(err => {
                console.log({ err })
            })
    }

    render(){
        return (
            <div className= "addContainer">
                <h2>Add Friend</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder= "Name..."
                        name= "name"
                        type= "text"
                        value= {this.state.friend.name}
                        onChange= {this.handleChange}
                    />
                    <br/>
                    <input
                        placeholder= "Age..."
                        name= "age"
                        type= "text"
                        value= {this.state.friend.age}
                        onChange= {this.handleChange}
                    />
                    <br/>
                    <input
                        placeholder= "Email..."
                        name= "email"
                        type= "text"
                        value= {this.state.friend.email}
                        onChange= {this.handleChange}
                    />
                    <br/>
                    <button>Add Friend</button>
                </form>
            </div>
        )
    }
}

export default AddFriend;