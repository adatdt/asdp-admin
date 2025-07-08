"use client";
import React from 'react';
import { useState  } from "react";
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
    position?: string;
  }
export const BtnAdd : React.FC<BtnAddProps> = ({onClick,position }) =>{
    return(
        <button onClick={onClick} type="button" className={" focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg px-3 py-2 text-xs me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 "+position}>+ Tambah</button>
    )
}

interface BtnSaveProps {
    onClick: () => void;
    position?: string;
  }
export const BtnSave : React.FC<BtnSaveProps> = ({onClick,position }) =>{
    return(
        <button onClick={onClick} type="button" className={" focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg px-3 py-2 text-xs me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 "+position}>Save</button>
    )
}

interface GeneralBtnProps {
    onClick?: () => void;
    position?: string;
    name:string;
    color?:string;

  }
export const GeneralBtn : React.FC<GeneralBtnProps> = ({onClick,position, name , color="gray" }) =>{

    return(
        <button onClick={onClick} type="button" className={" focus:outline-none text-white bg-"+color+"-700 hover:bg-"+color+"-800 focus:ring-4 focus:ring-"+color+"-300 font-medium rounded-lg px-3 py-2 text-xs me-2 mb-2 dark:bg-"+color+"-600 dark:hover:bg-"+color+"-700 dark:focus:ring-"+color+"-800 "+position}>{name}</button>

    )
}


interface TextInputProps {
    name: string;
    id: string|undefined;
    typeText:string;
    placeHolder:string;
    onChange?:(e:{ target: HTMLInputElement; })=>void;
  }
export const TextInput : React.FC<TextInputProps> = ({name,id,typeText, placeHolder, onChange}) =>{
    return(
        <div className="relative z-0 w-full mb-5 group">
        <input type={typeText} name={name} onChange={onChange} id={id} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor={id} className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{placeHolder}</label>
    </div>
    )
}


interface FlexFilteringProps {
    name: string;
  }

export const FlexFiltering : React.FC<FlexFilteringProps> = ({name }) =>{
    return(
        <div className="flex">
        <span id="dropdown-button" data-dropdown-toggle="dropdown" className="shrink-0 z-10 inline-flex items-center py-2.5 px-4  font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600 text-xs">{name}</span>
        <div className="relative w-full">
            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder={name} required />
        </div>
    </div>
    )
}

interface MyDataListProps {
    data:{name: string; id:number;}[];
    defaultVal:boolean;
  }

  export const FlexFilteringDropdown  = (dataLists:MyDataListProps) =>{

    const defaultData = dataLists.defaultVal
    const lists = dataLists.data

    const [searchOptionData, setSearchOptionData] = useState(defaultData);
    const searchOption = () =>{
        setSearchOptionData(!searchOptionData)
    }
  
    const[valList, setValList] = useState(lists[0].name)
    const getName = (val:string) =>{
      setValList(val)
      setSearchOptionData(!searchOptionData)
      return val
    }
    return(
        <div className="flex">
        <div className="relative inline-block text-left w-[50%]">
            <div >
                <button onClick={searchOption}  type="button" className="w-full shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600 "   id="menu-button" aria-expanded="true" aria-haspopup="true">
                <div className="w-40 text-xs">
                {valList}
                </div>
                <svg className="-mr-1 size-5 text-gray-400 right-10" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
                
                </button>
            </div>
            {searchOptionData&&(
            <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                <div className="py-1" role="none">
                    {lists.map((list, index) =>(
                        <a href="#" key={index} onClick={()=>getName(list.name)} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id={`menu-item-${list.id}`}>{list.name}</a>    
                    ))}

                </div>
            </div>)}
        </div>

        <div className="relative w-full">
        <input type="search" id="search-dropdown" className="w-full block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Cari"/>
        <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cari
        <span className="sr-only">Search</span>
        </button>
        </div>
    </div>
    )
}