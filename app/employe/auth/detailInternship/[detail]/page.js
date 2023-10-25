"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const detail = (props) => {

    const { employe } = useSelector((state) => state.employeReducer); 
    const dispatch = useDispatch();
    const router = useRouter();
    let indexInternship = null;


    if(employe){
        indexInternship = employe.internships.filter((elem) => elem._id == props.params.detail)[0];
        console.log(indexInternship)
    }

    useEffect(()=>{

    },[employe])

    return (
        <div className='container mt-5'>
             <h3>{(indexInternship && indexInternship.title)} Internship Detail</h3>
            {employe && 
            <div className="card ">
         
            <div className="card-body ">
             <div className='card-title p-3 d-flex  w-100 justify-content-between align-items-center'>

              <h3 > {(indexInternship && indexInternship.title)}</h3>
              <img src={(indexInternship && employe.organizationlogo.url)} alt="" />
             </div>
              <p className="card-text p-2"><b>Responsiblity</b>: {(indexInternship && indexInternship.responsiblity) }</p>
              <p className="card-text p-2"><b>Skills</b>:  {(indexInternship && indexInternship.skills) } </p>
              <p className="card-text p-2"><b>Duration</b>: {(indexInternship && indexInternship.duration)} </p>
              <p className="card-text p-2"><b>Internshiptype</b>: {(indexInternship && indexInternship.internshiptype)}</p>
              <p className="card-text p-2"><b>Stipend</b> : {(indexInternship && indexInternship.stipend.status)}</p>
              <p className="card-text p-2"><b>Stipend</b> : {(indexInternship && indexInternship.stipend.amount)} Rs.</p>
              <p className="card-text p-2"> <b>Perks</b>: {(indexInternship && indexInternship.perks)}</p>
              <p className="card-text p-2"><b>Opennings</b>: {(indexInternship && indexInternship.openings) }</p>
              <Link href={"/employe/auth/detailInternship/"} className="btn btn-primary m-2">Edit</Link>
              <Link href={"/employe/auth/aplicant/internshipaplicant/" + indexInternship._id } className="btn btn-primary m-2">Applicant</Link>

            </div>
            
          </div>
            
            
            }
            
        </div>
    );
}

export default detail