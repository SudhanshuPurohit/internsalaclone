import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    employe: null,
    errors:[],
    isAuthenticated: false,
    jobs: null,
    internships: null,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   addemploye: (state, action)=>{
    state.employe = {...action.payload};
    state.isAuthenticated = true;
   },
   addInternship: (state, action)=>{
    state.internships = [...action.payload];
   },
   addJob: (state, action)=>{
    state.internships = [...action.payload];
   },
   removeemploye: (state, action)=>{
    state.employe = null;
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

export const { addemploye,addInternship,addJob, removeError, isError, removeemploye} = counterSlice.actions

export default counterSlice.reducer;




