import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

interface ServiceModalProps {
  image: string;
  title: string;
  content: string;
}

export default function ServiceModal({ image, title, content }: ServiceModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>Read More</Button>

      <Modal size={'full'} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent alignItems={'center'} gap={'2vh'}>
          <ModalHeader>{title}</ModalHeader>
          <Image src={image} height={'60vh'} width={'50vw'} borderRadius={'20px'} />
          <ModalCloseButton />
          <ModalBody>{content}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}