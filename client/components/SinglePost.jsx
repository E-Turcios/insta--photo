import React from 'react';
import {
  Avatar,
  Stack,
  HStack,
  VStack,
  Text,
  Image,
  Link,
  Divider,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Button,
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
          {username}
        </Link>
      </HStack>
      <Image src={imageUrl} maxH="600px" />
      <HStack>Likes, comments, Share</HStack>
      <VStack align="left" pl="15px">
        <Text>{likes} likes</Text>
        <Text>
          <Link color="teal.500" href="#">
            {username}
          </Link>{' '}
          {description}
        </Text>
        <Comments comments={comments} />
        <Text fontSize="15px" color="grey">
          {timestamp}
        </Text>
      </VStack>
      <Divider />
      <AddComment />
    </Stack>
  );
}

function Comments({ comments }) {
  return comments.length ? (
    <Link fontSize="16px" color="grey">
      View all {comments.length} comments
    </Link>
  ) : (
    <></>
  );
}
//TODO add comment to show up in array then push to backend
function AddComment() {
  return (
    <InputGroup>
      <Input type="text" placeholder="Add a comment..." />
      <InputRightElement>
        <Button
          type="submit"
          colorScheme="cyan"
          variant="ghost"
          focusBorderColor="red"
        >
          post
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
