import { useEffect, useState } from 'react';
import './PostList.css';

const PostList = () => {
  const [posts, setPosts] = useState([
    {
      'id': 1,
      'firstName': 'First name of the author',
      'lastName': 'Last name of the author',
      'writeup': 'Post description / writeup',
      'image': 'Post image',
      'avatar': 'Post author image',
    },
  ]);

  useEffect(() => {
    fetch('https://codebuddy.review/posts')
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        if (data) {
          setPosts(data.data.posts);
        }
      });
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <div className="post-list">
        {posts &&
          posts.length &&
          posts?.map(post => (
            <div className="post" key={post.id}>
              <img src={post.image} alt={post.image} className="post-image" />
              <div className="post-content">
                <div className="post-author">
                  <div className="author-name">
                    {post.firstName} {post.lastName}
                  </div>
                </div>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-description">{post.writeup}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PostList;
