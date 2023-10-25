"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const employeAuthPage = () => {

  const router = useRouter();
  const dispatch = useDispatch();

  const { employe } = useSelector((state) => state.employeReducer);

  useEffect(() => {
  }, []);

  




  return (
    <div className='container mt-5'>
      <h2 className='mb-1'>{(employe && "Hello, " + employe.firstname[0].toUpperCase() + employe.firstname.slice(1) + "! 👌")}</h2>
      <h3 className='mt-3 mb-5'>Explore Interships | Jobs Created</h3>

      <div className='d-flex gap-2 m-4 justify-content-end'>
        <Link href="/employe/auth/createInternship" className="btn btn-outline-primary">Create New Internship</Link>
        <Link href="/employe/auth/createJob" className="btn btn-outline-primary">Create New Job</Link>
      </div>




      {(employe && <div id='internshipApplied' className='d-flex gap-2 flex-column'>





        {(employe && employe.internships.map((elem) =>


          <div className="card " key={elem._id}>
            <div className='p-2 d-flex justify-content-center align-items-center'>

              <div className="card-body d-flex gap-3 align-items-center justify-content-between">
                <div>

                  <h5 className="card-title">{elem.title} Internship
                  </h5>
                  <h6 className="card-text  " style={{ marginTop: "4px" }}>Skills: {elem.skills}, Duration: {elem.duration}</h6>
                </div>
                <div className=' d-flex gap-3'>

                  <Link href={"/employe/auth/detailInternship/" + `${elem._id}`} className="btn btn-primary">Details </Link>
                  <Link href={"/employe/auth/detailInternship/" + `${elem._id}`} className="btn btn-primary">Edit</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      )}




      {(employe && <div id='jobApplied' className='mt-2 d-flex gap-2 flex-column'>

        {(employe && employe.jobs.map((elem) =>


          <div className="card " key={elem._id}>
            <div className='p-2 d-flex justify-content-center align-items-center'>

              <div className="card-body d-flex gap-3 align-items-center justify-content-between">
                <div>

                  <h5 className="card-title">{elem.title} Job
                  </h5>
                  <h6 className="card-text  " style={{ marginTop: "4px" }}>Skills: {elem.skills}</h6>
                </div>
                <div className=' d-flex gap-3'>

                  <Link href={"/employe/auth/detailJob/" + `${elem._id}`} className="btn btn-primary">Details </Link>
                  <Link href={"/employe/auth/editJob/" + `${elem._id}`} className="btn btn-primary">Edit</Link>
                </div>
              </div>
            </div>
          </div>
        ))}


      </div>)}
    </div>



  )
}

export default employeAuthPage;