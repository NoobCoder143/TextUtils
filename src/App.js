
import './App.css';
import Navbar from './Components/Navbar';

 import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  const [mode,setMode] =useState("light");
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
    msg: message,
    type: type
  })
  setTimeout(()=>{
setAlert(null)
  },1400)
  }
  const togglemode=()=>{
   if (mode==="light"){
    setMode("dark");
    document.body.style.backgroundColor='black';
    document.body.style.color='white';
    showAlert("You Have Enabled Dark Mode","success")
   }
   else{
    setMode("light");
    
    document.body.style.backgroundColor='white';
    document.body.style.color='black';
    showAlert("You Have Enabled Light Mode","success")
   }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container">
          {/* <Routes> */}
            {/* <Route path="/about" element={<About />} /> */}
            <TextForm heading="Enter Text" mode={mode} showAlert={showAlert}/>
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}


export default App;
