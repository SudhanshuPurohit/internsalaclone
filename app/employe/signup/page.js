"use client"
import { asyncCurrentUseremploye, asyncSignupemploye, } from '@/store/actions/employeActions';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const page = () => {

  const dispatch = useDispatch();


  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.employeReducer);
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/employe/auth");
    }
  }, [isAuthenticated]);

  const signupHandler = (e) => {
    e.preventDefault()

    const newemploye = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      organizationname: e.target.orgname.value,
      contact: e.target.contact.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    dispatch(asyncSignupemploye(newemploye));


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
          <label htmlFor="orgname">Organization Name</label>
          <input required type="text" className="form-control" id="orgname" name="orgname" placeholder="Organization Name" />
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

        <button type="submit" className="btn btn-outline-primary">Submit</button>
      </form>
    </div>
  );

}

export default page;