import React from 'react'
import { useSelector } from 'react-redux'

function CustomModal({ setShowModal, id }) {

    const { users } = useSelector((state) => state.app)
    const data = users.filter((item) => item.id === id)
    const singleData = data[0];

    return (
        <>
            <div className='bg-gray-600/90 fixed inset-0 z-10'>
                <div className=' w-1/2 h-1/2 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 z-20 rounded-lg p-5'>
                    <div className='flex justify-end'>
                        <button className='btn bg-red-500 h-8' onClick={() => setShowModal(false)}>close</button>
                    </div>
                    <div className='flex flex-col font-bold gap-5 justify-center items-center'>
                        <h5 className='text-xs mt-10 md:text-2xl'>{singleData.name}</h5>
                        <h1 className='text-xs md:text-2xl'>{singleData.email}</h1>
                        <h1 className='text-xs md:text-2xl'>{singleData.age}</h1>
                        <h1 className='text-xs md:text-2xl'>{singleData.gender}</h1>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomModal
