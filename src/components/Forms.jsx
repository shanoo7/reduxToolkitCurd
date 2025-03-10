import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../app/slices/userDetailsSlice';
import { useNavigate } from 'react-router-dom';

function Forms() {
const dispatch = useDispatch()
const navigate = useNavigate()
const [users,setUsers] = useState({
    name:"",
    email:"",
    age:"",
    gender:""
});

const handleChange = (e)=>{
    setUsers({...users,[e.target.name]:e.target.value})
    console.log(users)
}

const handleSubmit = (e)=>{
  e.preventDefault()
  dispatch(createUser(users))
  navigate("/read")
}

  return (
    <div>
      <div className="w-1/2 bg-gray-100 p-6 rounded-lg shadow-lg m-auto mt-10">
      <h2 className="text-2xl font-semibold text-center mb-4">Add User</h2>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name Input */}
        <input
        name='name'
        value={users.name}
        onChange={handleChange}
          type="text"
          placeholder="Name"
          className="input input-bordered w-full"
        />

        {/* Email Input */}
        <input
        name='email'
        value={users.email}
        onChange={handleChange}
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
        />

        {/* Age Input */}
        <input
        name='age'
        value={users.age}
        onChange={handleChange}
          type="text"
          placeholder="Age"
          className="input input-bordered w-full"
        />

        {/* Radio Buttons for Gender Selection */}
        <div className="flex gap-4 items-center mt-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="gender" onChange={handleChange} className="radio checked:bg-blue-500" value="male" />
            <span>Male</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="gender" onChange={handleChange} className="radio checked:bg-pink-500" value="female" />
            <span>Female</span>
          </label>
        </div>

        {/* Submit Button */}
        <button className="btn btn-secondary mt-4">Submit</button>
      </form>
    </div>
    </div>
  )
}

export default Forms
