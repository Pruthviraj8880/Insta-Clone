import React from 'react';
import { STORIES } from '../data';

const Stories = () => {
  return (
    <div className="stories-container">
      {STORIES.map((story) => (
        <div key={story.id} className="story-item">
          <div className="story-ring">
            <img src={story.img} alt={story.username} className="story-image" />
          </div>
          <p className="story-username">{story.username}</p>
        </div>
      ))}
    </div>
  );
};

export default Stories;