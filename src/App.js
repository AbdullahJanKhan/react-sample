import axios from 'axios';
import React from 'react';
import './App.css';

function App() {
  const [pname, setname] = React.useState('')
  const onSubmit = e => {
    e.preventDefault();
    const data = {
      name: pname
    }
    axios.post('http://localhost:3000/users/save', data,{
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
    })
      .then(res => console.log(res))
  }
  return (
    <div>
      <p>Enter name to send to server</p>
      <input type='text' value={pname} onChange={e => setname(e.target.value)} placeholder='Enter Name' />
      <input type='submit' onClick={(e) => onSubmit(e)} />
    </div>
  );
}

export default App;
