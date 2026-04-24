import React, { useState, useRef } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Smile } from 'lucide-react';

const Post = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState([
    { id: 1, user: "coding_fan", text: "This looks amazing!" },
  ]);
  const [inputValue, setInputValue] = useState("");

  const commentInputRef = useRef(null);


  const focusCommentInput = () => {
    commentInputRef.current.focus();
  };

  const handlePostComment = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    const newComment = {
      id: Date.now(),
      user: "current_user",
      text: inputValue
    };

    setComments([...comments, newComment]);
    setInputValue("");
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <div className="user-info">
          <img src={post.profilePic} alt="avatar" />
          <span>{post.username}</span>
        </div>
        <MoreHorizontal size={20} />
      </div>

      <img 
        src={post.postImage} 
        alt="post" 
        className="post-main-img" 
        onDoubleClick={() => setIsLiked(true)} 
      />

      <div className="post-footer">
        <div className="action-btns">
          <div className="left-btns">
            <Heart 
              size={24} 
              onClick={() => setIsLiked(!isLiked)} 
              fill={isLiked ? "#ed4956" : "none"} 
              color={isLiked ? "#ed4956" : "black"}
              className="icon-btn"
            />
            
            {/* 3. Add onClick here to trigger the focus function */}
            <MessageCircle 
                size={24} 
                className="icon-btn" 
                onClick={focusCommentInput} 
            />
            
            <Send size={24} className="icon-btn" />
          </div>
          <Bookmark size={24} className="icon-btn" />
        </div>

        <div className="post-details">
          <p className="likes-bold">{isLiked ? post.likes + 1 : post.likes} likes</p>
          <p><strong>{post.username}</strong> {post.caption}</p>
          
          <div className="comments-list">
            {comments.map((c) => (
              <p key={c.id} className="comment-text">
                <strong>{c.user}</strong> {c.text}
              </p>
            ))}
          </div>
          <p className="post-time">2 HOURS AGO</p>
        </div>

        <form className="comment-form" onSubmit={handlePostComment}>
          <Smile size={24} color="#8e8e8e" />
          <input 
            type="text" 
            placeholder="Add a comment..." 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            // 4. Attach the ref to this input
            ref={commentInputRef} 
          />
          <button 
            type="submit" 
            className="post-btn"
            disabled={!inputValue.trim()}
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;