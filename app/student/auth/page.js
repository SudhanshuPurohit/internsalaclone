"use client"
import { asyncReadAllInternshipsStudent, asyncReadAllJobsStudent } from '@/store/actions/studentActions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const studentAuthPage = () => {

  const router = useRouter();
  const dispatch = useDispatch();

  const { student, jobs, internships } = useSelector((state) => state.studentReducer);

  useEffect(() => {
    dispatch(asyncReadAllJobsStudent());
    dispatch(asyncReadAllInternshipsStudent());
  }, []);




  return (
    <div className='container mt-5'>

      <h2 className='mb-1'>{(student && "Hello, " + student.firstname[0].toUpperCase() + student.firstname.slice(1) + "! 👌")}</h2>
      <h3 className='mt-3 mb-5'>Explore Interships | Jobs Personalised For You </h3>

      {(internships && <div id='allInternshipToBeAppliend' className=''>



        {(internships && ((internships.length != 0) ? internships.map((elem, index) =>




          <div className="card" key={elem._id}>
            <h5 className="card-header">Internship</h5>
            <div className="card-body">
              <h5 className="card-title">{elem.title}
              </h5>
              <p className="card-text">Skills: {elem.skills}, Duration: {elem.duration}</p>
              <p className="card-text"></p>
              <Link href={"/student/auth/detailInternship/" + `${elem._id}`} className="btn btn-primary">View Details </Link>
            </div>
          </div>



        )
          : "no internships"))}


      </div >)}

      {(jobs && <div id='allJobsToBeAppliend' className=''>



        {(jobs && ((jobs.length != 0) ? jobs.map((elem, index) =>




          <div className="card" key={elem._id}>
            <h5 className="card-header">Internship</h5>
            <div className="card-body">
              <h5 className="card-title">{elem.title}
              </h5>
              <p className="card-text">Skills: {elem.skills}, JobType: {elem.jobtype}</p>
              <p className="card-text"></p>
              <Link href={"/student/auth/detailInternship/" + `${elem._id}`} className="btn btn-primary">View Details </Link>
            </div>
          </div>

        )
          : "no internships"))}


      </div >)}

    


    </div >
  )
}

export default studentAuthPage;