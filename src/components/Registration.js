import React, { useState, useEffect } from "react";
import Registrationform from "./Registrationform";
import firebaseDb from "../firebase";

const  Registration = () => {

    var [registrationObjects, setRegistrationObjects] = useState({})
    var [currentId, setCurrentId] = useState('')

    useEffect(() => {
        firebaseDb.child('registration').on('value', snapshot => {
            if (snapshot.val() != null)
            setRegistrationObjects({
                    ...snapshot.val()
                })
            else
            setRegistrationObjects({})

        })
    }, [])// similar to componentDidMount

    const addOrEdit = obj => {
        if (currentId == '')
            firebaseDb.child('registration').push(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )
        else
            firebaseDb.child(`registration/${currentId}`).set(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )
    }

    const onDelete = key => {
        if (window.confirm('Are you sure to delete this record?')) {
            debugger
            firebaseDb.child(`registration/${key}`).remove(
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )
        }
    }
    return ( 
        <>
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 text-center">Student Enrollment</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-md-5">
                <Registrationform {...({ addOrEdit, currentId, registrationObjects })} />
            </div>
            <div className="col-md-7">
                <table className="table table-borderless table-stripped">
                    <thead className="thead-light">
                        <tr>
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Last Name</th>
                            <th>Student Number</th>
                            <th>Department</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(registrationObjects).map(id => {
                                return <tr key={id}>
                                    <td>{registrationObjects[id].firstName}</td>
                                    <td>{registrationObjects[id].middleName}</td>
                                    <td>{registrationObjects[id].lastName}</td>
                                    <td>{registrationObjects[id].studentNumber}</td>
                                    <td>{registrationObjects[id].department}</td>
                                    <td>{registrationObjects[id].phoneNumber}</td>
                                    <td>{registrationObjects[id].email}</td>
                                    <td>
                                        <a className="btn text-primary" onClick={() => { setCurrentId(id) }}>
                                            <i className="fas fa-pencil-alt"></i>
                                        </a>
                                        <a className="btn text-danger" onClick={() => { onDelete(id) }}>
                                            <i className="far fa-trash-alt"></i>
                                        </a>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>

            </div>
        </div>
    </>
     );
}
 
export default Registration;