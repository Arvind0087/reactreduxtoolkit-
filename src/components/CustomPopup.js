import React from 'react'
import "./CustomPopup.scss";
import { useSelector } from 'react-redux';

function CustomPopup({id, showPopup, setShowPopup}) {
    const allUsers = useSelector((state) => state.app.users)
    const singleUser = allUsers.filter((item) => item.id === id)

    const closePopup = () => {
        setShowPopup(false)
    }
  return (
    <div className='popupBackground'>
        <div className='popupContainer'>
            {singleUser.map((item) => {
                return (
                    <>
                        <p>{item.name}</p>
                        <p>{item.email}</p>
                        <p>{item.gender}</p>
                        <p>{item.age}</p>
                    </>
                )
            })}

            <button onClick={closePopup}>Close</button>
        </div>
    </div>
  )
}

export default CustomPopup