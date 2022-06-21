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

export default function Login() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Stack width="25%">
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" id="email" placeholder="johndoe@gmail.com"></Input>
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? 'text' : 'password'}
            id="password"
            placeholder="johndoe@gmail.com"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </Stack>
  );
}
