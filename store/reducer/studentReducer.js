import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    student: null,
    errors:[],
    isAuthenticated: false,
    jobs: null,
    internships: null,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   addStudent: (state, action)=>{
    state.student = {...action.payload};
    state.isAuthenticated = true;
   },
   addInternship: (state, action)=>{
    state.internships = [...action.payload];
   },
   addJob: (state, action)=>{
    state.internships = [...action.payload];
   },
   removeStudent: (state, action)=>{
    state.student = null;
    state.isAuthenticated = false;
    state.errors = [];
   },
   isError: (state, action)=>{
    state.errors = [ ...state.errors, action.payload];
   },
   removeError: (state, action)=>{
    state.errors = [];
   }

  },
})

export const { addStudent,addInternship,addJob, removeError, isError, removeStudent} = counterSlice.actions

export default counterSlice.reducer;




