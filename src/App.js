
import axios from 'axios';
import './App.css';
 import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([])
  const [id, setId] = useState(0)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [counter, setCounter] = useState(0)

const send=()=>{
  axios.post('http://localhost:3001/api/user',{
  id:id,
  name:name,
  email:email
  }).then((result)=>{
    console.log(result.data)
      data.push(result.data)
  setCounter(counter+1) 
  }).catch((e)=>
      console.log(e))
  }

useEffect(() => {
  axios.get('http://localhost:3001/api/users').then((res)=>{
    setData(res.data)
  }).catch((e)=>{
    console.log(e)
  })
}, [counter])

  return (<>
  <div>
  {data.map((singleData)=>{
    return(<div key={singleData.id}>
      <p>{singleData.email}</p>
      <p>{singleData.name}</p>
    </div>)
  })}
  </div>    
  <div className="App">
    <h1>User Registration Form</h1>
        <label>
          id:
          <input
            type="number"
            name="name"
            onChange={(e)=>{setId(e.target.value)}}
            required
          />
        </label>
        <br />
        <label>
          name:
          <input
            type="text"
            name="password"
            onChange={(e)=>{setName(e.target.value)}}
            required
          />
        </label>
        <br />
        <label>
          email:
          <input
            type="email"
            name="fullName"
            onChange={(e)=>{setEmail(e.target.value)}}
            required
          />
        </label>
        
        <br />
        <button type="submit" onClick={()=>send()}>Submit</button>
    </div>
    </>
    );
}

export default App;
