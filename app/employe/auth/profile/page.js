"use client"
import { asyncAvataremploye, asyncSendMailemploye, asyncUpdateemploye } from '@/store/actions/employeActions';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const profile = () => {



    const dispatch = useDispatch();
    const updateemployeHandler = () => {
        const updateemploye = {
            firstname: "akshat",
            lastname: "purohitt"
        }
        dispatch(asyncUpdateemploye(updateemploye));
    }


    const { employe } = useSelector((state) => state.employeReducer);

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    useEffect(() => {

        const avatarSubmitHandler = (e) => {
            e.preventDefault();
            const formdata = new FormData(element3);
            formdata.set("avatar", element3.avatar.files[0]);

            dispatch(asyncAvataremploye(formdata));
        }


        const handleClick = event => {

            element2.click();
        };

        if(ref1 ==null){

            const element1 = ref1.current;
            
            element1.addEventListener('click', handleClick);
        }

        const element2 = ref2.current;

        element2.addEventListener('change', avatarSubmitHandler);

        const element3 = ref3.current;

        element3.addEventListener('change', avatarSubmitHandler);


    }, []);




    return (
        <div className='container mt-5'>

            <h2>{(employe && "Hello, " + employe.firstname[0].toUpperCase() + employe.firstname.slice(1) + "! 👌")}</h2>


            <form ref={ref3} encType='multipart/form-data'>

                <input ref={ref2} type="file" name="avatar" id="avataremploye" style={{ display: "none" }} />

            </form>

            {employe &&
                <div className="card mb-3" style={{ maxWidth: "100%" }}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img style={{ cursor: "pointer" }} className='' ref={ref1} name="image" id='' width={200} height={200} src={(employe) ? employe.organizationlogo.url : ""} alt="" />

                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title">Organization Name: {employe.organizationname[0].toUpperCase() + employe.organizationname.slice(1)} </h2>
                                <h5 className="card-title">Employer Name: {employe.firstname[0].toUpperCase() + employe.firstname.slice(1)} {employe.lastname[0].toUpperCase() + employe.lastname.slice(1)}</h5>
                                <p className="card-text">Email: {employe.email}</p>
                                <p className="card-text">Contact : +91-{employe.contact}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }

            <hr />
            {/* _________________________________________________________________________update employe--------------------------- */}
            <button className='btn btn-primary border' onClick={updateemployeHandler}>Edit Profile</button>



        </div>
    );
}

export default profile;