"use client"
import { asyncAvatarStudent, asyncSendMailStudent, asyncUpdateStudent } from '@/store/actions/studentActions';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const profile = () => {



    const dispatch = useDispatch();
    const updateStudentHandler = () => {
        const updateStudent = {
            firstname: "akshat",
            lastname: "purohitt"
        }
        dispatch(asyncUpdateStudent(updateStudent));
    }




    const { student } = useSelector((state) => state.studentReducer);

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    useEffect(() => {

        const avatarSubmitHandler = (e) => {
            e.preventDefault();
            const formdata = new FormData(element3);
            formdata.set("avatar", element3.avatar.files[0]);

            dispatch(asyncAvatarStudent(formdata));
        }


        const handleClick = event => {

            element2.click();
        };


        const element1 = ref1.current;

        element1.addEventListener('click', handleClick);

        const element2 = ref2.current;

        element2.addEventListener('change', avatarSubmitHandler);

        const element3 = ref3.current;

        element3.addEventListener('change', avatarSubmitHandler);


    }, []);




    return (
        <div className='container mt-5'>

            <h2>{(student && "Hello, " + student.firstname[0].toUpperCase() + student.firstname.slice(1) + "! 👌")}</h2>


            <form ref={ref3} encType='multipart/form-data'>

                <input ref={ref2} type="file" name="avatar" id="avatarstudent" style={{ display: "none" }} />

            </form>

            {student &&
                <div className="card mb-3" style={{ maxWidth: "100%" }}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img style={{ cursor: "pointer" }} className='' ref={ref1} name="image" id='' width={200} height={200} src={(student) ? student.avatar.url : ""} alt="" />

                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{student.firstname[0].toUpperCase() + student.firstname.slice(1)} {student.lastname[0].toUpperCase() + student.lastname.slice(1)}</h5>
                                <p className="card-text">Email: {student.email}</p>
                                <p className="card-text">Contact : +91-{student.contact}</p>
                                <p className="card-text">Gender : {student.gender[0].toUpperCase() + student.gender.slice(1)} | City : {student.city[0].toUpperCase() + student.city.slice(1)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }

            <hr />
            {/* _________________________________________________________________________update student--------------------------- */}
            <button className='btn btn-primary border' onClick={updateStudentHandler}>Edit Profile</button>
            <Link className='btn btn-primary border' href="/student/auth/profile/resetpassword">Reset Password</Link>

        </div>
    );
}

export default profile;