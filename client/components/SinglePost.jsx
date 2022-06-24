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
        <Link color="teal.500" href="#">
          boundy99
        </Link>
      </HStack>
      <Image src={imageUrl} />
      <HStack>Likes, comments, Share</HStack>
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
    </Stack>
  );
}
