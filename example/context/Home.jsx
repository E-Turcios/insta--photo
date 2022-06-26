import React from 'react';
import SinglePost from './SinglePost';
import { Stack } from '@chakra-ui/react';
import { PostProvider } from './PostContext';

export default function Home() {
  return (
    <Stack align="center">
      <PostProvider>
        <SinglePost />
      </PostProvider>
    </Stack>
  );
}
