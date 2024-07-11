import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

function Auth({ setToken }) {
    return (
        <div>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>

            <Routes>
                <Route path="/login" element={<Login setToken={setToken}/>} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    );
}
export default Auth;