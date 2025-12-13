"use client";

import { sdk } from "@farcaster/miniapp-sdk";
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
  const [pfpUrl, setPfpUrl] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    sdk.actions.ready();

    (async () => {
      const miniAppStatus = await sdk.isInMiniApp();
      if (!miniAppStatus) return;

      const context = await sdk.context;
      const displayName = context?.user?.displayName;
      const pfp = context?.user?.pfpUrl;

      if (!mounted) return;

      if (displayName?.trim()) {
        setName(displayName);
        if (pfp) setPfpUrl(pfp);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  // Cloud Instantiation
  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const top = Math.random() * 40; // clouds only in upper area

      setClouds((prev) => [...prev, { id, top }]);

      // Remove cloud after animation ends
      setTimeout(() => {
        setClouds((prev) => prev.filter((c) => c.id !== id));
      }, 30000);
    }, 8000); // spawn every 6s

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="flex flex-col items-center justify-between min-h-screen bg-[#0052FF] relative overflow-hidden">
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
            {pfpUrl && (
              <Image
                src={pfpUrl}
                alt="pfp"
                width={45}
                height={45}
                className="rounded-full"
                priority
              />
            )}
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
              className="mt-4 px-10 py-3 skew-3 text-xl font-suture bg-[#ffd12f] text-[#0a0b0d] font-bold shadow-[4px_4px_0px_0px_#000] border-4 border-[#0a0b0d] rounded-none"
            >
              Coming Soooon!
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
