"use client";
import React from 'react';
import { TextInput, BtnSave  } from "../../../components/mycomponent";
import { ToastContainer, toast } from 'react-toastify';
// import { useState  } from "react";
// import parse from 'html-react-parser';



import { Button, Modal, ModalBody, ModalFooter } from "flowbite-react";

interface ModalProps extends React.InputHTMLAttributes<HTMLInputElement>{    
    myModal: (data:boolean) => void;
    title: string;
    getOpen: boolean;
    }
export const  GetModalAdd : React.FC<ModalProps> = ({myModal, title,  getOpen}) =>{
        // Example using fetch API
        const handleSubmit = async ( ) => {
            // event: React.MouseEvent<HTMLButtonElement>
            // event.preventDefault(); // Prevent default form submission
            const dataToSend = { name: 'John Doe', email: 'john@example.com' }; // Replace with actual data
            // console.log("haloo")

            try {
              const response = await fetch('api/configurations/users/add', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
              });
      
              if (response.ok) {
                const result = await response.json();
                console.log('Data sent successfully:', result);
                // Handle success (e.g., show a success message, redirect)
                toast.success('Failed ', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
              
                    });
                    myModal(false)
              } else {
                console.error('Failed to send data:', response.statusText);
                // Handle error (e.g., show an error message)
                toast.error('Failed ', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
              }
            } catch (error) {
            //   console.error('Error sending data:', error);

              toast.error('Failed '+error, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });

            }
          };

    
    const isOpen = getOpen;
    return (
    <Modal show={isOpen} size={"7xl"}>
        {/* <ModalHeader>{titleModal}</ModalHeader> */}
        <ModalBody>

        <div id="accordion-open" data-accordion="open">
            <h2 id="accordion-open-heading-1">
                <div  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-open-body-1" aria-expanded="true" aria-controls="accordion-open-body-1">
                    <span className="flex items-center">Add {title}</span>
                </div>
            </h2>

            <div id="accordion-open-body-1"  aria-labelledby="accordion-open-heading-1">
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                    <div className="grid gap-6 mb-6 md:grid-cols-2" >
                            <TextInput name={"name"} id={"name"} typeText={"input"} placeHolder={"Nama Lengkap"}></TextInput>
                            <TextInput name={"phone"} id={"phone"} typeText={"number"} placeHolder={"Nomor Telepon"}></TextInput>
                            <TextInput name={"address"} id={"address"} typeText={"input"} placeHolder={"Alamat"}></TextInput>
                            <TextInput name={"username"} id={"username"} typeText={"input"} placeHolder={"Username"}></TextInput>
                            <TextInput name={"password"} id={"password"} typeText={"password"} placeHolder={"Password"}></TextInput>

                            <ToastContainer />
    
                    </div>
                </div>
            </div>
        </div>


        </ModalBody>
        <ModalFooter>
            {/* <Button onClick={handleSubmit}>save</Button> */}
            <BtnSave onClick={handleSubmit} />
            <Button color="gray" onClick={()=>myModal(false)}>
                Decline
            </Button>
        </ModalFooter>
    </Modal>
    );
}
