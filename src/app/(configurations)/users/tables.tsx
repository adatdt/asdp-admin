"use client";
import { useState  } from "react";

export const MyTable = () => {
    const [openSelectTable, setOpenSelectTable] = useState(false);
    const openFiterSelectTable = () =>{
        setOpenSelectTable(!openSelectTable)
    }

    const radioFilters =[10,25,50,100]
    const [selectedVal, setSelectedVal] = useState(radioFilters[0]);
    const chanceSelect = (val: number): number =>{
        setSelectedVal(val);
        setOpenSelectTable(false)
        return val
    }


    const dataBodies = [{
        name:"budi",
        alamat:"bekasi",
        skill: "program ",
        hoby:"gambar",
        education:" bechelor deagree",
        majoring:" system information",
        action:" edit delete"
    },
    {
        name:"budi 2",
        alamat:"bekasi 2",
        skill: "program  2",
        hoby:"gambar 2",
        education:" bechelor deagree 2",
        majoring:" system information 2",
        action:" edit delete"
    },

    {
        name:"budi 3",
        alamat:"bekasi 3",
        skill: "program  3",
        hoby:"gambar 3",
        education:" bechelor deagree 3",
        majoring:" system information 3",
        action:" edit delete"
    },
    {
        name:"budi 4",
        alamat:"bekasi 4",
        skill: "program  4",
        hoby:"gambar 4",
        education:" bechelor deagree 4",
        majoring:" system information 4",
        action:" edit delete"
    },
    {
        name:"budi 5",
        alamat:"bekasi 5",
        skill: "program  5",
        hoby:"gambar 5",
        education:" bechelor deagree 5",
        majoring:" system information 5",
        action:" edit delete"
    },    
    {
        name:"budi 6",
        alamat:"bekasi 6",
        skill: "program  6",
        hoby:"gambar 6",
        education:" bechelor deagree 6",
        majoring:" system information 6",
        action:" edit delete"
    },
    {
        name:"budi 7",
        alamat:"bekasi 7",
        skill: "program  7",
        hoby:"gambar 7",
        education:" bechelor deagree 7",
        majoring:" system information 7",
        action:" edit delete"
    },
    {
        name:"budi 8",
        alamat:"bekasi 8",
        skill: "program  8",
        hoby:"gambar 8",
        education:" bechelor deagree 8",
        majoring:" system information 8",
        action:" edit delete"
    },
    
]

const dataHeaders = ["name","alamat","skill","hoby","education","majoring","action"];

    return(
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
        <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
            <div>
                <button onClick={openFiterSelectTable} id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                    <svg className="w-3 h-3 text-gray-500 dark:text-gray-400 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                        </svg>
                    {selectedVal} data
                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>
                <p></p>
                {/* <!-- Dropdown menu --> */}
                {openSelectTable&&(
                <div id="dropdownRadio" className="z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600 block" style={{position: "absolute", inset:" 0px auto auto 0px", margin: "0px", transform :"translate3d(0px, 46px, 0px)"}} data-popper-placement="bottom">
                    <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">

                        {radioFilters.map((radioFilter, index)=>(
                        <li key={index}  >
                            <div className="flex items-center p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                                <input checked={selectedVal === radioFilter} onChange={()=>chanceSelect(radioFilter)} id={`filter-radio-example-${index}`} type="radio" value={radioFilter} name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor={`filter-radio-example-${index}`} className="w-full ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300">{radioFilter} data</label>
                            </div>
                        </li>

                        ))}
                    
                    </ul>
                </div>
                )}

        
            </div>
            <label htmlFor="table-search" className="sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input type="text" id="table-search" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
            </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    {dataHeaders.map((dataHeader, index) =>(
                        <th key={index} scope="col" className="px-6 py-3">{dataHeader}</th>                    
                    ))}
                </tr>
            </thead>
            <tbody>

                {dataBodies.map((dataBody, index) =>(
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">

                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {dataBody.name}
                    </th>
                    <td className="px-6 py-4">
                    {dataBody.alamat}
                    </td>
                    <td className="px-6 py-4">
                    {dataBody.skill}
                    </td>
                    <td className="px-6 py-4">
                    {dataBody.hoby}
                    </td>
                    <td className="px-6 py-4">
                    {dataBody.education}
                    </td>
                    <td className="px-6 py-4">
                    {dataBody.majoring}
                    </td>
                    <td className="px-6 py-4">
                    {dataBody.action}
                    </td>
                </tr>

                ))}
            
            </tbody>
        </table>

        <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4 pt-2">
            <div>
                <span className="text-sm text-gray-700 dark:text-gray-400">
                    Showing <span className="font-semibold text-gray-900 dark:text-white">1</span> to <span className="font-semibold text-gray-900 dark:text-white">10</span> of <span className="font-semibold text-gray-900 dark:text-white">100</span> Entries
                </span>
            
            </div>
            
            <div className="relative">

                <nav aria-label="Page navigation example ">
                    <ul className="flex items-center -space-x-px h-10 text-base">
                        <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span className="sr-only">Previous</span>
                            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 1 1 5l4 4"/>
                            </svg>
                        </a>
                        </li>
                        <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                        </li>
                        <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                        </li>
                        <li>
                        <a href="#" aria-current="page" className="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                        </li>
                        <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                        </li>
                        <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                        </li>
                        <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span className="sr-only">Next</span>
                            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m1 9 4-4-4-4"/>
                            </svg>
                        </a>
                        </li>
                    </ul>
                </nav>

            </div>
        </div>
        

            

        
    </div>

    )
}
