import React, { useState, useRef } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Stack,
  Button,
  Text,
  Heading,
  HStack,
  Link,
  useToast,
  Toast,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import InputPassword from './InputPassword';
import Division from './Division';
export default function Signup() {
  const [show, setShow] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const handleClick = () => setShow(!show);
  const { signUp } = useAuth();
  const errorToast = useToast();
  async function handleSignUp(event) {
    event.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      showError('Password do not match');
      return;
    }
    try {
      await signUp(emailRef.current.value, passwordRef.current.value);
    } catch (e) {
      showError(e.message.replace('Firebase: ', ''));
    }
  }
  function showError(errorMsg) {
    errorToast.closeAll();
    errorToast({ description: errorMsg, status: 'error', position: 'top' });
  }
  return (
    <Stack w="100%" h="100vh" alignItems="center" justify="center">
      <Stack
        w="350px"
        border="1px"
        borderColor="gray.200"
        spacing="24px"
        p="20px"
      >
        <Heading as="h4" fontFamily={'Bellota'} size="lg" align="center">
          Insta Photo
        </Heading>
        <Text color="gray" align="center" fontSize="md">
          Sign up to see photos and videos from your friends
        </Text>
        <Button h="2.75rem" size="md" colorScheme="facebook" shadow="md">
          Login in with Facebook
        </Button>
        <Division>OR</Division>
        <FormControl>
          <Input
            type="email"
            id="email"
            placeholder="Mobile Number or Email"
            ref={emailRef}
          />
        </FormControl>

        <FormControl>
          <Input id="fullname" type="text" placeholder="Full Name" />
        </FormControl>

        <FormControl>
          <Input id="username" type="text" placeholder="Username" />
        </FormControl>

        <InputPassword ref={passwordRef} />
        <InputPassword
          ref={confirmPasswordRef}
          placeholder="Confirm Password"
        />

        <Button
          h="2.75rem"
          size="sm"
          onClick={Event => handleSignUp(Event)}
          color="white"
          backgroundColor="#0095f6"
          shadow="md"
        >
          Sign Up
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
          Have an account?
          <Link as={RouterLink} to="/login" color="#0095f6">
            {' '}
            Log in
          </Link>
        </Text>
      </HStack>
    </Stack>
  );
}
