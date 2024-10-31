'use client'

import { useChat } from "ai/react"
import Messages from "./Messages"
import ChatInput from "./ChatInput"

const CharWrapper = ({sessionId, initialMessages}) => {

    const { messages, handleInputChange, input, handleSubmit, setInput } = useChat({
        api : '/api/chat-stream',
        body : {
            sessionId : sessionId
        },
        initialMessages
    })
    
  return (
    <div className='relative min-h-full bg-zinc-900 flex flex-col justify-between gap-2 divide-y divide-zinc-700 '>
        <div className='flex-1 flex flex-col text-black bg-zinc-800 justify-between'>
            <Messages messages={messages} />
        </div>

        <ChatInput handleInputChange={handleInputChange} input={input} handleSubmit={handleSubmit} setInput={setInput}/>
    </div>
  )
}

export default CharWrapper