// import axios from 'axios';
import React from 'react';
import './App.css';
import img from './asset/temp.jpg';
import Drawer from "./component/drawer";
import Popup from "./component/popup";
// import { Page } from 'pano'
import ThreeSixty from 'react-360-view'

{
  // function App() {
  //   const [email, setemail] = React.useState('');
  //   const [response, setresponse] = React.useState('')

  //   const onSubmit = e => {
  //     e.preventDefault();
  //     const data = {
  //       email: email,
  //     }
  //     axios.post('http://localhost:3000/users/forgotpassword', data, {
  //       headers: {
  //         'Access-Control-Allow-Origin': '*',
  //         'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  //       }
  //     })
  //       .then(res => setresponse(res.data))
  //   }



  //   return (
  //     <div>
  //       <input type='email' value={email} onChange={(e) => setemail(e.target.value)} />
  //       <input type="submit" onClick={e => onSubmit(e)} />
  //       <p>{response ? JSON.stringify(response) : 'Email Not Yet Sent'}</p>
  //     </div>
  //   );
  // }
}

function App() {
  // <pano width="1024" height="512" src={img} caption="Equirectangular Panorama" />
  // <Drawer />
  return (
    <div>
      <ThreeSixty
        amount={36}
        imagePath="C:\Users\abdul\Desktop\sample-react\src\asset\1.jpeg"
        fileName="1.jpeg"
      />
    </div>
  )
}

export default App;
