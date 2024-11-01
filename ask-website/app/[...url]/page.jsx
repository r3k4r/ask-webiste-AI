import CharWrapper from "@/components/CharWrapper"
import { ragChat } from "@/lib/rag-chat"
import { redis } from "@/lib/redis-db"
import { cookies } from "next/headers"


function reconstructUrl({url}) {
    const decodedUrl = url.map((component)=>decodeURIComponent(component))    
    return decodedUrl.join('/') 
}

const Page = async({params}) => {
    const param = await params
    const url = param.url
    const reconstructedUrl = reconstructUrl({url: url})

    const isAlreadyAdded = await redis.sismember("indexed-urls", reconstructedUrl)   
    const cookie = await cookies()
    const sessionCookie =  cookie.get("sessionId")?.value

    const sessionId = (reconstructUrl + "--" + sessionCookie).replace(/\//g, "")

    if(!isAlreadyAdded){
        await ragChat.context.add({
            type: "html",
            source: reconstructedUrl,
            config: {chunkOverlap: 50, chunkSize: 200}
        })

        await redis.sadd("indexed-urls", reconstructedUrl)
    }

    
    
    const initialMessages = await ragChat.history.getMessages({sessionId , amount: 99999})
  return (
    <div className='h-full'>
        <CharWrapper sessionId={sessionId} initialMessages={initialMessages}/>
    </div>
  )
}

export default Page