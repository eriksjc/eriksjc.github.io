import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const UserList = ({ token }) => {
  const apiUrl = 'https://progcourse.000webhostapp.com';
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const fullUrl = proxyUrl + apiUrl;
  const backendUrl = 'https://opulent-trout-69v5w5wp4qw5c5r6v-3000.app.github.dev';

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(backendUrl + '/api/users', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('There was an error fetching the users!', error);
      }
    };

    if (token) {
      fetchUsers();
    }
  }, [token]);

  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

      <h1>Search Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
      <button><i class="fa-solid fa-house"></i> <Link to="/">Home</Link>     </button>
      <br />
  
      <button><i class="fa-solid fa-plus"></i>New Post</button>
      <br />
      <button><i class="fa-solid fa-gear"></i>Settings </button>
      <br />
      <button><i class="fa-solid fa-user"></i>Profile</button>
    </div>
  );
};

export default UserList;