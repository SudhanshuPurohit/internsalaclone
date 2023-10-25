"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const detail = (props) => {

    const { employe } = useSelector((state) => state.employeReducer); 
    const dispatch = useDispatch();
    const router = useRouter();
    let indexjob = null;
  


    if(employe){
        indexjob = employe.jobs.filter((elem) => elem._id == props.params.detail)[0];
        console.log(indexjob)
    }

    useEffect(()=>{

    },[employe])

    return (
        <div className='container mt-5'>
             <h3>{(indexjob && indexjob.title)} Job Detail</h3>
            {employe && 
            <div className="card ">
         
            <div className="card-body ">
             <div className='card-title p-3 d-flex  w-100 justify-content-between align-items-center'>

              <h3 > {(indexjob && indexjob.title)}</h3>
              <img src={(indexjob && employe.organizationlogo.url)} alt="" />
             </div>
              <p className="card-text p-2"><b>Skills</b>: {(indexjob && indexjob.skills) }</p>
              <p className="card-text p-2"><b>Responsiblity</b>: {(indexjob && indexjob.responsiblity) }</p>
              <p className="card-text p-2"><b>Description</b>: {(indexjob && indexjob.description) } </p>
              <p className="card-text p-2"><b>Jobtype</b>: {(indexjob && indexjob.jobtype)}</p>
              <p className="card-text p-2"><b>Salary</b> : {(indexjob && indexjob.salary)} Rs.</p>
              <p className="card-text p-2"> <b>Perks</b>: {(indexjob && indexjob.perks)}</p>
              <p className="card-text p-2"><b>Opennings</b>: {(indexjob && indexjob.openings) }</p>
              <Link href={"/employe/auth/detailjob/"} className="btn btn-primary m-2">Edit</Link>
              <Link href={"/employe/auth/detailjob/"} className="btn btn-primary m-2">Applicant</Link>

            </div>
            
          </div>
            
            
            }
            
        </div>
    );
}

export default detail