"use client"
import { dataContext } from '@/contextapi/dataContext';
import React from 'react'
import { useContext } from "react";
import Homecomp from '@/component/Homecomp';
import { AuthWrapper } from '../../component/AuthWrapper';
function Page() {
    return (
        <AuthWrapper>

        <Homecomp />
        
        </AuthWrapper>
    )
}

export default Page
