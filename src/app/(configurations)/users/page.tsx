"use client";
import { useState  } from "react";
import {
  GetModal, 
  BtnAdd,
  FlexFilteting,
  FlexFiltetingDropdown
} from '../../components/mycomponent'

import { MyTable } from "./tables"

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

    const contentModal = `
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
        </div>`
    ;

    const titleModal = "Term of condition"
    const ModalProps = {myModal:myModal , title:titleModal ,content:contentModal ,getOpen:openModal}

  return (
    <> 
        <div id="accordion-open" data-accordion="open">
            <h2 id="accordion-open-heading-1">
                <div  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-open-body-1" aria-expanded="true" aria-controls="accordion-open-body-1">
                    <span className="flex items-center">{title}</span>
                    <BtnAdd  position="float-right"  onClick={myModal} />
                    <GetModal {...ModalProps}  ></GetModal>
                </div>
            </h2>

            <div id="accordion-open-body-1"  aria-labelledby="accordion-open-heading-1">
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <div className="grid gap-6 mb-6 md:grid-cols-3" >

                        <FlexFilteting name="Pelabuhan"></FlexFilteting>
                        <FlexFilteting name="Dermaga"></FlexFilteting>

                        <FlexFiltetingDropdown searchOption={searchOption} searchOptionData={searchOptionData} ></FlexFiltetingDropdown>
                        {/* <div className="flex">
                            <div className="relative inline-block text-left">
                                <div>
                                    <button onClick={searchOption}  type="button" className="shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"   id="menu-button" aria-expanded="true" aria-haspopup="true">
                                    Options
                                    <svg className="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                    </svg>
                                    </button>
                                </div>
                                {searchOptionData&&(
                                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                                    <div className="py-1" role="none">
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-0">Account settings</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-1">Support</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-2">License</a>
                                        <form method="POST" action="#" role="none">
                                        <button type="submit" className="block w-full px-4 py-2 text-left text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-3">Sign out</button>
                                        </form>
                                    </div>
                                </div>)}
                            </div>

                            <div className="relative w-full">
                            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Cari"/>
                            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cari
                            <span className="sr-only">Search</span>
                            </button>
                            </div>
                        </div> */}

                    </div>                              
                    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                            <MyTable />
                    </div>
                </div>
            </div>
        </div>

   </>

  )
}