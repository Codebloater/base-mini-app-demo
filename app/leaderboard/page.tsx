"use client";

import { sdk } from "@farcaster/miniapp-sdk";
import { MoveRightIcon } from "lucide-react";

import Link from "next/link";
import { useEffect } from "react";

export default function Leaderboard() {
  useEffect(() => {
    sdk.actions.ready();
  }, []);

  return (
    <>
      <main className="min-h-screen bg-[#0052FF] p-4 flex flex-col gap-3">
        <div className="flex-1 text-center">
          <h1 className="text-[#ffffff] font-blrrpixs text-4xl">
            Refer & Compete
          </h1>
        </div>
        <div className="flex-8 bg-[#d3bc8d] shadow-[4px_4px_0px_0px_#000] border-4 border-[#0a0b0d] rounded-none">
          2
        </div>
        <div className="flex-1">
          <Link
            href={"/leaderboard"}
            rel="noopener noreferrer"
            className="mt-4 px-10 py-3 flex justify-center items-center gap-3 text-xl font-suture bg-[#ffd12f] text-[#0a0b0d] font-bold shadow-[4px_4px_0px_0px_#000] border-4 border-[#0a0b0d] rounded-none active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000] transition-all"
          >
            Share in the Feed <MoveRightIcon size={34} />
          </Link>
        </div>
      </main>
    </>
  );
}
