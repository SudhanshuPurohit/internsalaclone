"use client"
import Footer from '@/components/Footer';
import Navigationforemploye from '@/components/Navigationforemploye';
import { asyncCurrentUseremploye, asyncSignoutemploye, asynccurrentemploye } from '@/store/actions/employeActions';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


const layout = ({ children }) => {

  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.employeReducer);
  useEffect(() => {
    dispatch(asyncCurrentUseremploye());
    if (isAuthenticated) {
      router.push("/employe/auth");
    }
  }, [isAuthenticated]);



  return (
    <div>
      <Navigationforemploye />
      {children}
      {/* <Footer></Footer> */}
      </div>
  )
}

export default layout;