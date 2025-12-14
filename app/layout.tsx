import type { Metadata } from "next";

import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Wishlist",
    description: "Demo Mini App",
    other: {
      "fc:miniapp": JSON.stringify({
        version: "next",
        imageUrl: "https://demo-wishlist-mini-app.vercel.app/banner.png",
        button: {
          title: `Get Early Access!`,
          action: {
            type: "launch_miniapp",
            name: "Wishlist me",
            url: "https://demo-wishlist-mini-app.vercel.app",
            splashImageUrl:
              "https://demo-wishlist-mini-app.vercel.app/Splash.png",
            splashBackgroundColor: "#000000"
          }
        }
      })
    }
  };
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased `}>{children}</body>
    </html>
  );
}
