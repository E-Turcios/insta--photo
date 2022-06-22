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
  return (
    <FormControl>
      <FormLabel htmlFor="email"> First Name</FormLabel>
      <Input id="firstname" type="text" />
    </FormControl>
    <FormControl>
    <FormLabel htmlFor="email"> Last Name</FormLabel>
    <Input id="lastname" type="text" />
  </FormControl>
  <FormControl>
  <FormLabel htmlFor='email'>Email address</FormLabel>
  <Input id='email' type='email' />
  </FormControl>
  );
}
