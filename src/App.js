
import './App.css';
import Textform from './Textform.js';
import Nav from'./nav.js';
import About from './About.js';
import Alert from './Alert.js'
import React,{useState} from 'react';
//import react router
import{
  BrowserRouter as Router,
   Routes,
  Route,
  Link
}from "react-router-dom"
function App() {
  const[mode,setMode]=useState('light')
  const[alert,setAlert]=useState(null)
  const show=(message,type)=>{
    setAlert({
      msg:message,
      t:type
    })
    setTimeout(()=>{
     setAlert(null)
    },1000)
  }
 const toggle=()=>{
   if(mode==='light')
   {
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    show("Dark mode has been enabled","success")
   }
   else
   {
    setMode('light');
     document.body.style.backgroundColor='white';
    show("light mode has been enabled","success")
   }
  }
  return (
    <>
    <Router>
<Nav title="TextUtils" aboutus="About" mode={mode} toggle={toggle}/>
<Alert alert={alert}/>
<div>
  
  <Routes>
  <Route path="/about" element={<About />} />
  <Route path="/" element={<Textform title="Try TextUtils-Word Counter,Character Counter" mode={mode} show={show} />} />
</Routes>
</div>
 </Router>
</>
  );
}

export default App;

