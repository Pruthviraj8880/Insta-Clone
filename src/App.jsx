import React, { useState, useEffect } from 'react'; // Consolidated React imports
import Navbar from './components/Navbar';
import Stories from './components/Stories';
import Post from './components/Post';
import Suggestions from './components/Suggestions';
import { POSTS } from './data'; // Only import this once
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network delay
    const timer = setTimeout(() => {
      setPosts(POSTS); // Use the imported POSTS here
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer); // Good practice to clear timeouts
  }, []);

  if (loading) return <div className="loading">Loading Instagram...</div>;

  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <div className="feed-section">
          <Stories />
          {/* IMPORTANT: Map over 'posts' (state), not 'POSTS' (static data) */}
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
        
        <div className="sidebar-section">
          <Suggestions />
        </div>
      </main>
    </div>
  );
}

export default App;