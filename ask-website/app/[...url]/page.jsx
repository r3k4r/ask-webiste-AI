import { ragChat } from "@/lib/rag-chat"
import { redis } from "@/lib/redis-db"


function reconstructUrl({url}) {
    const decodedUrl = url.map((component)=>decodeURIComponent(component))    
    return decodedUrl.join('/') 
}

const Page = async({params}) => {
    const param = await params
    const url = param.url
    const reconstructedUrl = reconstructUrl({url: url})

    const isAlreadyAdded = await redis.sismember("indexed-urls", reconstructedUrl)   
    
    if(!isAlreadyAdded){
        await ragChat.context.add({
            type: "html",
            source: reconstructedUrl,
            config: {chunkOverlap: 50, chunkSize: 200}
        })

        await redis.sadd("indexed-urls", reconstructedUrl)
    }

    
    
  return (
    <div className=''>Page</div>
  )
}

export default Page