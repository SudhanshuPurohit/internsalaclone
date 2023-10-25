"use client"
import React from 'react'
import { store } from '@/store/store'
import { Provider } from 'react-redux'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Wraper = ({ children }) => {
  return (

    <div>
      <Provider store={store}>
      <ToastContainer />
        {children}
      </Provider>
    </div>
  )
}

export default Wraper;