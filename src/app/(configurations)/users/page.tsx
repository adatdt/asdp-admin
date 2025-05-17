// Dummy imports
// import { getPosts } from '@/lib/posts'
// import { Post } from '@/ui/post'

import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
// import 'datatables.net-select-dt';
// import 'datatables.net-responsive-dt';
 
DataTable.use(DT);
 
export default async function Page() {
//   const posts = await getPosts()
 
  return (
 



        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
 <DataTable>
    <thead>
        <tr>
            <th>Name</th>
            <th>Location</th>
        </tr>
    </thead>
</DataTable>

    ini adalah users
   </div>
  )
}