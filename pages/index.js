import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const { birthName, theme } = router.query;
  const [name, setName] = useState("");
  const [color, setColor] = useState("#0070f3");
  const colors = [
    {
      theme: "#0070f3",
    },
    {
      theme: "#40c79a",
    },
    {
      theme: "#a27df8",
    },
    {
      theme: "#fccc50",
    },
    {
      theme: "#e74a6d",
    },
  ];
  return (
    <div className="flex flex-col bg-gray-200 items-center justify-center min-h-screen mx-3 py-2">
      <Head>
        <title>HAPPY BIRTHDAY WISHES FROM APG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-center font-bold my-4">
          Welcome to{" "}
          <span style={{ color: color }} className="transition">
            Birthday
          </span>{" "}
          Wisher
        </h1>
        <abbr
          title="How To Use:
          1. Enter your name in the input box
          2. Click on the button to change the theme
          3. Click on the button to get your wish
          4. Copy the link to which is redirected to
          5. Share the link with your friends
          "
          className="my-4 border-2 border-indigo-500 px-3 rounded-full"
        >
          i
        </abbr>
        <div className="flex justify-around items-center w-full m-5">
          {colors.map((color) => (
            <div
              className="bg-gray-200 rounded-full w-10 h-10 m-2 cursor-pointer"
              style={{ backgroundColor: color.theme }}
              onClick={() => setColor(color.theme)}
            ></div>
          ))}
        </div>
        <div className="flex p-4 w-full rounded-full bg-white">
          <input
            type="text"
            className="flex-1 p-3 focus:outline-none m-2"
            placeholder="Enter the name of the person"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Link
            passHref
            href={{
              pathname: "/birthday",
              query: { birthName: name, theme: color },
            }}
          >
            <button
              className="flex-[0.1] p-5 m-2 rounded-full shadow-xl hover:shadow-2xl z-10 transition"
              style={{
                backgroundColor: color,
                color: "white",
                boxShadow: `0px 0px 7px 1px ${color}`,
              }}
            >
              GO!
            </button>
          </Link>
        </div>
        <br />
        <br />
        <h2>
          Created by{" "}
          <a
            href="https://adion.vercel.app/"
            target="_blank"
            className="font-bold transition"
            style={{ color: color }}
          >
            Adion
          </a>
        </h2>
      </main>
    </div>
  );
}

// Colors to use
// #0070f3
// #40c79a
// #a27df8
// #fccc50
// #e74a6d
