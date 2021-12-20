import { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";
import Image from "next/image";
import { motion } from "framer-motion";

const MINS_DURATION = 15000;

function Messages() {
  const {user} = useMoralis();
  const endOfMessangesRef = useRef(null);
  const { data } = useMoralisQuery(
    "Messages",
    (query) => query.ascending("createdAt").greaterThan('createdAt', new Date(Date.now() - 1000 * 60 * MINS_DURATION)),
    [],
    {
      live: true,
    }
  );

  return (
    <div className="pb-56">
      <div className="space-y-10 p-4">
        {data.map(message => (
          <Message key={message.id} message={message}/>
        ))}
      </div>
      <div className="flex justify-center">
        <SendMessage endOfMessangesRef={endOfMessangesRef}/>
      </div>
      <motion.div 
        ref={endOfMessangesRef} 
        className="text-center text-gray-400 mt-5"
        initial={{
          opacity: 0,
          x: 100
        }}
        animate={{
          opacity: 1,
          x: 0
        }}
        transition={{type: 'spring', duration: 1.5}}
        >
        <p>You're up to date {user?.getUsername()}!</p>
      </motion.div>
    </div>
  )
}

export default Messages