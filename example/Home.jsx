import React from 'react';
import PostCard from './PostCard';

const info = [
  {
    username: 'Boundy',
    location: 'New York',
    imageUrl:
      'https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg',
    description: 'lorem ipsum dolor sit amet, consectetur adip',
  },

  {
    username: 'T-Ender',
    location: 'Brookyln',
    imageUrl:
      'https://static.remove.bg/remove-bg-web/913b22608288cd03cc357799d0d4594e2d1c6b41/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg',
    description: 'Some girl I saw on the web',
  },

  {
    username: 'Shambles',
    location: 'Queens',
    imageUrl:
      'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg',
    description: 'A Flower that I saw',
  },

  {
    username: 'Oumb',
    location: 'Staten Island',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkvFCLSMbUU6Bqb1m-0y3LPAQ7_Gcs-PNZw&usqp=CAU',
    description: 'This is a bird',
  },
];

function createPost(post) {
  const { username, location, imageUrl, description } = post;
  return (
    <PostCard
      key={username}
      username={username}
      location={location}
      description={description}
      imageUrl={imageUrl}
    />
  );
}

export default function Home() {
  return <div>{info.map(createPost)}</div>;
}
