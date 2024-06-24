// src/components/PostDetails.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        setPost(response.data);
        return axios.get(
          `https://jsonplaceholder.typicode.com/users/${response.data.userId}`
        );
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching post details: ", error);
      });

    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching comments: ", error);
      });
  }, [postId]);

  return (
    <div>
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          {user && <p>Author: {user.name}</p>}
          <h3>Comments</h3>
          {comments.map((comment) => (
            <div key={comment.id}>
              <p>{comment.name}</p>
              <p>{comment.body}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostDetails;
