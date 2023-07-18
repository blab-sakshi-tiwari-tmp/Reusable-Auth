"use client"
import React from 'react'
import { useState ,useEffect} from 'react'
import { useRouter } from "next/navigation"
 const Page = () => {
  const router=useRouter()
  useEffect(() => {
    router.push('/login')
  }, [])
  

  return (
    <div></div>
  )
}
export default Page
