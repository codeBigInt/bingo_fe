'use client'
import Image from "next/image";
import OtpComponent from "./components/otp/otpcomponent";
import LandingPageNavbar from "./components/navbars/custom-navbars/LandingPageNavbar";
import RBInputDocs from "./components/input/inputDocs";
import ForgotPasswordForm from "./components/forms/forgotPasswordForm/forgotPassword";
import { ChooseAvatarField } from "./components/chooseAvatarField";
import { useState } from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7EEE7] w-full flex flex-col align-center">
      <LandingPageNavbar />
      <OtpComponent email="elliotlucky509@gmail.com" />
      <ForgotPasswordForm />
    </main>
  );
}
