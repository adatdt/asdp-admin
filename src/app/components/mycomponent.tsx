"use client";
import { useState, useReducer  } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader,Label,TextInput,Dropdown,DropdownItem } from "flowbite-react";
export const  GridCols = (props:any) =>{
    const data = props.data
  return (
    <div className={"grid gap-6 mb-6 md:grid-cols-"+data.col} >
        {props.children} 
    </div>
  );
}

export const  InputSearchLabel = (props:any) =>{
    const data = props.data
  return (

    <div>
        <div className="flex">
            <span id="dropdown-button" data-dropdown-toggle="dropdown" className="shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600">{data.label}</span>
            <div className="relative w-full">
                <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder={data.label} required />
            </div>
        </div>
    </div>
  );
}

export const  GetModal = ({data, myModal}: any) =>{
    const isOpen = data.isOpen;
    const contentModal = data.content;
    const titleModal = data.title;
    console.log(data)
  return (
        <Modal show={isOpen} >
        <ModalHeader>{titleModal}</ModalHeader>
        <ModalBody>{contentModal}</ModalBody>
        <ModalFooter>
          <Button onClick={myModal}>I accept</Button>
          <Button color="gray" onClick={myModal}>
            Decline
          </Button>
        </ModalFooter>
      </Modal>
  );
}