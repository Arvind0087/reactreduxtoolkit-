import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { showUser, deleteUser } from '../features/redux/slices/userDetailSlice'
import {Link} from "react-router-dom"
import Spinner from '../components/Spinner';
import CustomPopup from './CustomPopup';

function ReadUser() {
    const {users, loading, searchData } = useSelector((state) => state.app)
    const dispatch = useDispatch()
   
    const [id, setId] = useState()
    const [showPopup, setShowPopup] = useState(false)

    const [radioData, setRadioData] = useState("")
      
    useEffect(() => {
        dispatch(showUser())
    }, [])

    if(loading){
        return (
            <Spinner />
        )
    }

  return (
    <>
        {showPopup && <CustomPopup id={id} showPopup={showPopup} setShowPopup={setShowPopup} />}

        <div className='mt-3 top1'>
            <h1 className="py-3">All Users</h1>

            <div className="form-check">
                <input className="form-check-input float-none border border-primary mx-2" type="radio" name="gender" value="" id="allBtn" checked={radioData === ""} onChange={(e)=>setRadioData(e.target.value)} />
                <label className="form-check-label" htmlFor="allBtn" >
                    All
                </label>

                <input className="form-check-input float-none border border-primary mx-2" type="radio" name="gender" value="Male" id="maleBtn" checked={radioData === "Male"} onChange={(e)=>setRadioData(e.target.value)} />
                <label className="form-check-label" htmlFor="maleBtn" checked={radioData === "Male"}>
                    Male
                </label>
                
                <input className="form-check-input float-none border border-primary mx-2" type="radio" name="gender" value="Female" id="femaleBtn" checked={radioData === "Female"} onChange={(e)=>setRadioData(e.target.value)}/>
                <label className="form-check-label" htmlFor="femaleBtn">
                    Female
                </label>
            </div>

            {users && 
            //filter based on search input
                users.filter((item) => {
                    if(searchData.length === 0){
                        return item
                    }else{
                        return item.name.toLowerCase().includes(searchData.toLowerCase())  
                    }
                })
                //filter data based on radio button
                .filter((ele) => {
                    if(radioData === "Male"){
                        return ele.gender === "Male"
                    }else if(radioData === "Female"){
                        return ele.gender === "Female"
                    }else{
                        return ele
                    }
                })
                //display data
                .map((user, index) => {
                return (
                    <div className="card mt-3" key={index} style={{width: "38rem", margin: "auto"}}>
                        <div className="card-body">
                            <h5 className="card-title">{user.name}</h5>
                            <h6 className="card-subtitle mb-2 mt-2 text-body-secondary">{user.email}</h6>
                            {/* <p className="card-text mb-2">{user.age}</p> */}
                            <p className="card-text">{user.gender}</p>
                            <Link to="/readuser" className="btn btn-primary mx-2" onClick={ () => [setId(user.id), setShowPopup(true)]}>View</Link>
                            <Link to={`/edit/${user.id}`} className="btn btn-primary mx-2">Edit</Link>
                            <Link to="/readuser" className="btn btn-primary mx-2" onClick={() => dispatch(deleteUser(user.id))}>Delete</Link>
                        </div>
                    </div>
                )
            })}
    </div>
    </>
  )
}

export default ReadUser