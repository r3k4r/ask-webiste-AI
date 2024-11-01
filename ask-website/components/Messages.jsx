'use client'

import { MessageSquare } from "lucide-react"
import AsingleMessage from "./Message"
import { useEffect, useRef } from "react";


const Messages = ({messages}) => {

  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className='flex max-h-[calc(100vh-3.5rem-7rem)] flex-1 flex-col overflow-y-auto'>
        {
            messages.length ? messages.map((message, index)=>{
                return(
                <AsingleMessage key={index} content={message.content} isUserMessage={message.role === "user"} />
                )
            }) 
            :
             (
                <div className='flex-1 flex flex-col items-center justify-center gap-2'>
                    <MessageSquare className="size-8 text-blue-500"/>
                    <h3 className="font-semibold text-xl text-white">You're all set! </h3>
                    <p className="text-zinc-500 text-sm">Ask your first question to get started.</p>
                </div>
             )
        }
        <div ref={messagesEndRef} />
    </div>
  )
}

export default Messages