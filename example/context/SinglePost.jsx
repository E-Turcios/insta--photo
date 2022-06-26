import React from 'react';
import {
  Avatar,
  Stack,
  HStack,
  VStack,
  Text,
  Heading,
  Image,
  Link,
} from '@chakra-ui/react';
import { usePost } from './PostContext';

export default function SinglePost() {
  const {
    avatar,
    username,
    imageUrl,
    description,
    likes,
    comments,
    timestamp,
  } = usePost();
  return (
    <Stack
      maxW="500"
      shadow="2xl"
      border="1px"
      borderColor="gray.200"
      borderRadius="10px"
    >
      <HStack>
        <Avatar name={username} src={avatar} margin=".5rem" />
        <Link color="teal.500" href="#">
          boundy99
        </Link>
      </HStack>
      <Image src={imageUrl} maxH="600px" />
      <HStack>Likes, comments, Share</HStack>
      <VStack align="left" pl="15px">
        <Text>{likes} likes</Text>
        <Text>
          <Link color="teal.500" href="#">
            boundy99
          </Link>{' '}
          {description}
        </Text>
        <Link fontSize="16px" color="grey">
          View all 5 comments
        </Link>
        <Text fontSize="15px" color="grey">
          {timestamp}
        </Text>
      </VStack>
    </Stack>
  );
}
