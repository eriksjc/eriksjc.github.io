import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [user, setUser] = useState(null);
  const posts = [
    {
      id: 1,
      username: 'user1',
      imageUrl: 'https://dummyjson.com/150',
      likes: 10,
      comments: 3,
    },
    {
      id: 2,
      username: 'user2',
      imageUrl: 'https://dummyjson.com/150',
      likes: 20,
      comments: 5,
    },
  ];
  const Post = ({ username, imageUrl, likes, comments }) => (
    <div className="post">
      <img src={imageUrl} alt="Post" />
      <div className="post-details">
        <p>Username: {username}</p>
        <p>Likes: {likes}</p>
        <p>Comments: {comments}</p>
      </div>
    </div>
  );

  const HomePage = () => (

    <div className="home-page">
      <h1>Instagram Home Page</h1>
      <div className="posts">
        {posts.map(post => (
          <Post
            key={post.id}
            username={post.username}
            imageUrl={post.imageUrl}
            likes={post.likes}
            comments={post.comments}
          />
        ))}
      </div>
    </div>);
  return (
    
    <div>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <header>
        <img src='./image/Logo-Instagram .png' className='lo'></img>
        <main>
          <div class="content">
            <img src="https://dummyjson.com/600x600" alt="Instagram Post" />
          </div>
        </main>
        <nav class="navigation">
          
          <button> <Link to="/"><span className='house'><i className="fa-solid fa-house"></i></span></Link>     </button>
          <br/>
          <button><Link to="/users"><span className='search'><i class="fa-solid fa-magnifying-glass"></i></span> </Link>
          </button>
          <br/>
          <button><span className='new'><i class="fa-solid fa-plus"></i></span></button>
          <br/>
          <button><span className='sett'><i class="fa-solid fa-gear"></i></span> </button>
          <br/>
          <button><i class="fa-solid fa-user"></i>Profile</button>
        </nav>
      </header>
    </div>
  );
}

export default HomePage;