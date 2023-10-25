"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const authLayout = ({ children }) => {
    const router = useRouter();
    const { isAuthenticated } = useSelector((state) => state.studentReducer);

    useEffect(() => {
        if (isAuthenticated) {
            router.push("/student/auth");
        }
        else {
            router.push("/student/");
        }

    }, [isAuthenticated]);
    return (
        <div>{children}</div>
    )
}

export default authLayout