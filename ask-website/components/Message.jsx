import { Bot, User } from "lucide-react"


const AsingleMessage = ({content, isUserMessage}) => {

    
  return (
    <div className={`${isUserMessage ? 'bg-zinc-800' : 'bg-zinc-900/25' }`}>
        <div className='p-6'>
            <div className='max-w-3xl mx-auto flex items-start gap-2.5'>
                <div className={`size-10 shrink-0 aspect-square rounded-full border flex justify-center items-center text-white ${isUserMessage ? 'bg-blue-950 border-blue-700 textzinc-200' : 'border-zinc-700 bg-zinc-900'} `}>
                    {isUserMessage ? <User className="size-5 "/> : <Bot className="size-5 text-white"/>}
                </div>

                <div className='flex flex-col w-full ml-6'>
                    <div className='flex items-center space-x-2'>
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">{isUserMessage ? 'You' : 'AI-Bot'}</span>
                    </div>

                    <p className={`text-sm font-normal py-2.5 text-gray-900 dark:text-white`}>{content}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AsingleMessage