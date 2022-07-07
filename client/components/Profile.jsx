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
  Flex,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';

import { Link as RouterLink } from 'react-router-dom';
import { MdSettings, MdVerified } from 'react-icons/md';

const accprops = {
  avatar:
    'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/04/One-Piece-Luffy.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5',
  username: 'luffy',
  imageUrl:
    'https://preview.redd.it/yc40cow4tr691.png?width=640&crop=smart&auto=webp&s=f7877d1843f9ca184059a5bf8b3e7976538ca3de',
  following: '10',
  followers: '15B',
  accountname: 'MONKEY D. LUFFY',
  numposts: '1',
  posts: 'POSTS',
  saved: 'SAVED',
  tagged: 'TAGGED',
};
export default function Profile() {
  return (
    <Flex justify="center" ml="100px" mr="100px" pt="25px" pr="1.8%" pl="1.5%">
      <Flex justify="center" mr="30px" w="291.66px" h="150px">
        <Avatar name={accprops.username} size="2xl" src={accprops.avatar} />
      </Flex>
      <Flex justify="left" w="613.34px" h="150px">
        <VStack>
          <Flex>
            <Text fontSize="3xl">
              {' '}
              {accprops.username}
            </Text>

            <IconButton
              variant="ghost"
              aria-label=""
              icon={<MdVerified />}
              color="#0095f6"
            />

            <Button
              ml="5"
              mr="5"
              variant="ghost"
              border="1px"
              borderColor="#CBD5E0"
            >
              {' '}
              Edit Profile
            </Button>
            <Link as={RouterLink} to="/Settings">
              <IconButton variant="none" aria-label="" icon={<MdSettings />} />
            </Link>
          </Flex>
          <Flex w="100%" justify="space-between">
            <Text fontSize="lg">
              <Text as="span" fontWeight="bold">
                {' '}
                {accprops.numposts}{' '}
              </Text>
              posts
            </Text>
            <TextModel text="followers" value={accprops.followers} />
            <TextModel text="following" value={accprops.following} />
          </Flex>

          <Flex w='100%'>
            <Text fontWeight="bold" fontSize="lg">
              {accprops.accountname}
            </Text>
          </Flex>
        </VStack>
      </Flex>
    </Flex>
  );
}

function TextModel(props) {
  const { isOpen, onOpen, isClosed } = useDisclosure();
  return (
    <React.Fragment>
      <Text fontSize="lg" onClick={onOpen}>
        <Text as="span" fontWeight="bold">
          {' '}
          {props.value}{' '}
        </Text>
        {props.text}
      </Text>
    </React.Fragment>
  );
}
