import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, readUser } from '../app/slices/userDetailsSlice'

function Read() {

  const { users,loading } = useSelector((state) => state.app)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(readUser())
  }, [])


  if(loading){
    return <h1>loading...</h1>
  }
  return (
    <div>
     
      <h1>read</h1>
      {
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {users.map((items) => (
        <div key={items.id} className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
          <h2 className="text-xl font-bold text-gray-800">{items.name}</h2>
          <p className="text-gray-600">{items.email}</p>
          <p className="text-gray-500 mb-4">{items.age}</p>
          <div className="flex gap-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Edit</button>
            <button onClick={()=>dispatch(deleteUser(items.id))} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700">Delete</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700">View</button>
          </div>
        </div>
      ))}
    </div>
      }
    </div>
  )
}

export default Read
