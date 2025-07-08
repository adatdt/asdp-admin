"use client";
import { useState, useEffect  } from "react";
import {
//   GetModal, 
  BtnAdd,
  FlexFiltering,
  FlexFilteringDropdown
} from '../../components/mycomponent'

import { GetModalAdd } from "./components/add";
import { ToastContainer, toast } from 'react-toastify';
import { MyTable } from "./tables"

export default  function Page() {

    const [openModal, setOpenModal] = useState(false);
    const [getUsers, setUsers] = useState<(string|number)[][]>([]); // set for type array
    const [totalData, setTotalData] = useState(0);
    const [refresh, setRefresh] = useState(0); // State to trigger refresh
    
    const filterData = [5,10, 25,50,100]
    const [showData, setShowData] = useState(filterData[0]); // State to trigger refresh
    // const showData = filterData[0]
    const getShowing = (data:number)=>{
        setShowData(data)
    }
    useEffect(()=>{
        setRefresh(showData)
    },[showData])
    const paramsTables ={
                            filterData:filterData,
                            dataHeader:["Name","Usernam","Phone Number","Address","Status", "action"], 
                            startData:1,
                            showData:showData,
                            totalData:totalData,
                            getShowing:getShowing                            
                            }
    const title = 'User';
    
    const getToast = (status:boolean) =>{
        if(status)
        {
            toast.success('Berhasil', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
          
                });
        }
        else {
            toast.error('Failed ', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
    }

    async function getData()  {
        const dataToSend ={
            startData:0,
            showData:showData,
            // search:totalData,                            
            }
        const res = await fetch('api/configurations/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend),
          });

        // const res = await fetch('api/configurations/users'); 
        const dt = await res.json();
        const arr: (string|number)[][]=[]
        dt.map((element: {full_name: string; id:number; address:string;  status:number; phone_number:string; username:string; }) => {
            const data: (string|number)[]=[element.full_name,
                                                                element.username,
                                                                element.phone_number,
                                                                element.address,
                                                                element.status,
                                                                "aksi"]
            arr.push(data)
        });
        setTotalData(arr.length)
        setUsers(arr)
        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data');
            }
    };

    const getRefresh = () =>{
        setRefresh(1)
    }
    
    useEffect(()=>{            
          getData()
    },[refresh])

    const myModal = (data:boolean) =>{
        setOpenModal(data)
    }


    const titleModal = "Users"
    const ModalProps = {myModal:myModal , title:titleModal ,getOpen:openModal, getToast:getToast, getRefresh:getRefresh}

    const dataLists = [{name:"Account settings", id:1},
        {name:"Support", id:2},
        {name:"License", id:3}]
    
    const paramFilterList = {data:dataLists, defaultVal:false}

    return (
        <> 
            <ToastContainer />
            <div id="accordion-open" data-accordion="open">
                <h2 id="accordion-open-heading-1">
                    <div  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-open-body-1" aria-expanded="true" aria-controls="accordion-open-body-1">
                        <span className="flex items-center">{title}</span>
                        <BtnAdd  position="float-right"  onClick={()=>myModal(true)} />
                        <GetModalAdd {...ModalProps} ></GetModalAdd>
                    </div>
                </h2>

                <div id="accordion-open-body-1"  aria-labelledby="accordion-open-heading-1">
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <div className="grid gap-6 mb-6 md:grid-cols-3" >

                            <FlexFiltering name="Pelabuhan"></FlexFiltering>
                            <FlexFiltering name="Dermaga"></FlexFiltering>

                            <FlexFilteringDropdown  {...paramFilterList}></FlexFilteringDropdown>
                        

                        </div>                              
                        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                                <MyTable  data={getUsers}  params={paramsTables}/>
                        </div>
                    </div>
                </div>
            </div>

    </>

    )
}