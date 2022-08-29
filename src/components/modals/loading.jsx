import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Spinner,
} from "@chakra-ui/react";
import React from "react";

function Loading({ isOpen, onClose, message }) {
  return (
    <Modal isOpen={isOpen} isCentered={true} size="xs">
      <ModalOverlay />
      <ModalContent>
        <ModalBody className="m-8 grid place-items-center gap-4">
          <Spinner size="xl" />
          <p className="font-medium">{message}</p>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default Loading;
