"use client";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader,Label,TextInput,Dropdown,DropdownItem } from "flowbite-react";
import { useState, useReducer  } from "react";
import {GridCols,
  GetModal, 
  InputSearchLabel, 
  InputSearchOption,
  BtnAdd
} from '../../components/mycomponent'


export default  function Page() {
//   const posts = await getPosts()
const [openModal, setOpenModal] = useState(false);
const [searchOptionData, setSearchOptionData] = useState(false);
const title = 'User';

    const myModal = () =>{
        setOpenModal(!openModal)
    }

    const searchOption = () =>{
        setSearchOptionData(!searchOptionData)
    }

    const contentModal = (
        <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                companies around the world are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
                to ensure a common set of data rights in the European Union. It requires organizations to notify users as
                soon as possible of high-risk data breaches that could personally affect them.
            </p>
        </div>
    );

    const titleModal = "Term of condition"

  return (
    <> 

        <div id="accordion-open" data-accordion="open">
            <h2 id="accordion-open-heading-1">
                <div  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-open-body-1" aria-expanded="true" aria-controls="accordion-open-body-1">
                    <span className="flex items-center">{title}</span>
                    <BtnAdd onClick={myModal} className="float-right" />
                    <GetModal data={{isOpen:openModal,content:contentModal, title:titleModal}} myModal={myModal} />
                </div>
            </h2>

            <div id="accordion-open-body-1"  aria-labelledby="accordion-open-heading-1">
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">

                    <GridCols col={"3"} >
                        <InputSearchLabel data={{"label":"Pelabuhan","name":"port" }} />
                        <InputSearchLabel data={{"label":"Layanan","name":"service" }} />
                        <InputSearchOption data={{"searchOptionData":searchOptionData }} searchOption={searchOption} />
                    </GridCols>
                    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                        Table
                    </div>
                </div>
            </div>
        </div>

   </>

  )
}