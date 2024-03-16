import React, { useState } from 'react'
import './form.css'
import axios from 'axios'

export default function For() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')




const send=()=>{
    axios.post('http://localhost:3001/api/user',{
    name:name,
    email:email
    }).then((result)=>{
        console.log(result)
    }).catch((e)=>
        console.log(e))
    }

  return (
    <div className="App">
    <h1>User Registration Form</h1>
        
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
  )
}
