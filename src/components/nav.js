import React from 'react';
import { Link } from 'react-router-dom' ;

function Navigate() {
    return(
        <nav className="App-nav">
            <Link to="/">Homepage</Link>
            <Link to="../register-user">Register</Link>
            <Link to="../login"> Login</Link>
        </nav>
    );
};

export default Navigate;