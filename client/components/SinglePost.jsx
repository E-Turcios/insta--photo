import React from 'react';
import {
  Avatar,
  Stack,
  HStack,
  VStack,
  Text,
  Heading,
  image,
} from '@chakra-ui/react';
export default function SinglePost(props) {
  const {
    avatar,
    username,
    imageUrl,
    description,
    likes,
    comments,
    timestamp,
  } = props;
  return (
    <Stack>
      <HStack>
        <Avatar name={username} src={avatar} />
      </HStack>
    </Stack>
  );
}
