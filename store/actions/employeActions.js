import axios from "@/utils/axios";
import { addemploye, removeemploye, isError, removeError, addJob, addInternship } from "../reducer/employeReducer";
import { toast } from "react-toastify";


export const asyncCurrentUseremploye = ()=>async (dispatch, getstate)=>{

    try {
    
        const {data} = await axios.get("/employe/current");
        dispatch(addemploye(data));
    
    } catch (error) {

        dispatch(isError(error.response.data.message));
    }

}

export const asyncSignupemploye = (employe) => async (dispatch, getstate) => {

    try {
        const {data} = await axios.post("employe/signup/", employe);
        dispatch(asyncCurrentUseremploye());


        console.log("signup route", data);
        
    } catch (error) {
        toast.error(error.response.data.message);

        dispatch(isError(error.response.data.message));
    }
    
}



export const asyncSigninemploye = (employe) => async (dispatch, getstate) => {

    try {
        const  {data}  = await axios.post("/employe/signin/", employe);
        console.log(data);
        dispatch(asyncCurrentUseremploye());


    } catch (error) {
        toast.error(error.response.data.message);
        dispatch(isError(error.response.data.message))
    }

}


export const asyncSignoutemploye = () => async (dispatch, getstate) => {

    try {
        const  data  = await axios.get("/employe/signout");
        dispatch(removeemploye());

    } catch (error) {
        toast.error(error.response.data.message);

        dispatch(isError(error.response.data.message));
    }

}

export const asyncUpdateemploye = (update) => async (dispatch, getstate) => {

    try {
        const {_id} = getstate().employeReducer.employe;
        const  data  = await axios.post("/employe/update/" + _id, update );
        dispatch(asyncCurrentUseremploye());

    } catch (error) {
        toast.error(error.response.data.message);

        dispatch(isError(error.response.data.message));
    }

}

export const asyncAvataremploye = (avatar) => async (dispatch, getstate) => {

    try {
        const {_id} = getstate().employeReducer.employe;
        const  data  = await axios.post("/employe/avatar/" + _id, avatar );
        dispatch(asyncCurrentUseremploye());

    } catch (error) {
        
        toast.error(error.response.data.message);

        dispatch(isError(error.response.data.message));
    }

}

export const asyncSendMailemploye = (employe) => async (dispatch, getstate) => {

    try {
        const  {data}  = await axios.post("/employe/send-mail/" , employe);
        console.log(data);
        dispatch(asyncCurrentUseremploye());
        
    } catch (error) {
        // toast.error(error.response.data.message);
        dispatch(isError(error.response.data.message));
    }

}

export const asyncForgotPasswordemploye = (changepassword) => async (dispatch, getstate) => {

    try {

        const  {data}  = await axios.post("/employe/forgot-password/" , changepassword);
        toast.success(data.msg);
        dispatch(asyncCurrentUseremploye());

    } catch (error) {
        toast.error(error.response.data.message);
        dispatch(isError(error.response.data.message));
    }

}

export const asyncResetPasswordemploye = (changepassword) => async (dispatch, getstate) => {

    try {

        const  {data}  = await axios.post("/employe/reset-password/" , changepassword);
        toast.success(data.msg);
        dispatch(asyncCurrentUseremploye());

    } catch (error) {
        toast.error(error.response.data.message);
        dispatch(isError(error.response.data.message));
    }

}

export const asyncCreateNewInternship= (internship) => async (dispatch, getstate) => {

    try {

        const  {data}  = await axios.post("/employe/internship/create" , internship);
        toast.success(data.msg);
        dispatch(asyncCurrentUseremploye());

    } catch (error) {
        toast.error(error.response.data.message);
        dispatch(isError(error.response.data.message));
    }

}

export const asyncCreateNewJob= (internship) => async (dispatch, getstate) => {

    try {

        const  {data}  = await axios.post("/employe/job/create" , internship);
        toast.success(data.msg);
        dispatch(asyncCurrentUseremploye());

    } catch (error) {
        toast.error(error.response.data.message);
        dispatch(isError(error.response.data.message));
    }

}

export const asyncUpdateJob= (job, id) => async (dispatch, getstate) => {

    try {

        const  {data}  = await axios.post("/employe/job/update/"+ id , job);
        toast.success(data.msg);
        dispatch(asyncCurrentUseremploye());

    } catch (error) {
        toast.error(error.response.data.message);
        dispatch(isError(error.response.data.message));
    }

}

export const asyncUpdateInternship= (internship, id) => async (dispatch, getstate) => {

    try {

        const  {data}  = await axios.post("/employe/job/update/" + id, internship);
        toast.success(data.msg);
        dispatch(asyncCurrentUseremploye());

    } catch (error) {
        toast.error(error.response.data.message);
        dispatch(isError(error.response.data.message));
    }

}

export const asyncReadAllInternship= (internship) => async (dispatch, getstate) => {

    try {

        const  {data}  = await axios.get("/employe/internship/reademploye" , internship);
        toast.success(data.msg);
        dispatch(asyncCurrentUseremploye());
        return data;

    } catch (error) {
        toast.error(error.response.data.message);
        dispatch(isError(error.response.data.message));
    }

}


