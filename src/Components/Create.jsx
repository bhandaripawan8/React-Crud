import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function Create() {
  const [values, setvalues] = useState({
    name: "",
    email: "",
    phone: ""
  });


  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/users', values).then (res => {
      console.log('data sent');
      navigate("/");
    })
  }
  return (
    <>
    <div className='d-flex w-100 vh-100 justify-content-center align-item-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Add a User</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name">Name:</label>
            <input type="text" name='name' className='form-control' placeholder='Enter name...' onChange={e => setvalues({...values, name: e.target.value})}/>
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email:</label>
            <input type="text" name='name' className='form-control' placeholder='Enter email address...'  onChange={e => setvalues({...values, email: e.target.value})}/>
          </div>
          <div className="mb-2">
            <label htmlFor="phone">Phone:</label>
            <input type="text" name='name' className='form-control' placeholder='Enter phone number...'  onChange={e => setvalues({...values, phone: e.target.value})}/>
          </div>
          <button className='btn btn-success'>Submit</button>
          <Link to={"/"} className='btn btn-primary ms-3'>back</Link>
        </form>
      </div>
    </div>
    </>
  )
}
