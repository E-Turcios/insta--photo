import React from 'react';
import SinglePost from './SinglePost';

const post = {
  avatar:
    'https://cdn.britannica.com/34/180334-138-4235A017/subordinate-meerkat-pack.jpg?w=800&h=450&c=crop',
  username: 'T-Ender',
  imageUrl: 'https://cdn.mos.cms.futurecdn.net/BfemybeKVXCf9pgX9WCxsc.jpg',
  description: 'I love looking up at the stars',
  likes: 10,
  comments: [],
  timestamp: '8 hours ago',
};
export default function Home() {
  return (
    <SinglePost
      avatar={post.avatar}
      username={post.username}
      imageUrl={post.imageUrl}
      description={post.description}
      likes={post.likes}
      comments={post.comments}
      timestamp={post.timestamp}
    />
  );
}
