"use client"
import { asyncCurrentUserStudent, asyncSignupStudent, } from '@/store/actions/studentActions';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const page = () => {

  const dispatch = useDispatch();


  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.studentReducer);
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/student/auth");
    }
  }, [isAuthenticated]);

  const signupHandler = (e) => {
    e.preventDefault()

    const newstudent = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      contact: e.target.contact.value,
      city: e.target.city.value,
      gender: e.target.gender.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    dispatch(asyncSignupStudent(newstudent));


  }
  return (
    <div className='container d-flex flex-column gap-3' >

      <form onSubmit={signupHandler} className=' d-flex gap-3 flex-column mb-5 mt-3' id='signupform'>
      <h3>SignUp</h3>

        <div className="form-group">
          <label htmlFor="firstname">First-Name</label>
          <input required type="text" name='firstname' className="form-control" id="firstname" placeholder="FirstName" />
        </div>

        <div className="form-group">
          <label htmlFor="lastname">Last-Name</label>
          <input required type="text" className="form-control" id="lastname" name="lastname" placeholder="Lastname" />
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input required type="text" name='city' className="form-control" id="city" placeholder="City" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input required type="email" name='emailaddrs' className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input required type="password" name='password' className="form-control" id="password" placeholder="Password" />
        </div>

        <div className="form-group">
          <label htmlFor="contact">Contact</label>
          <input required type="number" name='contact' className="form-control" id="contact" placeholder="Contact" />
        </div>



        <div className="form-group d-flex align-items-center gap-3 ">

          <label htmlFor="">Gender</label>
          <div className=' d-flex align-items-center justify-content-center'>

            <div className="form-check form-check-inline d-flex align-items-center ">
              <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" value="male" />
              <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
            </div>
            <div className="form-check form-check-inline d-flex align-items-center">
              <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" value="female" />
              <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
            </div>
            <div className="form-check form-check-inline d-flex align-items-center">
              <input className="form-check-input" type="radio" name="gender" id="inlineRadio3" value="others" />
              <label className="form-check-label" htmlFor="inlineRadio3">Others</label>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-outline-primary">Submit</button>
      </form>
    </div>
  );

}

export default page;