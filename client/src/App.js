import React,{useState} from 'react';
import './App.css';
import axios from 'axios'

function App() {
   const [name,setName] =useState('')
   const [email,setEmail] =useState('')

   const handleChange=(e)=>{
     if(e.target.id ==="name")
     setName(e.target.value)
     else{
      setEmail(e.target.value)
     }
   }

   const handleSubmit = (e)=>{
     e.preventDefault();
     const data={
       name:name,
       email:email
     }
     axios.post('/api/sendMail',data).then((msg)=>{
       console.log('data posted')
     }).catch((err)=>{
         console.log(err)
     })
   }

  return (
    <div className="App">
     <form onSubmit={handleSubmit}>
       <input type="text" id="name" placeholder="Enter your name" onChange={handleChange} value={name}/>
       <input type="email" id="email" placeholder="Enter your email" onChange={handleChange} value={email}/>
      <input type="submit"/> 
          </form>
     
    </div>
  );
}

export default App;
