import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";

import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";


function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <NavLink to="/">
            <h3 className="navLink">Home</h3>
          </NavLink>
          <NavLink to="/login">
            <h3 className="navLink">Login</h3>
          </NavLink>
          <NavLink to="/friends">
            <h3 className="navLink">Friends List</h3>
          </NavLink>
          <NavLink to="/add-friends">
            <h3 className="navLink">Add Friends</h3>
          </NavLink>
        </nav>

        <Switch>
          <Route path="/login" component={Login}/>
          <ProtectedRoute exact path="/friends" component={FriendsList}/>
          <ProtectedRoute exact path="/add-friends" component={AddFriend}/>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
