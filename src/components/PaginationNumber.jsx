import './Pagination.css'

const PaginationNumber = ({current,number}) => {
  if(current==number){
    return (
    <a className="pagination__linkCurrent" href="">
        {number}
    </a>    
      )
  }
  else{
    return (
        <a className="pagination__link" href="">
        {number}
      </a>    
      )
  }
}

export default PaginationNumber
