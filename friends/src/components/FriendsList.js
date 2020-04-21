import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
    state = {
        friendsList: [],
        isLoading: false
    };

    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        this.setState({
            ...this.state,
            isLoading: true
        })

        axiosWithAuth()
            .get('/api/friends')
            .then(response => {
                this.setState({
                    ...this.state,
                    friends: response.data,
                    isLoading: false
                })
            })
            .catch(err => {
                console.log({ err })
                this.setState({
                    ...this.state,
                    isLoading: true
                });
            })
    };

    render() {
        return (
            <div className="listContainer">
                <h2>Friends List</h2>
                {this.state.isLoading && <p>Loading Friends List...</p>}
                <div className="cardContainer">
                    {this.state.friends && this.state.friends.map(friend => (
                        <div className="cardDiv" key={friend.id}>
                            <h3>Name: {friend.name}</h3>
                            <h4>ID: {friend.id}</h4>
                            <h4>Age: {friend.age}</h4>
                            <h4>Email: {friend.email}</h4>
                        </div>
                    ))}
                </div>
            </div>
        )
    };
}

export default FriendsList;