import axios from 'axios';
import {React, useState, useEffect} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'



export default function Update() {
  // const [data, setdata] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    axios.get('http://localhost:3000/users/'+id)
    .then(res => setvalues(res.data))
    .catch(err=> console.error(err));
  },[])

  const [values, setvalues] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const navigate = useNavigate();
  const handleUpdate = (event) =>{
    event.preventDefault();
    axios.put('http://localhost:3000/users/'+id, values)
    .then(res=>{
      console.log(res);
      navigate('/');
    })
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
    <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
      <h1>Update a User</h1>
      <form onSubmit={handleUpdate}>
        <div className="mb-2">
          <label htmlFor="name">Name:</label>
          <input type="text" name='name' className='form-control' placeholder='Enter name...' value={values.name} onChange={(e) => setvalues({...values, name: e.target.value})}/>
        </div>
        <div className="mb-2">
          <label htmlFor="email">Email:</label>
          <input type="text" name='name' className='form-control' placeholder='Enter email address...'  value = {values.email} onChange = {e => setvalues({...values,email: e.target.value })}/>
        </div>
        <div className="mb-2">
          <label htmlFor="phone">Phone:</label>
          <input type="text" name='name' className='form-control' placeholder='Enter phone number...'  value = {values.phone} onChange = {e =>setvalues({...values, phone:e.target.value})}/>
        </div>
        <button className='btn btn-success'>Submit</button>
        <Link to={"/"} className='btn btn-primary ms-3'>back</Link>
      </form>
    </div>
  </div>
  )
}
