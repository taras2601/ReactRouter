import React from 'react';
import './App.css';
import {Link} from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul className="nav-links">
                <Link className="navStyle" to='/features/todo/TodoListContainer'>
                    <li>ToDo</li>
                </Link>
                <Link className="navStyle" to='/features/counter/CounterContainer'>
                    <li>Counter</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;