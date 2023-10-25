"use client"
import { asyncReadAllInternship } from '@/store/actions/employeActions';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const page = (props) => {
  const { employe } = useSelector((state) => state.employeReducer);
  const dispatch = useDispatch();
  const router = useRouter();
  let indexInternship = null;

  useEffect(() => {
    indexInternship = dispatch(asyncReadAllInternship(props.params.id));
    console.log(indexInternship);
  }, [])

  return (
    <div className='container mt-5'>

      {indexInternship ?

        indexInternship.map((elem) => <div className="card " key={elem._id}>
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
        </div>)


        : <h3>Sorry, No One Applied Yet</h3>}



    </div>
  )
}

export default page