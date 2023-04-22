import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../features/redux/slices/userDetailSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function User() {
    const dispatch = useDispatch()
    const navigate =  useNavigate(useNavigate)

    const [users, setUsers] = useState({
        name: "",
        email: "",
        age: "",
        gender: ""
    })
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("users", users)
        if (users.name === ""){
            toast.error("Please enter valid name !!")
        }else if(users.email === ""){
            toast.error("Please enter valid email !!")
        }else if(users.age === ""){
            toast.error("Please enter valid age !!")
        }else if(users.gender === ""){
            toast.error("Please select gender !!")
        }else{
            dispatch(createUser(users))
            navigate("/readuser")
        }
     }

    const getUserData = (e) => {
        // e.preventDefault();
        setUsers({...users, [e.target.name]: e.target.value})
    }

  return (
    <div className='user-container'>
        <form onSubmit={handleSubmit}>
            <h2 className='head1'>Fill the Data</h2>
            <div className='mb-3 my-5'>
                <label className='form-label mx-3'>Name</label>
                <input type="text" name="name" value={users.name} onChange = {getUserData} className='form-controls' />
            </div>
            <div className='mb-3'>
                <label className='form-label mx-3'>Email</label>
                <input type="email" name="email" value={users.email} onChange = {getUserData} className='form-controls' />
            </div>
            <div className='mb-3'>
                <label className='form-label mx-3'>Age</label>
                <input type="text" name="age" value={users.age} onChange = {getUserData} className='form-controls' />
            </div>

            <div className="form-check">
                <input className="form-check-input float-none border border-primary mx-2" type="radio" name="gender" value="Male" onChange = {getUserData} id="maleBtn" />
                <label className="form-check-label" htmlFor="maleBtn" >
                    Male
                </label>
            </div>

            <div className="form-check mb-3">
                <input className="form-check-input float-none border border-primary mx-2" type="radio" name="gender" value="Female" onChange = {getUserData} id="femaleBtn" />
                <label className="form-check-label" htmlFor="femaleBtn">
                    Female
                </label>
            </div>

            <div className='mb-3'>
                <input type="submit" className='btn btn-success cursor-pointer' />
            </div>

        </form>
    </div>
  )
}

export default User