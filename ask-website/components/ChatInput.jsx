 'use client'

import { Button, Textarea } from "@nextui-org/react"
import { Send } from "lucide-react"

 const ChatInput = ({handleInputChange, handleSubmit, input, setInput}) => {
   return (
     <div className='z-10 absolute bottom-0 bg-zinc-900 left-0 w-full'>
        <div className='mx-2 flex gap-3 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl'>
            <div className='relative flex h-full flex-1 items-stretch md:flex-col'>
                <div className='relative flex flex-col w-full flex-grow p-4'>
                    <form onSubmit={handleSubmit} className="relative">
                        <Textarea onChange={handleInputChange} value={input} 
                        onKeyDown={(e)=>{if(e.key === "Enter" && !e.shiftKey){
                            e.preventDefault()
                            handleSubmit()
                            setInput('')
                        }}} minRows={4} placeholder="Enter your question..." className="resize-none bg-zinc-800 border border-zinc-500 rounded-xl text-base"/>
                        <Button size="sm" type="submit" className="absolute z-10 border border-blue-700 bg-blue-950 right-2 bottom-2 rounded-full">
                          <Send className="size-4" />
                        </Button>
                    </form>
                </div>
            </div>        
        </div>
     </div>
   )
 }
 
 export default ChatInput