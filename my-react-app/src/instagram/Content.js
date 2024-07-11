import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import HomePage from "./HomePage";
import UserList from "./UserList";

function Content({ setToken }) {
    return (
        <div>
            {/* <Link to='/'>Home</Link>
            <Link to='/users'>Users</Link> */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/users" element={<UserList />} />
            </Routes>
        </div>
    );
}
export default Content;