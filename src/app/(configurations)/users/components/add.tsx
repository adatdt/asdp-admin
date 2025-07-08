"use client";
import React, { useState } from 'react';
import { TextInput, BtnSave, GeneralBtn  } from "../../../components/mycomponent";


import { Modal, ModalBody, ModalFooter } from "flowbite-react";

interface ModalProps extends React.InputHTMLAttributes<HTMLInputElement>{    
    myModal: (data:boolean) => void;
    title: string;
    getOpen: boolean;
    getToast:(status:boolean)=>void;
    getRefresh:()=>void;
    }
export const  GetModalAdd : React.FC<ModalProps> = ({myModal, title,  getOpen,getToast, getRefresh}) =>{

        const [getName, setName ] = useState<string|number>("");
        const [getPhone, setPhone ] = useState("");
        const [getAddress, setAddress ] = useState("");
        const [getUsername, setUsername ] = useState("");
        const [getPassword, setPassword ] = useState("");
        // Example using fetch API
        const handleSubmit = async ( ) => {

            const dataToSend ={
                name:getName,
                phone:getPhone,
                address:getAddress,
                username:getUsername,
                password:getPassword}
            try {
              const response = await fetch('api/configurations/users/action_add', {
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
                    myModal(false)
                    getToast(true)
                    getRefresh()
              } else {
                console.error('Failed to send data:', response.statusText);
                // Handle error (e.g., show an error message)                
              }
            } catch (error) {
              console.error('Error sending data:', error);

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
                                <TextInput name={"name"} id={"name"} typeText={"input"} placeHolder={"Nama Lengkap"} onChange={(e:{ target: HTMLInputElement; }) => setName(e.target.value)} ></TextInput>
                                <TextInput name={"phone"} id={"phone"} onChange={(e:{target:HTMLInputElement})=>{ setPhone(e.target.value)}}  typeText={"number"} placeHolder={"Nomor Telepon" }></TextInput>
                                <TextInput name={"address"} id={"address"} onChange={(e:{target:HTMLInputElement})=>{ setAddress(e.target.value)}}  typeText={"input"} placeHolder={"Alamat"}></TextInput>
                                <TextInput name={"username"} id={"username"} onChange={(e:{target:HTMLInputElement})=>{ setUsername(e.target.value)}}  typeText={"input"} placeHolder={"Username"}></TextInput>
                                <TextInput name={"password"} id={"password"} onChange={(e:{target:HTMLInputElement})=>{ setPassword(e.target.value)}}  typeText={"password"} placeHolder={"Password"}></TextInput>

                        </div>
                    </div>
                </div>
            </div>


            </ModalBody>
            <ModalFooter>
                <BtnSave onClick={handleSubmit} />
                <GeneralBtn onClick={()=>myModal(false)} name={"Cancel"} color={"red"} ></GeneralBtn>
            </ModalFooter>
        
    </Modal>
    );
}
