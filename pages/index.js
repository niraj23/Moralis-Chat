import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import Head from 'next/head';
import Login from '../components/Login';
import { useMoralis } from 'react-moralis'
import Header from '../components/Header';
import Messages from '../components/Messages';


export default function Home() {
  const [modal, setModal] = useState(false);
  const { isAuthenticated } = useMoralis();

  useEffect(() => {
    if (!isAuthenticated) return;

    toast.success("You have entered the Metaverse!");
  }, [isAuthenticated]);

  if (!isAuthenticated) return <Login setModal={setModal} modal={modal} />;

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-t from-indigo-900 to-fuchsia-600 overflow-hidden">
      <Head>
        <title>Metaverse Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <Messages />
      </div>
    </div>
  )
}

