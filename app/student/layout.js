"use client"
import Footer from '@/components/Footer';
import NavigationforStudent from '@/components/NavigationforStudent';
import { asyncCurrentUserStudent, asyncSignoutStudent, asynccurrentstudent } from '@/store/actions/studentActions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


const layout = ({ children }) => {

  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.studentReducer);
  useEffect(() => {
    dispatch(asyncCurrentUserStudent());
    if (isAuthenticated) {
      router.push("/student/auth");
    }
  }, [isAuthenticated]);



  return (
    <div>
      <NavigationforStudent />
      {children}
      {/* <Footer></Footer> */}
      </div>
  )
}

export default layout;