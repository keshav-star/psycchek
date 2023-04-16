import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppointmentCard from './AppointmentCard'

export default class Showappt extends Component {
    render() {
        return (

            <div className='d-flex align-items-center justify-content-center p-5' >
                <div className=''>
                    <h2 >Appointment details</h2>
                        <div className="py-3">
                    <AppointmentCard />

                        </div>
                    <div>
                        <h2>Create new appointment</h2>
                        <Link to="/appointment"><div className="btn btn-outline-success">Click here </div></Link>
                    </div>
                </div>
            </div>

        )
    }
}
