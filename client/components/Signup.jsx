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
} from '@chakra-ui/react';

import { useAuth } from '../context/AuthContext';
export default function Signup() {
  const [show, setShow] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const handleClick = () => setShow(!show);
  const { signUp } = useAuth();

  async function handleSignUp(event) {
    event.preventDefault();
    if (passwordRef.current.value === confirmPasswordRef.current.value) {
      await signUp(emailRef.current.value, passwordRef.current.value);
    }
  }

  return (
    <Stack>
      <FormControl>
        <FormLabel> First Name</FormLabel>
        <Input id="firstname" type="text" />
      </FormControl>

      <FormControl>
        <FormLabel>Middle Name</FormLabel>
        <Input id="middlename" type="text" />
        <FormHelperText>Optional</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel> Last Name</FormLabel>
        <Input id="lastname" type="text" />
      </FormControl>

      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input id="email" type="email" ref={emailRef} />
      </FormControl>

      <FormControl>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            id="password"
            type={show ? 'text' : 'password'}
            ref={passwordRef}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            id="confirmationpassword"
            type={show ? 'text' : 'password'}
            ref={confirmPasswordRef}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button h="1.75rem" size="sm" onClick={Event => handleSignUp(Event)}>
        Sign Up
      </Button>
    </Stack>
  );
}
