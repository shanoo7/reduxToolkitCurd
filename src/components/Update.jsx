// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate, useParams } from 'react-router-dom'
// import { updateUser } from '../app/slices/userDetailsSlice';

// function Update() {

//     const { id } = useParams();
//     const navigate = useNavigate()
//       const { users} = useSelector((state) => state.app);
//       const dispatch = useDispatch();
//       const [editUser, setEditUser] = useState({})


//       useEffect(()=>{
//         if(id && users.length>0){
//             const singleUser =  users.filter((item)=>item.id === id)
//             setEditUser(singleUser[0])

//         }
//       },[id,users])
//       console.log(editUser)


//     const handleEdit = (e)=>{
//         setEditUser({...editUser,[e.target.name]: e.target.value})
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(updateUser(editUser))
//         navigate("/")

//     }

//     return (
//         <div>
//             <div className="w-1/2 bg-gray-100 p-6 rounded-lg shadow-lg m-auto mt-10">
//                 <h2 className="text-2xl font-semibold text-center mb-4">Update User</h2>

//                 <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//                     {/* Name Input */}
//                     <input
//                         name='name'
//                         value={editUser && editUser.name}
//                         onChange={handleEdit}
//                         type="text"
//                         placeholder="Name"
//                         className="input input-bordered w-full"
//                     />

//                     {/* Email Input */}
//                     <input
//                         name='email'
//                         value={editUser && editUser.email}
//                         onChange={handleEdit}
//                         type="email"
//                         placeholder="Email"
//                         className="input input-bordered w-full"
//                     />

//                     {/* Age Input */}
//                     <input
//                         name='age'
//                         value={editUser && editUser.age}
//                         onChange={handleEdit}
//                         type="text"
//                         placeholder="Age"
//                         className="input input-bordered w-full"
//                     />

//                     {/* Radio Buttons for Gender Selection */}
//                     <div className="flex gap-4 items-center mt-2">
//                         <label className="flex items-center gap-2 cursor-pointer">
//                             <input type="radio" name="gender"
//                                 onChange={handleEdit} 
//                                 className="radio checked:bg-blue-500" value="male"
//                                 checked={editUser && editUser.gender==="male"} />
//                             <span>Male</span>
//                         </label>
//                         <label className="flex items-center gap-2 cursor-pointer">
//                             <input type="radio" name="gender"
//                                 onChange={handleEdit}
//                                 checked={editUser && editUser.gender==="female"}
//                                 className="radio checked:bg-pink-500" value="female"
//                                  />
//                             <span>Female</span>
//                         </label>
//                     </div>

//                     {/* Submit Button */}
//                     <button className="btn btn-secondary mt-4">Submit</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Update

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../app/slices/userDetailsSlice';

function Update() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { users } = useSelector((state) => state.app);
    const dispatch = useDispatch();
    
    // ✅ Fix: Initialize state as an object, not an array
    const [editUser, setEditUser] = useState({});

    useEffect(() => {
        if (id && users.length > 0) {
            const singleUser = users.find((item) => item.id === id);
            if (singleUser) {
                setEditUser(singleUser);
            }
        }
    }, [id, users]); // ✅ Fix: Dependency array added

    const handleEdit = (e) => {
        setEditUser({ ...editUser, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser(editUser));
        navigate("/");
    };

    return (
        <div>
            <div className="w-1/2 bg-gray-100 p-6 rounded-lg shadow-lg m-auto mt-10">
                <h2 className="text-2xl font-semibold text-center mb-4">Update User</h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Name Input */}
                    <input
                        name='name'
                        value={editUser.name || ""} // ✅ Fix: Provide fallback value
                        onChange={handleEdit}
                        type="text"
                        placeholder="Name"
                        className="input input-bordered w-full"
                    />

                    {/* Email Input */}
                    <input
                        name='email'
                        value={editUser.email || ""}
                        onChange={handleEdit}
                        type="email"
                        placeholder="Email"
                        className="input input-bordered w-full"
                    />

                    {/* Age Input */}
                    <input
                        name='age'
                        value={editUser.age || ""}
                        onChange={handleEdit}
                        type="text"
                        placeholder="Age"
                        className="input input-bordered w-full"
                    />

                    {/* Radio Buttons for Gender Selection */}
                    <div className="flex gap-4 items-center mt-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input 
                                type="radio" 
                                name="gender"
                                onChange={handleEdit} 
                                className="radio checked:bg-blue-500" 
                                value="male"
                                checked={editUser.gender === "male"} 
                            />
                            <span>Male</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input 
                                type="radio" 
                                name="gender"
                                onChange={handleEdit}
                                className="radio checked:bg-pink-500" 
                                value="female"
                                checked={editUser.gender === "female"}
                            />
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

export default Update;

