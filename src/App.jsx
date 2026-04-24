import React from 'react';
import Navbar from './components/Navbar';
import Stories from './components/Stories';
import Post from './components/post';
import Suggestions from './components/Suggestions';
import { POSTS } from './data';
import './App.css';
import { useState, useEffect } from 'react';
import { POSTS as mockData } from './data';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network delay of 1 second
    setTimeout(() => {
      setPosts(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <div className="loading">Loading Instagram...</div>;
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <div className="feed-section">
          <Stories />
          {POSTS.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
        
        {/* Sidebar only visible on larger screens */}
        <div className="sidebar-section">
          <Suggestions />
        </div>
      </main>
    </div>
  );
}

export default App;