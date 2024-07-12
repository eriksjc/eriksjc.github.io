import React from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

function Auth({ setToken, token }) {
    return (
        <div>
            <Routes>
                <Route path="/login" element={ token != '' ? <Navigate to='/' /> : <Login setToken={setToken}/>} />
                <Route path="/register" element={ token != '' ? <Navigate to='/' /> : <Register setToken={setToken}/>} />
            </Routes>
        </div>
    );
}
export default Auth;