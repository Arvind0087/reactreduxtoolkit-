import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../features/redux/slices/userDetailSlice';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import Spinner from '../components/Spinner';

function Update() {
    const [updateUserData, setUpdateUserData] = useState({})
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { id } = useParams()

    console.log("id.....", id)
    const {users, loading} = useSelector((state) => state.app)

    useEffect(() => {
        if(id) {
            const singleUser = users.filter((item) => item.id === id)
            setUpdateUserData(singleUser[0])
        }
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateUser(updateUserData))
        navigate("/readuser")
     }

    const updatedData = (e) => {
        e.preventDefault();
        setUpdateUserData({...updateUserData, [e.target.name]: e.target.value})
    }
   
    if(loading){
        return (
            <Spinner />
        )
    }

  return (
    <div>
        <form onSubmit={handleUpdate}>
            <h2 className='mt-5'>Fill the Data</h2>
            <div className='mb-3 my-5'>
                <label className='form-label mx-3'>Name</label>
                <input type="text" name="name" value={updateUserData && updateUserData.name} onChange={updatedData} className='form-controls' />
            </div>
            <div className='mb-3'>
                <label className='form-label mx-3'>Email</label>
                <input type="email" name="email" value={updateUserData && updateUserData.email}  onChange={updatedData} className='form-controls' />
            </div>
            <div className='mb-3'>
                <label className='form-label mx-3'>Age</label>
                <input type="text" name="age" value={updateUserData && updateUserData.age} onChange={updatedData} className='form-controls' />
            </div>

            <div className="form-check">
                <input className="form-check-input float-none border border-primary mx-2" type="radio" name="gender" value="Male" id="maleBtn" checked={updateUserData && updateUserData.gender === "Male"} onChange={updatedData} />
                <label className="form-check-label" htmlFor="maleBtn" >
                    Male
                </label>
            </div>

            <div className="form-check mb-3">
                <input className="form-check-input float-none border border-primary mx-2" type="radio" name="gender" value="Female" id="femaleBtn" checked={updateUserData && updateUserData.gender === "Female"} onChange={updatedData} />
                <label className="form-check-label" htmlFor="femaleBtn">
                    Female
                </label>
            </div>

            <div className='mb-3'>
                <input type="submit" className='btn btn-success cursor-pointer' value="Update" />
            </div>

        </form>
    </div>
  )
}

export default Update