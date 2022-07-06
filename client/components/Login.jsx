import React, { useState, useRef } from 'react';

import {
  FormControl,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  HStack,
  useToast,
} from '@chakra-ui/react';
import Division from './Division';
import { useAuth } from '../context/AuthContext';
import { Link as RouterLink } from 'react-router-dom';

import InputPassword from './InputPassword';

export default function Login() {
  const [show, setShow] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const errorToast = useToast();
  const handleClick = () => setShow(!show);

  const handleLogin = async event => {
    event.preventDefault();
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      showError(error.message.replace('Firebase: ', ''));
    }
  };

  function showError(errorMsg) {
    errorToast.closeAll();
    errorToast({ description: errorMsg, status: 'error', position: 'top' });
  }
  return (
    <Stack w="100%" h="100vh" alignItems="center" justify="center">
      <Stack
        w="348px"
        border="1px"
        borderColor="gray.200"
        spacing="24px"
        p="20px"
      >
        <Heading
          as="h4"
          fontFamily={'Bellota'}
          size="lg"
          align="center"
          p="10px"
        >
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
        <Division>OR</Division>
        <Button h="2.75rem" size="md" colorScheme="facebook" shadow="md">
          Login in with Facebook
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
