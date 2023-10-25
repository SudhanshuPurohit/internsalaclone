"use client"
import { asyncApplyInternshipsStudent } from '@/store/actions/studentActions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const detail = (props) => {

    const { internships, student } = useSelector((state) => state.studentReducer); 
    const dispatch = useDispatch();
    const router = useRouter();
    let indexInternship = null;
  

    const applyInternshipHandler = ()=>{
        dispatch(asyncApplyInternshipsStudent(props.params.detail));
        router.push("/student/auth/detailInternship")
    }

    if(internships){
        indexInternship = internships.filter((elem) => elem._id == props.params.detail)[0];
        console.log(indexInternship)
    }

    useEffect(()=>{

    },[student])

    return (
        <div className='container mt-5'>
             <h3>{(indexInternship && indexInternship.title)} Internship Detail</h3>
            {internships && 
            <div className="card ">
         
            <div className="card-body ">
             <div className='card-title p-3 d-flex  w-100 justify-content-between align-items-center'>

              <h3 > {(indexInternship && indexInternship.title)}</h3>
              <img src={(indexInternship && indexInternship.employe.organizationlogo.url)} alt="" />
             </div>
              <p className="card-text p-1">Skills: {(indexInternship && indexInternship.skills) } , Duration: {(indexInternship && indexInternship.duration)}</p>
              <p className="card-text p-1">Perks: {(indexInternship && indexInternship.perks) } , Internshiptype: {(indexInternship && indexInternship.internshiptype)}</p>
              <p className="card-text p-1">Responsiblity: {(indexInternship && indexInternship.responsiblity) } , Internshiptype: {(indexInternship && indexInternship.internshiptype)}</p>
              {student && ((indexInternship && !indexInternship.students.includes(student._id))? <Link className="btn btn-outline-primary" onClick={applyInternshipHandler} href="">Apply</Link>: <h5 className='btn btn-primary disabled'>Already Applied</h5>)}
            </div>
            
          </div>
            
            
            }
            
        </div>
    )
}

export default detail