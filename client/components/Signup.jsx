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

export default function Signup() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  function handleLogin(event) {
    event.preventDefault();
  }
  return (
    <>
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
        <Input id="email" type="email" />
      </FormControl>

      <FormControl>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input id="password" type={show ? 'text' : 'password'} />
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
          <Input id="confirmationpassword" type={show ? 'text' : 'password'} />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button h="1.75rem" size="sm" onClick={Event => handleLogin(Event)}>
        Sign Up
      </Button>
    </>
  );
}
