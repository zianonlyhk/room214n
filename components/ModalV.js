import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Image from "next/image";

import closeCross from "/img/others/cross.png";

const Modal = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <StyledModalOverlay>
      <StyledModal>
        <StyledModalHeader>
          <a href="#" onClick={handleCloseClick}>
            <Image height="30vh" width="30vh" src={closeCross} />
          </a>
        </StyledModalHeader>
        <StyledModalBody>{children}</StyledModalBody>
      </StyledModal>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

const StyledModalBody = styled.div`
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledModal = styled.div`
  background: black;
  width: 400px;
  height: 600px;
  border-radius: 15px;
  padding: 10px;
`;
const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default Modal;
