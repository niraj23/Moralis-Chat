import Image from "next/image";
import Link from "next/link";
import { useMoralis } from "react-moralis";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SignIn from "./SignIn";
import Part  from "../particles/Part"

const Login = ({ modal, setModal }) => {
  const { authenticate, isAuthenticating } = useMoralis();
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="bg-black relative text-white">
      <div className="flex flex-col absolute z-10 w-full items-center justify-center h-5/6 space-y-12">
      <div className="title-container text-center  py-8 xs:text-md sm:text-2xl">
      <h1 className="title-login"> Welcome to the Metaverse </h1>{" "}
    </div>

        <Image 
          src={'https://i.imgur.com/GdqcvpA.jpeg'}
          height={200}
          width={200}
          className=" object-cover rounded-full"
        />

        <motion.div 
          className="relative group"
          initial={{
            opacity: 0,
            y: -100
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{type: 'spring', duration: 2.2}}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <button onClick={authenticate} className={`bg-black relative rounded-lg p-5 font-bold text-indigo-400 group-hover:text-purple-300 transition duration-200 ${
            isAuthenticating && "animate-login-btn"
          }`}
        >
          {isAuthenticating ? "Connecting to Metaverse" : "Enter the Metaverse"}</button>
        </motion.div>

        <div className="text-white text-center">
        <p className="text-white">
            Don't have MetaMask account
            </p>
            <p className="text-white">click 👉{" "}
            <Link href="https://metamask.io/" passHref>
              <a
                className="text-orange-300 font-bold underline decoration-solid hover:text-orange-600"
                target="_blank"
              >
                Here
              </a>
            </Link>{" "}
            to create.
          </p>
          <br />
            <p
              className="font-bold hover:text-[indigo] text-sm underline  leading-3 cursor-pointer"
              onClick={() => setModal(true)}
            >
              Or sign in with email and password
            </p>
          </div>
      <AnimatePresence exitBeforeEnter>
        {modal && (
          <motion.div
            initial="from"
            animate="to"
            exit="exit"
            className="fixed top-0 bottom-0 left-0 right-0 z-40 bg-black backdrop-blur bg-opacity-50"
          >
            <SignIn
              setModal={setModal}
              isSignIn={isSignIn}
              setIsSignIn={setIsSignIn}
            />
          </motion.div>
        )}
      </AnimatePresence>        
      </div>
      <div className="w-full h-screen">
        <Part />
      </div>
    </div>
  )
}

export default Login;
