import React from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')

  const handleClick =(e) =>{
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
      email : email
    }
    axios.post('api/sendMail',data)

  }
  return (
    <div className="App">

      <form onSubmit={handleSubmit}>
     <input id="name" placeholder="Name" type="text" value={name} onChange={handleClick} />
     <input id="eamil" placeholder="Email" type="email" value={email} onChange={handleClick} />
     <button type="submit">Submit</button>
     </form>
     
     
    </div>
  );
}

export default App;
