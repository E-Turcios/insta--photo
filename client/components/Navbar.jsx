import React, { ReactNode } from 'react';

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
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  BellIcon,
  ChatIcon,
  ArrowLeftIcon,
  SearchIcon,
  StarIcon,
} from '@chakra-ui/icons';

import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { logout } = useAuth();

  return (
    <>
      <Flex
        bg="#EAEFF2"
        px={8}
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
        position="sticky"
        alignSelf="flex-start"
        top="0"
        border="0.5px"
      >
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Box mt="1%">
          <Heading as="h4" size="sm" p="10px">
            Insta Photo
          </Heading>
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
              <Avatar size={'sm'} src={Avatar} />
            </MenuButton>
            <MenuList>
              <MenuLink name="Profile" link="/profile"/>
              <MenuLink name="Saved" link="/saved"/>
              <MenuLink name="Settings" link="/settings"/>
              <MenuLink name="Switch Accounts" link="/switch"/>
              <MenuDivider/>
              <MenuItem onClick={logout}>Log Out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4} align="center">
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
              <IconButton
                variant="ghost"
                aria-label="Post"
                icon={<AddIcon />}
              />
            </Link>
            <Link as={RouterLink} to="/Explore">
              <IconButton
                variant="ghost"
                aria-label="Explore"
                icon={<StarIcon />}
              />
            </Link>
            <Link as={RouterLink} to="/Chat">
              <IconButton
                variant="ghost"
                aria-label="Chat"
                icon={<ChatIcon />}
              />
            </Link>
            <Link as={RouterLink} to="/Notifications">
              <IconButton
                variant="ghost"
                aria-label="Notifications"
                icon={<BellIcon />}
              />
            </Link>
          </Stack>
        </Box>
      ) : null}
    </>
  );
}

function MenuLink(props) {
  return (
    <Link as={RouterLink} to={props.link}>
      <MenuItem>{props.name}</MenuItem>
    </Link>
  );
}
