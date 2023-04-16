import React from 'react'
import profile from '../../assets/profile_placeholder.png'
export default function AppointmentCard() {
    let aptdate = "20-march-2023"
    let apttime = "16:30"
    let venue = "https://meet.google.com"
    return (
        <div className='d-flex align-items-middle justify-content-center shadow p-4 rounded'>
            <div className="profile-image mt-4">
                <img src={profile} height={"100px"} alt="" />
                <h3>Dr. Avadh Ojha</h3>
                <p>M.B.B.S, Psychatrist</p>
            </div>
            <div className="apt-card mt-4">
                <div className="details">
                    <h3>Timing : {aptdate} {apttime}</h3>
                    <h3>Place : <a href="#btn">{venue}
                    </a></h3>
                </div>
                <div className="d-flex justify-content-evenly mt-5">
                    <button className='btn btn-danger'>Cancel</button>
                    <button className='btn btn-warning'>Reschedule</button>
                </div>
            </div>
        </div>
    )
}
