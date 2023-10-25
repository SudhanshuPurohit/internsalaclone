"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

import "bootstrap/dist/js/bootstrap.min.js"


const Navigation = () => {

    const router = useRouter();




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

                            <li className="nav-item dropdown">
                                <a id='dropdownMenuButton1' className="nav-link dropdown-toggle text-black" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                    Internships
                                </a>
                                <ul className=" dropdown-menu" ria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">Upcoming</a></li>
                                    <li><a className="dropdown-item" href="#">Top Rated</a></li>
                                </ul>
                            </li>

                         
                            <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle text-black" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Jobs
                                </a>
                                <ul className="dropdown-menu text-black">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>


                        </ul>
                        <form className="d-flex gap-2 justify-content-center align-items-center " role="search">
                            <Link href="/student" className='btn btn-outline-primary'>Student</Link>
                            <h3 style={{color: "#333"}}>|</h3>
                            <Link href="/employe" className='btn btn-outline-primary'>Employer</Link>

                        </form>
                    </div>
                </div>
            </nav>

        </div>

    )
}

export default Navigation;