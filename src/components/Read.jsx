import React, { useEffect, useState } from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, readUser } from '../app/slices/userDetailsSlice'
import { Link } from 'react-router-dom'
import CustomModal from './CustomModal'

function Read() {

  const { users, loading } = useSelector((state) => state.app)
  const dispatch = useDispatch()

  const [showModal, setShowModal] = useState(false)
  const [id, setId] = useState()

  useEffect(() => {
    dispatch(readUser())
  }, [])


  if (loading) {
    return (
      <div className='flex items-center justify-center my-10'>
        <AiOutlineLoading3Quarters className='animate-spin text-8xl text-green-500' />

      </div>
    )
  }
  return (
    <div>
      {showModal && <CustomModal setShowModal={setShowModal} id={id} />}
      <h1 className='flex items-center justify-center my-5 text-2xl font-bold '>All Users</h1>
      {
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {users && users?.map((ele,index) => (
            <div key={ele?.id || index} className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
              <h2 className="text-xl font-bold text-gray-800">{ele?.name}</h2>
              <p className="text-gray-600">{ele?.email}</p>
              <p className="text-gray-500 mb-4">{ele?.gender}</p>
              <div className="flex gap-2">
                <Link to={`/update/${ele?.id}`}><button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Edit</button></Link>
                <button onClick={() => dispatch(deleteUser(ele?.id))} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700">Delete</button>
                <button onClick={() => [setShowModal(true), setId(ele?.id)]} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700">View</button>
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  )
}

export default Read
