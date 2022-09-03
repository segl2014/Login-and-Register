// import React, { useState } from 'react'
// import DataTable from "react-data-table-component"
// import Data from "../../Array"

// function Viewuser() {

//   const [search, setSearch] = useState("");
//   const [filtered, setFiltered] = useState([]);

//   console.log(Data)

//   const column = [
//     {
//       name: "Id",
//       selector: (datas) => datas.id
//     },
//     {
//       name: "Email",
//       selector: (datas) => datas.email
//     },
//     {
//       name: "First Name",
//       selector: (datas) => datas.first_name
//     },
//     {
//       name: "Last Name",
//       selector: (datas) => datas.last_name
//     },
//   ]

//   return (
//     <div>
//       <DataTable 
//       title="User List"
//       data={filtered}
//       columns={column}
//       pagination
//       fixedHeader
//       fixedHeaderScrollHeight='400px'
//       highlightOnHover
//       subHeader
//       subHeaderComponent = {
//         <input type="search" 
//         placeholder='Search'
//         className='w-25 form-control'
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         />
//       }
//       />
     
//     </div>
//   )
// }

// export default Viewuser