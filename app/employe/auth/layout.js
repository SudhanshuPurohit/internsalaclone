"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const authLayout = ({ children }) => {
    const router = useRouter();
    const { isAuthenticated } = useSelector((state) => state.employeReducer);

    useEffect(() => {
        if (isAuthenticated) {
            router.push("/employe/auth");
        }
        else {
            router.push("/employe/");
        }

    }, [isAuthenticated]);
    return (
        <div>{children}</div>
    )
}

export default authLayout