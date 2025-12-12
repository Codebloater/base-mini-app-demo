"use client";

import { sdk } from "@farcaster/miniapp-sdk";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    sdk.actions.ready();
  }, []);

  return (
    <main className="flex flex-col items-center justify-between min-h-screen px-6 py-14 bg-[#0052FF] text-center">
      <div className="flex flex-col items-center space-y-6">
        <h1 className="text-6xl font-bold leading-tight text-[#ffffff]">
          Openland
        </h1>
        <p className="text-base opacity-90 max-w-xs"></p>
      </div>

      <div className="flex flex-col">
        <button
          rel="noopener noreferrer"
          className="mt-4 px-10 py-3 text-xl bg-[#ffd12f] text-[#0a0b0d] font-bold shadow-[4px_4px_0px_0px_#000] border-4 border-[#0a0b0d] rounded-none active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_#000] transition-all"
        >
          Try Game!
        </button>

        <div className="pt-8 text-xs opacity-70 text-[#ffffff]">
          Powered by Base
        </div>
      </div>
    </main>
  );
}
