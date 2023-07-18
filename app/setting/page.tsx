"use client";
import { dataContext } from "@/contextapi/dataContext";
import React from "react";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import Homecomp from "@/component/Homecomp";
import { AuthWrapper } from "../../component/AuthWrapper";
import { Setting } from "@/component/Setting";
function Page() {

  

  return (
    <AuthWrapper>
      <Setting />
    </AuthWrapper>
  );
}

export default Page;
