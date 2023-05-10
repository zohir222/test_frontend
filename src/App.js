import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [dd , setdd] = useState();
  useEffect(()=>{
      axios.get("https://testbackend-production-94a2.up.railway.app/books").then((Response)=>{
        setdd(Response.data) ;
      })
      },[]) ;

  return (
    <div className="App">
      { dd.map( (item)=> {return <h2 key={item} > {item} </h2> } ) }
    </div>
  );
}

export default App;
