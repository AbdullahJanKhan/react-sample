import axios from 'axios';
import React from 'react';
import './App.css';

function App() {
  const [email, setemail] = React.useState('');
  const [response, setresponse] = React.useState('')

  const onSubmit = e => {
    e.preventDefault();
    const data = {
      email: email,
    }
    axios.post('http://localhost:3000/users/forgotpassword', data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
    })
      .then(res => setresponse(res.data))
  }



  return (
    <div>
      <input type='email' value={email} onChange={(e) => setemail(e.target.value)} />
      <input type="submit" onClick={e => onSubmit(e)} />
      <p>{response ? JSON.stringify(response) : 'Email Not Yet Sent'}</p>
    </div>
  );
}

export default App;
