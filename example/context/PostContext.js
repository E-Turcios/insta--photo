import React, { useState, useContext } from 'react';

const PostContext = React.createContext();

export const usePost = () => {
  return useContext(PostContext);
};
export function PostProvider({ children }) {
  const [avatar, setavatar] = useState(
    'https://cdn.britannica.com/34/180334-138-4235A017/subordinate-meerkat-pack.jpg?w=800&h=450&c=crop'
  );
  const [username, setusername] = useState('T-Ender');
  const [imageUrl, setimageUrl] = useState(
    'https://cdn.mos.cms.futurecdn.net/BfemybeKVXCf9pgX9WCxsc.jpg'
  );
  const [description, setdescription] = useState(
    'I love looking up at the stars'
  );
  const [likes, setlikes] = useState(10);
  const [comments, setcomments] = useState([]);
  const [timestamp, settimestamp] = useState('8 hours ago');
  const value = {
    avatar,
    username,
    imageUrl,
    description,
    likes,
    comments,
    timestamp,
  };
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}
