import axios from "@/utils/axios";
import { addStudent, removeStudent, isError, removeError, addJob, addInternship } from "../reducer/studentReducer";
import { toast } from "react-toastify";


export const asyncCurrentUserStudent = ()=>async (dispatch, getstate)=>{

    try {
    
        const {data} = await axios.get("/student/");
        dispatch(addStudent(data));
    
    } catch (error) {

        dispatch(isError(error.response.data.message));
    }

}

export const asyncSignupStudent = (student) => async (dispatch, getstate) => {

    try {
        const {data} = await axios.post("student/signup/", student);
        dispatch(asyncCurrentUserStudent());


        console.log("signup route", data);
        
    } catch (error) {
        toast.error(error.response.data.message);

        dispatch(isError(error.response.data.message));
    }
    
}



export const asyncSigninStudent = (student) => async (dispatch, getstate) => {

    try {
        const  {data}  = await axios.post("/student/signin", student);
        console.log(data);
        dispatch(asyncCurrentUserStudent());


    } catch (error) {
        toast.error(error.response.data.message);
        dispatch(isError(error.response.data.message))
    }

}

export const asyncSignoutStudent = () => async (dispatch, getstate) => {

    try {
        const  data  = await axios.get("/student/signout");
        dispatch(removeStudent());

    } catch (error) {
        toast.error(error.response.data.message);

        dispatch(isError(error.response.data.message));
    }

}

export const asyncUpdateStudent = (update) => async (dispatch, getstate) => {

    try {
        const {_id} = getstate().studentReducer.student;
        const  data  = await axios.post("/student/update/" + _id, update );
        dispatch(asyncCurrentUserStudent());

    } catch (error) {
        toast.error(error.response.data.message);

        dispatch(isError(error.response.data.message));
    }

}

export const asyncAvatarStudent = (avatar) => async (dispatch, getstate) => {

    try {
        const {_id} = getstate().studentReducer.student;
        const  data  = await axios.post("/student/avatar/" + _id, avatar );
        dispatch(asyncCurrentUserStudent());

    } catch (error) {
        
        // toast.error(error.response.data.message);

        dispatch(isError(error.response.data.message));
    }

}

export const asyncSendMailStudent = (student) => async (dispatch, getstate) => {

    try {
        const  {data}  = await axios.post("/student/send-mail/" , student);
        console.log(data);
        dispatch(asyncCurrentUserStudent());
        
    } catch (error) {
        // toast.error(error.response.data.message);
        dispatch(isError(error.response.data.message));
    }

}

export const asyncForgotPasswordStudent = (changepassword) => async (dispatch, getstate) => {

    try {

        const  {data}  = await axios.post("/student/forgot-password/" , changepassword);
        toast.success(data.msg);
        dispatch(asyncCurrentUserStudent());

    } catch (error) {
        toast.error(error.response.data.message);
        dispatch(isError(error.response.data.message));
    }

}

export const asyncResetPasswordStudent = (changepassword) => async (dispatch, getstate) => {

    try {

        const  {data}  = await axios.post("/student/reset-password/" , changepassword);
        toast.success(data.msg);
        dispatch(asyncCurrentUserStudent());

    } catch (error) {
        toast.error(error.response.data.message);
        dispatch(isError(error.response.data.message));
    }

}



export const asyncReadAllJobsStudent = () => async (dispatch, getstate) => {

    try {

        const  {data}  = await axios.get("/student/all/jobs");
        console.log(data.alljobs, "alljobs");
        dispatch(addJob(data.alljobs));
        dispatch(asyncCurrentUserStudent());

    } catch (error) {
        console.log(error);
        dispatch(isError(error.response.data.message));
    }

}

export const asyncReadAllInternshipsStudent = () => async (dispatch, getstate) => {

    try {

        const  {data}  = await axios.get("/student/all/internships");
        console.log(data.allintenship, "allintern");
        dispatch(addJob(data.allintenship));
        dispatch(asyncCurrentUserStudent());

    } catch (error) {
        console.log(error);
        dispatch(isError(error.response.data.message));
    }

}

export const asyncApplyInternshipsStudent = (internshipid) => async (dispatch, getstate) => {

    try {

        const  {data}  = await axios.post("/student/apply/internship/" + internshipid, );
        console.log(data, "intership applied");
        dispatch(asyncCurrentUserStudent());

    } catch (error) {
        console.log(error);
        dispatch(isError(error.response.data.message));
    }

}

