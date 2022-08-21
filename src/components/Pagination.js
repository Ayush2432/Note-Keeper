import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import "./Pagination.css";
import PaginationNumber from "./PaginationNumber";
// import * as React from 'react';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';

// export default function PaginationOutlined() {
//   const handlechange =({ selected: selectedPage })=>{
//     console.log(selectedPage)
//   }
//   return (
//     <div className='paginate' >
//       <Stack spacing={2}>
//       <Pagination count={10} color="secondary" onChange={handlechange}  />
//     </Stack>
//     </div>

//   );
// }
import React from "react";

const Pagination = ({count,setCount}) => {
  const pageNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleprevious = (e) => {
    e.preventDefault()

    if(count!=1){
      setCount(count-1)
    }

  }

  const handlenext = (e) => {
    e.preventDefault()

    if(count!=10){
      setCount(count+1)
    }

  }

  
  return (
    <div className="pagination">
      <a href="pagination__linkPrev" onClick={handleprevious}>
        <h4>
          <GrFormPrevious />
        </h4>
      </a>

      {pageNum.map((number) => {
        return(
          <PaginationNumber current={count} number={number} />
        );
      })}

      <a href="pagination__linkNext" onClick={handlenext}>
        <h4>
          <GrFormNext />
        </h4>
      </a>
    </div>
  );
};

export default Pagination;
