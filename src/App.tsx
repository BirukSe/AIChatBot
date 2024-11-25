import { useEffect, useState } from "react";
import Message from "./Message";

export default function App() {
  const list = ["Chat with burachat...", "Unlimited questions...", "Fast response..."];
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<string[]>([]); 

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (charIndex < list[index].length) {
        setTypedText((prev) => prev + list[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % list.length);
          setCharIndex(0);
          setTypedText("");
        }, 1500);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, [charIndex, index]);

  const handleClick = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, input]); 
      setInput(""); 
    }
  };

  return (
    <div className="min-h-screen bg-slate-800">
      <div className="flex flex-col items-center pt-24">
        <div>
          <h1
            id="header-text"
            className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 drop-shadow-lg"
          >
            {typedText}
          </h1>
        </div>

        <div className="pt-24">
          <h1 className="font-extrabold flex justify-center text-white text-5xl">
            What can I help with?
          </h1>
        </div>

        <div className="flex flex-row">
          <div className="mt-24 bg-white rounded-l-lg">
            <input
              type="text"
              className="h-[50px] w-[500px] placeholder:text-gray-400 flex justify-center p-2"
              placeholder="Message BuraChat"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
          </div>
          <div className="mt-24">
            <button
              onClick={handleClick}
              className="h-[50px] w-16 bg-yellow-500 text-white font-bold rounded-r-lg hover:bg-yellow-600"
            >
              Send
            </button>
          </div>
        </div>

      
        <div className="mt-12 w-[600px]">
          {messages.map((msg, idx) => (
            <Message key={idx} message={msg} />
          ))}
        </div>
      </div>
    </div>
  );
}