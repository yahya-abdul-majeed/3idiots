import React, { useState } from 'react';

export default function Register() {
    const [formData,setFormData] = useState({
        username:'',
        email:'',
        pass:'',
        name:''
    })
    const url = "https://rocketchat.smkt.fun//api/v1/users.register"
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    };


    const handleChange = (event) =>{
        setFormData((prevState)=>({
            ...prevState,
            [event.target.id]: event.target.value            
        }))
    }



  const handleSubmit= (event) => {
    event.preventDefault();
    console.log(formData)
    fetch(url,requestOptions)
    .then(response => console.log(response))
    
  }

  return (
    <div className="container w-25 text-white mt-5">
      <div className='row'>
      <h3>Register</h3>
      <form onSubmit={handleSubmit}>
      <div class="form-group">
            <label for="name">Name</label>
            <input onChange={handleChange} value={formData.name} type="text" class="form-control" id="name"  placeholder="Name"/>
        </div>
        <div class="form-group">
            <label for="username">Username</label>
            <input onChange={handleChange} value={formData.username} type="text" class="form-control" id="username"  placeholder="Username"/>
        </div>
        <div class="form-group">
            <label for="email">Email address</label>
            <input onChange={handleChange} value={formData.email} type="email" class="form-control" id="email"  placeholder="Enter email"/>
        </div>
        <div class="form-group">
            <label for="pass">Password</label>
            <input onChange={handleChange} value={formData.pass} type="password" class="form-control" id="pass" placeholder="Password"/>
        </div>
        <button type="submit" class="btn btn-primary my-3">Submit</button>
        </form>
      </div>
    </div>
  );
}

