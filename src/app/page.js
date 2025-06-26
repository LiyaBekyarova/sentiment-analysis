"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
export default function Home() {
  const [result, setResult] = useState(null);
  const [ready, setReady] = useState(null);

  const worker = useRef(null);

  useEffect(() => {
    if (!worker.current) {
      worker.current = new Worker(new URL("./worker.js", import.meta.url), {
        type: "module",
      });
    }

    const onMessageReceived = (e) => {
      switch (e.data.status) {
        case "initiate":
          setReady(false);
          break;
        case "ready":
          setReady(true);
          break;
        case "complete":
          setResult(e.data.output[0]);
          break;
      }
    };

    worker.current.addEventListener("message", onMessageReceived);
    return () =>
      worker.current.removeEventListener("message", onMessageReceived);
  });

  const classify = useCallback((text) => {
    if (worker.current) {
      worker.current.postMessage({ text });
    }
  }, []);

  useEffect(() => {
    classify("hello");
  }, []);
  
  return (
    <main className="flex h-screen flex-col items-center justify-center ">
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0  flex flex-col items-center justify-center text-white font-bold px-4 ">
          <h1 className="text-4xl font-bold mb-2 text-center  max-w-xs">
            Sentiment analysis
          </h1>
          <h2 className="text-2xl mb-2 text-center">Using Transformers.js</h2>
          <p className="mb-2 text-center  max-w-xs">
            Write down a comment and i will tell you if it&apos;s a positive or
            a negative one (in English only)
          </p>
          <input
            className="w-full max-w-xs p-2 border border-gray-300 rounded mb-4"
            type="text"
            placeholder="Enter text here"
            onInput={(e) => {
              classify(e.target.value);
            }}
          
           
          />

          {ready === false && (
            <p className="text-neutral-300 ">
              Loading model... Please wait 
            </p>
          )}

          {ready && result && (
            <pre style={{
              backgroundColor:"rgb(108, 0, 162)"
            }} className="bg-gray-100 p-4 rounded w-full max-w-xs text-sm">
              {JSON.stringify(result, null, 2)}
            </pre>
          )}
        </div>
      </BackgroundGradientAnimation>
    </main>
  );
}
