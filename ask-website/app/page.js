"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [url, setUrl] = useState("");

  const handleClick = () => {
    if (url.trim()) {
      // Encode the URL to make it URL-safe
      const encodedUrl = encodeURIComponent(url);
      router.push(`/${encodedUrl}`);
    }
  };

  return (
    <div className="px-5 md:px-20 lg:px-0 w-full h-full bg-zinc-900 flex flex-col flex-1 items-center justify-center">
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="w-full md:w-2/2 lg:w-1/2 flex items-center justify-center text-center flex-col gap-10">
          <h1 className="text-5xl sm:text-6xl md:text-7xl text-blue-500 font-bold">Ask Website AI</h1>
          <p className="text-[15px] leading-6 text-white">
            Welcome to ASK AI! This tool allows you to explore and learn about any website
            just by entering its URL. With ASK AI, you can pass any website URL after the main URL.
            When you input a URL, ASK AI will fetch and analyze the website's content in real time.
            It then provides a dynamic interface where you can ask questions directly related to the
            information from that site. <br /> <br />
            Whether you're curious about the website's structure, content, or specific details,
            ASK AI is here to answer your questions accurately by referencing the original site's information. <br />
            Give it a try, and explore the web with ASK AI!
          </p>
        </div>

        <div className="w-full md:w-2/3 lg:w-1/3 flex flex-col items-center justify-center gap-5 ">
          <Input
            className="bg-zinc-700 text-white"
            placeholder="Enter your URL here"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <Button
            onClick={handleClick}
            className="bg-blue-900 text-white border hover:border-blue-500 hover:bg-blue-800"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
