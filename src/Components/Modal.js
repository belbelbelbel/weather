import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(8px); /* Adjust the blur amount as needed */
  z-index: 999;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  cursor:pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  padding: 20px 10px;
  margin: 7.5rem auto;
  border-radius: 8px;
  box-shadow: 0 3px 6px 0 rgba(90, 90, 90, 0.9);
  background: white;
  font-family: 'Montserrat', sans-serif; 
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`;

const Modal = ({ onClose, children }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
