import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [dd , setdd] = useState([]);
  useEffect(()=>{
      axios.get("https://testbackend-production-94a2.up.railway.app/books").then((Response)=>{
        setdd(Response.data) ;
        console.log(Response.data);
      })
      },[]) ;

  return (
    <div className="App">
     <h2>koko</h2>
     <h2> {dd} </h2>
    </div>
  );
}

export default App;
