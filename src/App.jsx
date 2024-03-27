import { useState, useEffect } from 'react';
import List from './List';
import './App.css';


function App() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    const getArray = async() => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const jsonObject = await response.json();
      console.log(jsonObject);
      const usuarios = jsonObject;

      setArray(usuarios);
    }

    getArray();
  }, []);

  return (
    <>
      <h1>Contact List</h1>
      <List array={array}/>
    </>
  )
}

export default App
