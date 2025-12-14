export async function GET() {
  return Response.json({
    accountAssociation: {
      header:
        "eyJmaWQiOjEzNTMwMDAsInR5cGUiOiJhdXRoIiwia2V5IjoiMHhEYWNlQzUwMmREMjgwYTRjOWFCNTlmMWJkQzQyYUM4OTQzYzFGZDU5In0",
      payload: "eyJkb21haW4iOiJkZW1vLXdpc2hsaXN0LW1pbmktYXBwLnZlcmNlbC5hcHAifQ",
      signature: "oGrNSy0x7TNulXf0AGX7td7xUENBVIOELEhIPcOuU5UpQO/CgJzNDKI1r1Wrl81o1JW3QbYAcVU6Lcs3dO4Rlhw="
        },
    baseBuilder: {
      ownerAddress: "0xDaceC502dD280a4c9aB59f1bdC42aC8943c1Fd59" // add your Base Account address here
    },
    miniapp: {
      version: "1",
      name: "OpenLand",
      homeUrl: "https://demo-wishlist-mini-app.vercel.app",
      iconUrl: "https://demo-wishlist-mini-app.vercel.app/Icon.png",
      splashImageUrl: "https://demo-wishlist-mini-app.vercel.app/Splash.png",
      splashBackgroundColor: "#ffffff",
      webhookUrl: "https://ex.co/api/webhook",
      subtitle: "social, fun, earn",
      description: "Land of Possibilities",
      screenshotUrls: [
        "https://ex.co/s1.png",
        "https://ex.co/s2.png",
        "https://ex.co/s3.png"
      ],
      primaryCategory: "games",
      tags: ["rewards", "leaderboard", "warpcast", "earn"],
      heroImageUrl: "https://demo-wishlist-mini-app.vercel.app/Hero.png",
      tagline: "Land of Infinite Possibilities",
      ogTitle: "OpenLand",
      ogDescription: "Challenge friends in real time.",
      ogImageUrl: "https://ex.co/og.png",
      noindex: true
    }
  });
}
