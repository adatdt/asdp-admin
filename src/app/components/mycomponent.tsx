"use client";
import React from 'react';
import parse from 'html-react-parser';

import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";

    interface ModalProps extends React.InputHTMLAttributes<HTMLInputElement>{
        myModal: () => void;
        title: string;
        content: string;
        getOpen: boolean;
      }
export const  GetModal : React.FC<ModalProps> = ({myModal, title, content, getOpen}) =>{
    const isOpen = getOpen;
    const contentModal = content;
    const titleModal = title;
    return (
    <Modal show={isOpen} >
        <ModalHeader>{titleModal}</ModalHeader>
        <ModalBody>{parse(contentModal)}</ModalBody>
        <ModalFooter>
            <Button onClick={myModal}>I accept</Button>
            <Button color="gray" onClick={myModal}>
                Decline
            </Button>
        </ModalFooter>
    </Modal>
    );
}

interface BtnAddProps {
    onClick: () => void;
    position: string;
  }
export const BtnAdd : React.FC<BtnAddProps> = ({onClick,position }) =>{
    return(
        <button onClick={onClick} type="button" className={" focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg px-3 py-2 text-xs me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 "+position}>+ Tambah</button>
    )
}

