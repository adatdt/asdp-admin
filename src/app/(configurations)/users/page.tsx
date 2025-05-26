"use client";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader,Label,TextInput,Dropdown,DropdownItem } from "flowbite-react";
import { useState, useReducer  } from "react";
import {GridCols,GetModal, InputSearchLabel, InputSearchOption} from '../../components/mycomponent'

import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
  } from '@tanstack/react-table'


  type Person = {
    firstName: string
    lastName: string
    age: number
    visits: number
    status: string
    progress: number
  }
  
  const defaultData: Person[] = [
    {
      firstName: 'tanner',
      lastName: 'linsley',
      age: 24,
      visits: 100,
      status: 'In Relationship',
      progress: 50,
    },
    {
      firstName: 'tandy',
      lastName: 'miller',
      age: 40,
      visits: 40,
      status: 'Single',
      progress: 80,
    },
    {
      firstName: 'joe',
      lastName: 'dirte',
      age: 45,
      visits: 20,
      status: 'Complicated',
      progress: 10,
    },
  ]
  
  const columnHelper = createColumnHelper<Person>()
  
  const columns = [
    columnHelper.accessor('firstName', {
      cell: info => info.getValue(),
      footer: info => info.column.id,
    }),
    columnHelper.accessor(row => row.lastName, {
      id: 'lastName',
      cell: info => <i>{info.getValue()}</i>,
      header: () => <span>Last Name</span>,
      footer: info => info.column.id,
    }),
    columnHelper.accessor('age', {
      header: () => 'Age',
      cell: info => info.renderValue(),
      footer: info => info.column.id,
    }),
    columnHelper.accessor('visits', {
      header: () => <span>Visits</span>,
      footer: info => info.column.id,
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      footer: info => info.column.id,
    }),
    columnHelper.accessor('progress', {
      header: 'Profile Progress',
      footer: info => info.column.id,
    }),
  ]
  

export default  function Page() {
//   const posts = await getPosts()
const [openModal, setOpenModal] = useState(false);
const [searchOptionData, setSearchOptionData] = useState(false);
const title = 'User';

const [data, _setData] = useState(() => [...defaultData])
  const rerender = useReducer(() => ({}), {})[1]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

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
            <Button onClick={myModal} className="float-right">Toggle modal</Button>
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


<div className="p-2">
<table>
    <thead>
    {table.getHeaderGroups().map(headerGroup => (
        <tr key={headerGroup.id}>
        {headerGroup.headers.map(header => (
            <th key={header.id}>
            {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                )}
            </th>
        ))}
        </tr>
    ))}
    </thead>
    <tbody>
    {table.getRowModel().rows.map(row => (
        <tr key={row.id}>
        {row.getVisibleCells().map(cell => (
            <td key={cell.id}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
        ))}
        </tr>
    ))}
    </tbody>
    <tfoot>
    {table.getFooterGroups().map(footerGroup => (
        <tr key={footerGroup.id}>
        {footerGroup.headers.map(header => (
            <th key={header.id}>
            {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.footer,
                    header.getContext()
                )}
            </th>
        ))}
        </tr>
    ))}
    </tfoot>
</table>
<div className="h-4" />
<button onClick={() => rerender()} className="border p-2">
    Rerender
</button>
</div>


</div>









        </div>
    </div>
</div>



      


   </>

  )
}