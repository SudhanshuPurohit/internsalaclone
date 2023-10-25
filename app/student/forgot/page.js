"use client"
import { asyncSendMailStudent } from '@/store/actions/studentActions'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'
import { useDispatch } from 'react-redux';

const page = () => {

    const dispatch = useDispatch();

    const route = useRouter();
    const forgotPasswordHandler = (e) => {
        e.preventDefault();
        const student = {
            email: e.target.emailaddrs.value
        }
        console.log(student);
        dispatch(asyncSendMailStudent(student));
        route.push("/student/forgot/sendmail");
    }

    return (


        <div className='container d-flex gap-3 flex-column mt-5 '>
            <h3>Fogot Password</h3>
            <form onSubmit={forgotPasswordHandler} className=' d-flex gap-3 flex-column'>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input required type="email" name='emailaddrs' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <button type="submit" className="btn btn-outline-primary">Send Mail</button>
                {/* <Link onClick={forgotPasswordHandler} href="/student/forgot/sendmail" className='btn btn-danger'>Send Mail</Link> */}

            </form>



        </div>
    )
}

export default page