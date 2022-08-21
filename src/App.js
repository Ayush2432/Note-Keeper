import "./App.css";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "./components/Pagination";
import { useEffect, useState } from "react";

function App() {

  const [count,setCount] = useState(1)



  return (
    <>
      <div className="App">
        <TodoList 
          count={count}
          setCount={setCount}
        />
      </div>


      <div className="footer">
      <Pagination 
        count={count} 
        setCount={setCount}
      />
      </div>
      
    </>
  );
}

export default App;
