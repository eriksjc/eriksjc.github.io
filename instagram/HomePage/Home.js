import React from 'react';

// Sample data representing posts
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
  // Add more posts as needed
];

// Post component
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

// Home page component
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
  </div>
);

export default HomePage;
