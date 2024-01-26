"use client"
import Image from "next/image";
import { useState } from "react";
export default function Home() {

  const [count, setCount] = useState(0);

  function updateCount()
  { 
    return setCount(count + 1)
  }
  return (
    <div >
          <div className="flex justify-center">
            <Image
              src="/assets/AISociety_Logo_Light.png"
              width="500"
              height="500"
              alt="AIS Logo"
            />
          </div>
         <h1>Hello AIS!</h1>
         <button onClick={updateCount}>{count}</button>
    </div>
  );
}
