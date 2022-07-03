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
  useColorModeValue,
  Stack,
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

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="#EAEFF2" px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} align={'left'} justify="right">
            <Box mt="1%">
              <b>InstaPhoto</b>
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
            </HStack>
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
                <MenuItem>Profile</MenuItem>
                <MenuItem>Saved</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Switch Accounts</MenuItem>
                <MenuDivider />
                <MenuItem>Log Out</MenuItem>
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
      </Box>
    </>
  );
}
