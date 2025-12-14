"use client";

import { sdk } from "@farcaster/miniapp-sdk";
import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type CloudType = {
  id: number;
  top: number;
};

function Cloud({ top }: { top: number }) {
  return (
    <div
      className="pointer-events-none absolute z-10"
      style={{
        top: `${top}%`,
        left: 0,
        animation: "cloud-move 30s linear forwards"
      }}
    >
      <Image
        src="/Cloud.png" // simple PNG or SVG
        alt="cloud"
        width={120}
        height={60}
        unoptimized
      />
    </div>
  );
}

export default function Home() {
  const [clouds, setClouds] = useState<CloudType[]>([]);
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    sdk.actions.ready();

    (async () => {
      const miniAppStatus = await sdk.isInMiniApp();
      if (!miniAppStatus) return;

      const context = await sdk.context;
      const displayName = context?.user?.displayName;

      if (mounted && displayName?.trim()) {
        setName(displayName);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  // Cloud Instantiation
  useEffect(() => {
    const spawnCloud = () => {
      const id = Date.now() + Math.random();
      const top = Math.random() * 40;

      setClouds((prev) => [...prev, { id, top }]);

      // remove after animation
      setTimeout(() => {
        setClouds((prev) => prev.filter((c) => c.id !== id));
      }, 30000);
    };

    // 🚀 spawn instantly on load
    spawnCloud();

    // then keep spawning
    const interval = setInterval(spawnCloud, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="flex flex-col items-center justify-between min-h-screen bg-[#0052FF] relative overflow-hidden">
        <div className="absolute top-3 left-0 py-1 px-2 text-sm bg-[#8edd65] font-suture font-bold">
          Coming Soon!
        </div>
        {/* Clouds */}
        {clouds.map((cloud) => (
          <Cloud key={cloud.id} top={cloud.top} />
        ))}
        <div className="flex flex-col items-center justify-between min-h-screen px-6 py-12 text-center">
          {/* Branding */}
          <div className="flex flex-col items-center space-y-6">
            <h1 className="text-7xl font-blrrpixs leading-tight text-[#ffffff] z-20">
              Openland
            </h1>
            {name && (
              <p className="font-suture text-[#ffffff] w-full text-center">
                🌼 Welcome {name}! 🌼
              </p>
            )}
          </div>

          {/* Crop Growth Animation */}
          <div className=" w-fit h-fit">
            <Image
              alt="Crop Growth"
              src={"/CropGrowth.gif"}
              width={120}
              height={120}
              unoptimized
              priority
            />
          </div>

          {/* CTA */}
          <div className="flex flex-col">
            <div
              rel="noopener noreferrer"
              className="mt-4 px-10 py-3 flex justify-center items-center gap-3 text-xl font-suture bg-[#ffd12f] text-[#0a0b0d] font-bold shadow-[4px_4px_0px_0px_#000] border-4 border-[#0a0b0d] rounded-none active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000] transition-all"
            >
              Enter Leaderboard <MoveRightIcon size={34} />
            </div>

            <div className="pt-8 text-xs opacity-70 text-[#ffffff]">
              Powered by Base
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
