import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    const { isAuthenticated, login } = this.props.auth;
    return (
      <>
        <h1>Home</h1>
        {isAuthenticated() ? (
          <Link to="/profile">View Profile</Link>
        ) : (
          <button onClick={login}>Log In</button>
        )}
      </>
    );
  }
}

export default Home;
