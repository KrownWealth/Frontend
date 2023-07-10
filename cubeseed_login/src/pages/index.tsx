// import Navbar from '@/comps/Navbar'
// import ProgressBar from '@/comps/ProgressBar'
// import ServiceForm from '@/comps/forms/ServiceForm'
// import { useMultiSteps } from '@/hooks/useMultiSteps'
// import Head from 'next/head'
// import { FormEvent } from 'react'
// import homeStyles from "@/styles/home.module.scss"
// import Carousel from '@/comps/Carousel'
// import UserDetailsForm from '@/comps/forms/UserDetailsForm'

// export default function Home() {

//   const stepDivs = [
//     <ServiceForm />,
//     <UserDetailsForm />,
//     <div>three</div>,
//     <div>four</div>,
//   ]

//   const { steps, step, next, back, currentIndex, isLastStep, isFirstStep } = useMultiSteps(stepDivs)

//   console.log(`first ${isFirstStep}`, `last ${isLastStep}`)

//   function handleSubmit(event: FormEvent) {
//     event.preventDefault()
//     if (!isLastStep) return next()
//     console.log('finished')
//     // alert('submitted')
//   }

//   return (
//     <>
//       {/* <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head> */}
//       <section>
//       <Navbar />
//         <section className={homeStyles.home}>
//           <form onSubmit={handleSubmit}>
//           <ProgressBar index={currentIndex} length={steps} />
//             <section className={homeStyles.getStarted}>
//               <h2>Sign Up</h2>
//               <p>Lets get started. Which one of these best describes you?</p>
//             </section>
//             {step}
//             <p>{currentIndex + 1} / {steps.length}</p>
//             {!isLastStep ? <button type='button' onClick={next} style={{ padding: '20px' }}>next</button>
//               : <button style={{ padding: '20px' }}>submit</button>}
//             <button type='button' onClick={back} style={{ padding: '20px' }}>back</button>
//           </form>
//           <Carousel />
//         </section>
//       </section>
//     </>
//   )
// }

import React from "react";
import Navbar from "@/comps/Navbar";
import ProgressBar from "@/comps/ProgressBar";
import ServiceForm from "@/comps/forms/ServiceForm";
import Confirmation from "./Confirmation";
import { useMultiSteps } from "@/hooks/useMultiSteps";
import Head from "next/head";
import { FormEvent } from "react";
import homeStyles from "@/styles/home.module.scss";
import styles from "../styles/Login.module.scss";
import Carousel from "@/comps/Carousel";
import UserDetailsForm from "@/comps/forms/UserDetailsForm";
import Link from "next/link";

// import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default function Home() {
  const stepDivs = [
    <ServiceForm />,
    <UserDetailsForm />,
    <Confirmation />,
    //<div>three</div>,
    //<div>four</div>,
  ];

  const { steps, step, next, back, currentIndex, isLastStep, isFirstStep } =
    useMultiSteps(stepDivs);

  console.log(`first ${isFirstStep}`, `last ${isLastStep}`);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!isLastStep) return next();
    console.log("finished");
    // alert('submitted')
  }

  return (
    <>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <section>
        <Navbar />
        {/*
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/login" element={<LoginPage/>}/>
          </Routes>
    </Router>*/}
        <section className={homeStyles.home}>
          <form onSubmit={handleSubmit}>
            <ProgressBar index={currentIndex} length={steps} />
            <section className={homeStyles.getStarted}>
              <h2>Sign Up</h2>
              <p>Lets get started. Which one of these best describes you?</p>
            </section>
            {step}
            <p className={homeStyles.steps}>
              {currentIndex + 1} / {steps.length}
            </p>
            {!isLastStep ? (
              <button
                type="button"
                onClick={next}
                className={homeStyles.actionbutton}
              >
                next
              </button>
            ) : (
              <button className={homeStyles.actionbutton}>submit</button>
            )}
            <button
              type="button"
              onClick={back}
              className={homeStyles.actionbutton}
            >
              back
            </button>
          </form>
          <Carousel />
        </section>
        <div className={homeStyles.member}>
          <div>
            Already a member?{" "}
            <Link className={homeStyles.memberlink} href="/">
              Log In
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
