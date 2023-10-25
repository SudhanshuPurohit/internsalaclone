"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const studentAuthPage = () => {

  const router = useRouter();

  const { student } = useSelector((state) => state.studentReducer);


  useEffect(() => {

  }, []);




  return (
    <div className='container mt-5'>
      <h2 className='mb-1'>{(student && "Hello, " + student.firstname[0].toUpperCase() + student.firstname.slice(1) + "! 👌")}</h2>
      <h3 className='mt-3 mb-5'>Explore Interships | Jobs Applied </h3>

      {(student && <div id='internshipApplied' className=''>


        {(student && student.interships.map((elem) =>


          <div className="card" key={elem._id}>
            <h5 className="card-header">Internship</h5>
            <div className="card-body">
              <h5 className="card-title">{elem.title}
              </h5>
              <p className="card-text">Skills: {elem.skills}, Duration: {elem.duration}</p>
              <Link href={"/student/auth/detailInternship/" + `${elem._id}`} className="btn btn-primary">View Details </Link>
            </div>
          </div>
        ))}
      </div>

      )}




      {(student && <div id='jobApplied' className=''>

  {(student && student.jobs.map((elem) =>


          <div className="card" key={elem._id}>
            <h5 className="card-header">Job</h5>
            <div className="card-body">
              <h5 className="card-title">{elem.title}
              </h5>
              <p className="card-text">Skills: {elem.skills}, JobType: {elem.jobtype}</p>
              <Link href={"/student/auth/detailInternship/" + `${elem._id}`} className="btn btn-primary " >View Details </Link>
            </div>
          </div>
        ))}
     

      </div>)}


    </div>
  )
}

export default studentAuthPage;