"use client"
import { asyncSigninStudent } from '@/store/actions/studentActions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { render } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux'

const page = () => {
  const dispatch = useDispatch();

  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.studentReducer);

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/student/auth");
    }
  }, [isAuthenticated]);



  const signinHandler = (e) => {
    e.preventDefault()
    const newstudent = {
      email: e.target.emailaddrs.value,
      password: e.target.password.value,
    }

    

    dispatch(asyncSigninStudent(newstudent));
  }


  return (
    <div className='container d-flex gap-3 flex-column mt-5 '>
      <h3>SigIn</h3>
      <form onSubmit={signinHandler} className=' d-flex gap-3 flex-column'>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input required type="email" name='emailaddrs' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input required type="password" name='password' className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
       
        <button type="submit" className="btn btn-outline-primary">Submit</button>
      </form>

      <Link href="/student/forgot">Forgot Password?</Link>


    </div>
  )
}

export default page