import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter, Navigate } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import UserList from './UserList';
import Auth from './Auth';
import Content from './Content';


const App = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    let t = localStorage.getItem('token') ?? '';
    setToken(t);
  }, []);

  function signedOut() {
    setToken('');
    localStorage.removeItem('token');
  }

  return (
    <div>
      <BrowserRouter>
        {
          <>
            {
              token != '' ?
                <button onClick={signedOut}>Logout</button>
                :
                <>
                  <Link to='/login'>Login</Link>
                  <Link to='/register'>Register</Link>
                </>
            }
            <Content token={token} />
            <Auth setToken={setToken} token={token} />
          </>
        }
      </BrowserRouter>

    </div>
  )
};

export default App;