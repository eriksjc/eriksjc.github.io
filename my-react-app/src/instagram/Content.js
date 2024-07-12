import React from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import HomePage from "./HomePage";
import UserList from "./UserList";

function Content({ token, signedOut }) {
    return (
        <div>
            <Routes>
                <Route path="/" element={token != '' ? <HomePage /> : <Navigate to='/login' /> } />
                <Route path="/users" element={token != '' ? <UserList token={token}/> : <Navigate to='/login' /> } />
            </Routes>
        </div>
    );
}
export default Content;