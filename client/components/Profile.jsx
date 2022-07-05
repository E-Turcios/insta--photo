import React from 'react';
import {
  Avatar,
  Stack,
  HStack,
  Box,
  VStack,
  Text,
  Heading,
  Image,
  Link,
  Button,
} from '@chakra-ui/react';

const accprops = {
  avatar:
    'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/04/One-Piece-Luffy.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5',
  username: 'mugiwarano_luffy',
  imageUrl:
    'https://preview.redd.it/yc40cow4tr691.png?width=640&crop=smart&auto=webp&s=f7877d1843f9ca184059a5bf8b3e7976538ca3de',
  following: '10',
  followers: '15B',
  accountname: 'MONKEY D. LUFFY',
  posts: 'POSTS',
  saved: 'SAVED',
  tagged: 'TAGGED',
};
export default function Profile() {
  return (
    <Stack justify='center'  ml='70px' mr='70px' >
      <HStack spacing='55px' justify='center' p="25px" ml='70px' mr='70px' >
        <Avatar name={accprops.username} size="2xl" src={accprops.avatar} />
        <VStack>
          <Text fontSize="3xl"> {accprops.username}</Text>
        </VStack>
      </HStack>
    </Stack>
  );
}
