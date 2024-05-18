import React, { useState } from 'react';
import Styles from './Styles.css';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import HomePage from './HomePage/Home';

// import ProductsPage from './pages/ProductsPage';

function Join() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to backend or perform validation
        console.log(formData);
        // Reset form fields after submission
        setFormData({
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      };
    
	return(

    <div> 
        <i class="fa-brands fa-instagram"></i>
            <BrowserRouter>
                <div>
                    <nav>
                        <ul>
                       <form onSubmit={handleSubmit}>
                       <div class="lab">
 <div>
     
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required class="input" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required class="inp"/>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required class="inpu"/>
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </div>
        <button type="submit" class="sub">Register</button>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        </div>
      </form>

                        </ul>
                    </nav>

                    <Routes>
<Route exact path="/" component={HomePage} />
                  </Routes>
                </div>
            </BrowserRouter>
</div>
    ) 
}

export default Join
       