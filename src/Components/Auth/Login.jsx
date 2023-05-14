import axios from 'axios';
import React, { useState } from 'react';

export default function Login({handleSubmit,handleChange, formData}) {
  


// const handleChange = (event) =>{
//   setFormData((prevState)=>({
//       ...prevState,
//       [event.target.id]: event.target.value            
//   }))
// }

  

  return (
    <div className="container w-25 text-white mt-5">
      <div className='row'>
        <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
            <label for="user">Email/Username</label>
            <input value={formData.user} onChange={handleChange} type="text" class="form-control" id="user"  placeholder="Enter email"/>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input value={formData.password} onChange={handleChange} type="password" class="form-control" id="password" placeholder="Password"/>
        </div>
        <button type="submit" class="btn btn-primary my-3">Submit</button>
        </form>
      </div>
    </div>
  );
}

