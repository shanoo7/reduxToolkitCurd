import { useEffect, useState } from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, readUser } from '../app/slices/userDetailsSlice'
import { Link } from 'react-router-dom'
import CustomModal from './CustomModal'

function Read() {

  const { users, loading, searchData } = useSelector((state) => state.app)
  const dispatch = useDispatch()

  const [showModal, setShowModal] = useState(false)
  const [checked, setChecked] = useState("")
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

      <div className="flex gap-4 items-center justify-center mt-2">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="gender" className="radio checked:bg-blue-500"
            checked={checked === ""}
            onChange={(e) => setChecked("")}
          />
          <span>All</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="gender" className="radio checked:bg-blue-500" value="male" checked={checked === "male"} onChange={(e) => setChecked(e.target.value)} />
          <span>Male</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="gender" className="radio checked:bg-pink-500" value="female" checked={checked === "female"} onChange={(e) => setChecked(e.target.value)} />
          <span>Female</span>
        </label>
      </div>


      {
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {users && users?.filter((ele) => {
            if (!searchData) {
              return ele;
            } else {
              return ele.name.toLowerCase().includes(searchData.toLowerCase())
            }
          })

            .filter((ele) => {
              if (checked === "male") {
                return ele.gender === "male"

              } else if (checked === "female") {
                return ele.gender === "female"
              } else {
                return ele;
              }
            })

            .map((ele, index) => (
              <div key={ele?.id || index} className="bg-white p-6 rounded-xl border flex flex-col items-center text-center">
                <h2 className="text-xl font-bold text-gray-800">{ele?.name}</h2>
                <p className="text-gray-600">{ele?.email}</p>
                <p className="text-gray-500 mb-4">{ele?.gender}</p>
                <div className="flex gap-2">
                  <Link to={`/update/${ele?.id}`}><button className="bg-blue-700 cursor-pointer font-bold text-white px-4 py-2 rounded-lg hover:bg-blue-700">Edit</button></Link>
                  <button onClick={() => dispatch(deleteUser(ele?.id))} className="bg-red-700 cursor-pointer font-bold text-white px-4 py-2 rounded-lg hover:bg-red-700">Delete</button>
                  <button onClick={() => [setShowModal(true), setId(ele?.id)]} className="bg-green-700 cursor-pointer font-bold text-white px-4 py-2 rounded-lg hover:bg-green-700">View</button>
                </div>
              </div>
            ))}
        </div>
      }
    </div>
  )
}

export default Read
