import React, { useEffect, useRef } from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Divider,
  Stack,
  VStack,
  Image,
  Text,
  Input,
} from '@chakra-ui/react';

import { AddIcon } from '@chakra-ui/icons';

export default function CreateNewPostModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const inputFile = useRef();
  const handleUpload = () => {
    inputFile.current.click();
  };
  return (
    <>
      <IconButton
        variant="ghost"
        aria-label="Post"
        onClick={onOpen}
        icon={<AddIcon />}
      />
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size="2xl"
      >
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader textAlign="center">Create New Post</ModalHeader>
          <Divider />
          <ModalCloseButton />
          <Stack
            minWidth="348px"
            minHeight="391px"
            height="500px"
            p="10px"
            justify="center"
            align="center"
          >
            <VStack>
              <Image src="./multi_media.png" w="350px" h="300px" />
              <ModalBody>
                <Text fontWeight="bold">Drag photos and videos here</Text>
              </ModalBody>
              <Button colorScheme="blue" mr={3} onClick={handleUpload}>
                Select from computer
              </Button>
              <Input
                type="file"
                id="file"
                ref={inputFile}
                style={{ display: 'none' }}
              />
            </VStack>
          </Stack>
        </ModalContent>
      </Modal>
    </>
  );
}
