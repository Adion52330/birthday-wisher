import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import messages from "../utils/birthdayWishes.js";
import ConfettiGenerator from "confetti-js";
import Head from "next/head";

const Birthday = () => {
  useEffect(() => {
    const confettiSettings = { target: "my-canvas" };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, []);
  const router = useRouter();
  const { birthName, theme } = router.query;
  const [opacity, setopacity] = useState("opacity-0");
  useEffect(() => {
    setTimeout(() => {
      setopacity("opacity-100");
    }, 1000);
  }, []);
  return (
    <div
      className={`flex flex-col bg-gray-200 items-center justify-center min-h-screen py-2 ${opacity} transition`}
    >
      <Head>
        <title>Happy Birthday {birthName} - Adion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-6xl font-bold my-4">
        Happy Birthday <span style={{ color: theme }}>{birthName}!</span>
      </h1>
      <div className="py-7">
        {
          // get random value from messages array
          messages[Math.floor(Math.random() * messages.length)].value
        }
      </div>
      <canvas
        id="my-canvas"
        className="fixed top-0 left-0 w-full h-screen"
      ></canvas>
    </div>
  );
};

export default Birthday;
