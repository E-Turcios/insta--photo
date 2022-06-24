import React from 'react';

export default function PostCard(props) {
  const { username, location, imageUrl, description } = props;
  return (
    <div>
      <h1>{username}</h1>
      <h2>{location}</h2>
      <img src={imageUrl} width="500px" height="1000px" />
      <p>{description}</p>
      <br />
    </div>
  );
}
