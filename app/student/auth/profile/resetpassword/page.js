"use client"
import { asyncResetPasswordStudent } from '@/store/actions/studentActions';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useDispatch } from 'react-redux'

const page = () => {

    const dispatch = useDispatch();
    const router = useRouter();
    const resetPasswordHandler = (e)=>{

        e.preventDefault();

        const data = {
            password: e.target.password.value
        }

        dispatch(asyncResetPasswordStudent(data));
        router.push("/student/signin")

    }
  return (
    <div className='container d-flex gap-3 flex-column mt-5 '>
    <h3> New Password</h3>
    <form onSubmit={resetPasswordHandler} className=' d-flex gap-3 flex-column'>
        <div className="form-group">
            <label htmlFor="password">New Password</label>
            <input required type="text" name='password' className="form-control" id="password" aria-describedby="emailHelp" placeholder="New Password" />
        </div>
        <button type="submit" className="btn btn-outline-primary">Send Mail</button>
        {/* <Link onClick={forgotPasswordHandler} href="/student/forgot/sendmail" className='btn btn-danger'>Send Mail</Link> */}

    </form>



</div>
  )
}

export default page