"use client"
import { asyncCreateNewInternship} from '@/store/actions/employeActions';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';


const page = () => {


    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {

    }, []);

    const createNewInternshipHandler = (e) => {
        e.preventDefault()

        const internship = {
            title: e.target.title.value,
            skills: e.target.skills.value,
            internshiptype: e.target.internshiptype.value,
            openings: e.target.openings.value,
            from: e.target.from.value,
            to: e.target.to.value,
            duration: e.target.duration.value,
            responsiblity: e.target.responsiblity.value,

            stipend: {
                status: e.target.stipendtype.value,
                amount: e.target.stipendamt.value,
            },
            perks: e.target.perks.value,
        };

        dispatch(asyncCreateNewInternship(internship));
        router.push("/employe/auth/");

    }
    return (
        <div className='container d-flex flex-column gap-3' >

            <form onSubmit={createNewInternshipHandler} className=' d-flex gap-3 flex-column mb-5 mt-3' id='signupform'>
                <h3>SignUp</h3>

                <div className="form-group">
                    <label htmlFor="title">Internship Title</label>
                    <input required type="text" name='title' className="form-control" id="title" placeholder="Internship Title" />
                </div>

                <div className="form-group">
                    <label htmlFor="skills">Skills</label>
                    <input required type="text" className="form-control" id="skills" name="skills" placeholder="Skills" />
                </div>

                <div className="form-group">
                    <label htmlFor="openings">Total Openings</label>
                    <input required type="text" className="form-control" id="openings" name="openings" placeholder="Total Openings" />
                </div>
                <div className="form-group d-flex align-items-center gap-3 ">

                    <label htmlFor="">Internship Type</label>
                    <div className=' d-flex align-items-center justify-content-center'>

                        <div className="form-check form-check-inline d-flex align-items-center ">
                            <input className="form-check-input" type="radio" name="internshiptype" id="inlineRadio1" value="In office" />
                            <label className="form-check-label" htmlFor="inlineRadio1">In office</label>
                        </div>
                        <div className="form-check form-check-inline d-flex align-items-center">
                            <input className="form-check-input" type="radio" name="internshiptype" id="inlineRadio2" value="Remote" />
                            <label className="form-check-label" htmlFor="inlineRadio2">Remote</label>
                        </div>

                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="from">Start From</label>
                    <input required type="text" name='from' className="form-control" id="from" aria-describedby="emailHelp" placeholder="Start From" />
                </div>

                <div className="form-group">
                    <label htmlFor="to">End Till</label>
                    <input required type="text" name='to' className="form-control" id="to" placeholder="End Till" />
                </div>

                <div className="form-group">
                    <label htmlFor="duration">Duration</label>
                    <input required type="text" name='duration' className="form-control" id="duration" placeholder="Internship Duration" />
                </div>

                <div className="form-group">
                    <label htmlFor="responsiblity">Responsiblity</label>
                    <input required type="text" name='responsiblity' className="form-control" id="responsiblity" placeholder="Responsiblity" />
                </div>

                <div className="form-group">
                    <label htmlFor="perks">Perks</label>
                    <input required type="text" name='perks' className="form-control" id="perks" placeholder="Perks" />
                </div>

                <div className="form-group">
                    <label htmlFor="stipendamt">Stipend Amount</label>
                    <input required type="text" name='stipendamt' className="form-control" id="stipendamt" placeholder="Stipend Amount" />
                </div>

                <div className="form-group d-flex align-items-center gap-3 ">

                    <label htmlFor="">Stipend Type</label>
                    <div className=' d-flex align-items-center justify-content-center'>

                        <div className="form-check form-check-inline d-flex align-items-center ">
                            <input className="form-check-input" type="radio" name="stipendtype" id="inlineRadio1" value="Fixed" />
                            <label className="form-check-label" htmlFor="inlineRadio1">Fixed</label>
                        </div>
                        <div className="form-check form-check-inline d-flex align-items-center">
                            <input className="form-check-input" type="radio" name="stipendtype" id="inlineRadio2" value="Negotiable" />
                            <label className="form-check-label" htmlFor="inlineRadio2">Negotiable</label>
                        </div>
                        <div className="form-check form-check-inline d-flex align-items-center">
                            <input className="form-check-input" type="radio" name="stipendtype" id="inlineRadio3" value="Performace based" />
                            <label className="form-check-label" htmlFor="inlineRadio3">Performace Based</label>
                        </div>
                        <div className="form-check form-check-inline d-flex align-items-center">
                            <input className="form-check-input" type="radio" name="stipendtype" id="inlineRadio3" value="Unpaid" />
                            <label className="form-check-label" htmlFor="inlineRadio3">Unpaid</label>
                        </div>
                    </div>
                </div>


                <button type="submit" className="btn btn-outline-primary">Submit</button>
            </form>
        </div>
    )
}

export default page