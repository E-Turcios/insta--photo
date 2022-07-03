import React from 'react';
import { Flex, Divider, Text } from '@chakra-ui/react';
export default function Division({ children }) {
  return (
    <Flex align="center">
      <Divider colorScheme="gray.200" />
      <Text fontSize="xs" padding="2" color="gray">
        {children}
      </Text>
      <Divider />
    </Flex>
  );
}
