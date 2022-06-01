import React, { useState, useEffect } from "react";

const ContactForm = (props) => {
    const initialFieldValues = {
        firstName: '',
        middleName: '',
        lastName: '',
        studentNumber: '',
        department:'',
        phoneNumber:'',
        email:''
}

    var [values, setValues] = useState(initialFieldValues)

    useEffect(() => {
        if (props.currentId === '')
            setValues({
                ...initialFieldValues
            })
        else
            setValues({
                ...props.contactObjects[props.currentId]
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.currentId, props.contactObjects])

    const handleInputChange = e => {
        var { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values)
    }

    return (
        <form autoComplete="off" onSubmit={handleFormSubmit}>
          <div className= "form-group input-group" >
              <div className="input-group-prepend" >
                  <div className="input-group-text">
                      <i className="fas fa-user"></i>
                  </div>
              </div>
              <input className="form-control" placeholder="First Name" name="firstName" 
               values={values.firstName}
               onChange={handleInputChange}
               />
               <input className="form-control" placeholder="Middle Name" name="middleName" 
               values={values.middleName}
               onChange={handleInputChange}
               />
               <input className="form-control" placeholder="Last Name" name="lastName" 
               values={values.lastName}
               onChange={handleInputChange}
               />

          </div>
          <br/>
          <div className="form-row">
            <div className= "form-group input-group" >
              <div className="input-group-prepend" >
                  <div className="input-group-text">
                  <i className="fa fa-address-card" aria-hidden="true"></i>
                  </div>
              </div>
              <input className="form-control" placeholder="Student Number" name="studentNumber" 
               values={values.studentNumber}
               onChange={handleInputChange}/>

            </div>
            </div>

            <br/>
           <div className="form-row">
             <div className= "form-group input-group" >
               <div className="input-group-prepend" >
                  <div className="input-group-text">
                  <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                  </div>
               </div>
              <input className="form-control" placeholder="Department" name="department" 
               values={values.department}
               onChange={handleInputChange}/>

             </div>
          </div>

          <br/>
           <div className="form-row">
             <div className= "form-group input-group col-md-6" >
               <div className="input-group-prepend" >
                  <div className="input-group-text">
                  <i className="fas fa-mobile-alt" aria-hidden="true"></i>
                  </div>
               </div>
              <input className="form-control" placeholder="Mobile Number" name="phoneNumber" 
               values={values.phoneNumber}
               onChange={handleInputChange}/>
               </div>

              <br/>
            
             <div className= "form-group input-group col-md-6" >
               <div className="input-group-prepend" >
                  <div className="input-group-text">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  </div>
               </div>
              <input className="form-control" placeholder="studentid@emu.edu.tr" name="email" 
               values={values.email}
               onChange={handleInputChange}/>
             </div>
             
          </div>
            <div className="form-group">
                <input type="submit" value={props.currentId === '' ? "Save" : "Update"} className="btn btn-primary btn-block" />
            </div>
        </form >
    );
}

export default ContactForm;