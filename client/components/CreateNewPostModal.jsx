import React, { useEffect } from 'react';

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
  Heading,
} from '@chakra-ui/react';

import { AddIcon } from '@chakra-ui/icons';

export default function CreateNewPostModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleUpload = () => {};
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
            justify="center"
            align="center"
          >
            <VStack>
              <Image
                src="https://www.kindpng.com/picc/m/209-2099181_multimedia-video-audio-videos-movie-youtube-audio-y.png"
                w="200px"
                h="200px"
              />
              <ModalBody>
                <Heading as="h2">Drag photos and videos here</Heading>
              </ModalBody>
              <Button colorScheme="blue" mr={3} onClick={handleUpload}>
                Select from computer
              </Button>
            </VStack>
          </Stack>
        </ModalContent>
      </Modal>
    </>
  );
}
