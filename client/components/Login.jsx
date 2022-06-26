import React, { useState, useRef } from 'react';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Stack,
  InputRightElement,
  Button,
  InputGroup,
  Box,
} from '@chakra-ui/react';

import { useAuth } from '../context/AuthContext';

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
    <Stack
      position="absolute"
      justify="center"
      align="center"
      w="100%"
      h="100vh"
    >
      <Stack w="348px" h="374px" border="1px" borderColor="gray.200">
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            id="email"
            placeholder="johndoe@gmail.com"
            ref={emailRef}
          ></Input>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={show ? 'text' : 'password'}
              id="password"
              placeholder="johndoe@gmail.com"
              ref={passwordRef}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button h="1.75rem" size="sm" onClick={Event => handleLogin(Event)}>
          Login
        </Button>
      </Stack>
    </Stack>
  );
}
