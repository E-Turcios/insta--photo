import React from 'react';
import MediaQuery from 'react-responsive';

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  Heading,
} from '@chakra-ui/react';

import {
  AddIcon,
  BellIcon,
  ChatIcon,
  ArrowLeftIcon,
  SearchIcon,
  StarIcon,
} from '@chakra-ui/icons';

import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import CreateNewPostModal from './NewPostModal';
export default function Navbar({ children }) {
  const { logout } = useAuth();
  const props = {
    avatar: 'https://wallpaperaccess.com/full/532118.jpg',
  };

  return (
    <>
      <Flex
        bg="#FFFFFF"
        px={8}
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
        position="sticky"
        alignSelf="flex-start"
        top="0"
        border="0.5px"
      >
        <Box mt="1%">
          <Link as={RouterLink} to="/Home">
            <Heading fontFamily={'Bellota'} as="h4" size="sm" p="10px">
              Insta Photo
            </Heading>
          </Link>
        </Box>
        <HStack
          as={'nav'}
          spacing={6}
          justifySelf="right"
          alignItems={'right'}
          align={'right'}
          display={{ base: 'none', md: 'flex' }}
        >
          <Link as={RouterLink} to="/Search" justify="right">
            <IconButton
              variant="ghost"
              aria-label="Search"
              icon={<SearchIcon />}
            />
          </Link>
          <Link as={RouterLink} to="/Home">
            <IconButton
              variant="ghost"
              aria-label="Home"
              icon={<ArrowLeftIcon />}
            />
          </Link>
          <CreateNewPostModal />
          <Link as={RouterLink} to="/Explore">
            <IconButton
              variant="ghost"
              aria-label="Explore"
              icon={<StarIcon />}
            />
          </Link>
          <Link as={RouterLink} to="/Chat">
            <IconButton variant="ghost" aria-label="Chat" icon={<ChatIcon />} />
          </Link>
          <Link as={RouterLink} to="/Notifications">
            <IconButton
              variant="ghost"
              aria-label="Notifications"
              icon={<BellIcon />}
            />
          </Link>
        </HStack>
        <Flex alignItems={'right'}>
          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}
            >
              <Avatar size={'sm'} src={props.avatar} />
            </MenuButton>
            <MenuList>
              <MenuLink name="Profile" link="/profile" />
              <MenuLink name="Saved" link="/saved" />
              <MenuLink name="Settings" link="/settings" />
              <MenuLink name="Switch Accounts" link="/switch" />
              <MenuDivider />
              <MenuItem onClick={logout}>Log Out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      <MediaQuery minWidth={1224}>
        <ComputerHeader />
      </MediaQuery>
      <MediaQuery maxWidth={1224}>
        <MobileFooter />
      </MediaQuery>
      {children}
    </>
  );
}

function ComputerHeader() {
  return (
    <Box
      position="fixed"
      w={'100%'}
      zIndex="modal"
      display={{ md: 'none' }}
      bg="#FFFFFF"
    >
      <HStack as={'nav'} justify="space-between">
        <Link as={RouterLink} to="/Search">
          <IconButton
            variant="ghost"
            aria-label="Search"
            icon={<SearchIcon />}
          />
        </Link>
        <Link as={RouterLink} to="/Home">
          <IconButton
            variant="ghost"
            aria-label="Home"
            icon={<ArrowLeftIcon />}
          />
        </Link>
        <Link as={RouterLink} to="/NewPost">
          <IconButton variant="ghost" aria-label="Post" icon={<AddIcon />} />
        </Link>
        <Link as={RouterLink} to="/Explore">
          <IconButton
            variant="ghost"
            aria-label="Explore"
            icon={<StarIcon />}
          />
        </Link>
        <Link as={RouterLink} to="/Chat">
          <IconButton variant="ghost" aria-label="Chat" icon={<ChatIcon />} />
        </Link>
        {/* <Link as={RouterLink} to="/Notifications">
          <IconButton
            variant="ghost"
            aria-label="Notifications"
            icon={<BellIcon />}
          />
        </Link> */}
      </HStack>
    </Box>
  );
}

function MobileFooter() {
  return (
    <Box
      position="fixed"
      w={'100%'}
      bottom="0"
      zIndex="modal"
      display={{ md: 'none' }}
      bg="#FFFFFF"
    >
      <HStack as={'nav'} justify="space-between">
        <Link as={RouterLink} to="/Search">
          <IconButton
            variant="ghost"
            aria-label="Search"
            icon={<SearchIcon />}
          />
        </Link>
        <Link as={RouterLink} to="/Home">
          <IconButton
            variant="ghost"
            aria-label="Home"
            icon={<ArrowLeftIcon />}
          />
        </Link>
        <Link as={RouterLink} to="/NewPost">
          <IconButton variant="ghost" aria-label="Post" icon={<AddIcon />} />
        </Link>
        <Link as={RouterLink} to="/Explore">
          <IconButton
            variant="ghost"
            aria-label="Explore"
            icon={<StarIcon />}
          />
        </Link>
        <Link as={RouterLink} to="/Chat">
          <IconButton variant="ghost" aria-label="Chat" icon={<ChatIcon />} />
        </Link>
        {/* <Link as={RouterLink} to="/Notifications">
          <IconButton
            variant="ghost"
            aria-label="Notifications"
            icon={<BellIcon />}
          />
        </Link> */}
      </HStack>
    </Box>
  );
}

function MenuLink(props) {
  return (
    <Link as={RouterLink} to={props.link}>
      <MenuItem>{props.name}</MenuItem>
    </Link>
  );
}

//Github update 7/15
