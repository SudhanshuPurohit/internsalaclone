"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';



import "bootstrap/dist/js/bootstrap.min.js"
import { useDispatch, useSelector } from 'react-redux';
import { asyncCurrentUseremploye, asyncSignoutemploye } from '@/store/actions/employeActions';


const Navigationforemploye = () => {

    const dispatch = useDispatch();
    const router = useRouter();
    const { isAuthenticated } = useSelector((state) => state.employeReducer);

    useEffect(() => {
        dispatch(asyncCurrentUseremploye());
        if (isAuthenticated) {
            router.push("/employe/auth");
        }
    }, [isAuthenticated]);

    const signoutHandler = () => {
        dispatch(asyncSignoutemploye());
        router.refresh();

    }



    return (
        <div id='nav_main_div' className='d-flex w-100 justify-content-center'>

            <nav className="w-75 nav navbar navbar-expand-lg ">
                <div className="container-fluid">

                    <Link className="logo_heading" href="/"><img src="https://education.sakshi.com/sites/default/files/images/2023/03/10/internshala-1678450352.jpg" alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>



                    <div className="collapse navbar-collapse " id="navbarScroll">


                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">


                              

                        </ul>
                        <form className="d-flex gap-2 " role="search">
                        <Link href={isAuthenticated? "/employe/auth": "/employe/"} className='btn btn-outline-primary'>Jobs & Internship</Link>
                                {isAuthenticated ? <>
                                    <Link href="/employe/auth/profile" className='btn btn-outline-primary'>Profile</Link>
                                    <button className='btn btn-outline-danger ' onClick={signoutHandler}>SignOut</button>

                                </>
                                    : <>
                                        <Link href="/employe/signin" className='btn btn-outline-primary'>SignIN</Link>
                                        <Link href="/employe/signup" className='btn btn-outline-primary'>SignUP</Link>
                                    </>}

                        </form>
                    </div>
                </div>
            </nav>

        </div>

    )
}

export default Navigationforemploye;