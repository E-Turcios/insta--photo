import React, { useState, useRef, useEffect } from 'react';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  HStack,
} from '@chakra-ui/react';

import { useAuth } from '../context/AuthContext';
import { Link as RouterLink } from 'react-router-dom';

import InputPassword from './InputPassword'

export default function Login() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();

  const handleLogin = async event => {
    event.preventDefault();
    try {
      await login(emailRef, passwordRef);
    } catch (error) {}
  };

  return (
    <Stack w="100%" h="100vh" alignItems="center" justify="center">
      <Stack
        w="348px"
        h="374px"
        border="1px"
        borderColor="gray.200"
        spacing="24px"
        p="20px"
      >
        <Heading as="h4" size="lg" align="center" p="10px">
          Insta Photo
        </Heading>
        <FormControl shadow="md">
          <Input
            type="email"
            id="email"
            placeholder="Phone number, username, or email"
            ref={emailRef}
          ></Input>
        </FormControl>
        <InputPassword ref={passwordRef} />
        <Button
          h="2.75rem"
          size="sm"
          onClick={Event => handleLogin(Event)}
          color="white"
          backgroundColor="#0095f6"
          shadow="md"
        >
          Login
        </Button>
      </Stack>
      <HStack
        w="350px"
        h="63px"
        border="1px"
        borderColor="gray.200"
        justify="center"
      >
        <Text>
          Don't have an account?
          <Link as={RouterLink} to="/signup" color="#0095f6">
            {' '}
            Sign up
          </Link>
        </Text>
      </HStack>
    </Stack>
  );
}
