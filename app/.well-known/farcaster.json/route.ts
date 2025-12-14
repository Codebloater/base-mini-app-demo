export async function GET() {
  return Response.json({
    accountAssociation: {
      header:
        "eyJmaWQiOjEzNTMwMDAsInR5cGUiOiJhdXRoIiwia2V5IjoiMHhEYWNlQzUwMmREMjgwYTRjOWFCNTlmMWJkQzQyYUM4OTQzYzFGZDU5In0",
      payload: "eyJkb21haW4iOiJkZW1vLXdpc2hsaXN0LW1pbmktYXBwLnZlcmNlbC5hcHAifQ",
      signature:
        "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABcFbdnXdtr38V3JxMhMSGAY4iMKbJ_sc6AL8wC8nOxLoHgOimHcYNoCkVRqRgkCai0m-B_cprcbYcGhJZnEqLEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAl8ZgIay2xclZzG8RWZzuWvO8j9R0fus3XxDee9lRlVy8dAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD3eyJ0eXBlIjoid2ViYXV0aG4uZ2V0IiwiY2hhbGxlbmdlIjoiUjF0N0ZlMF9ENE9Wbmx5Rl9jMlBlam5wNGJGOFlIMXVQZ3J6SEpDWi1BbyIsIm9yaWdpbiI6Imh0dHBzOi8va2V5cy5jb2luYmFzZS5jb20iLCJjcm9zc09yaWdpbiI6ZmFsc2UsIm90aGVyX2tleXNfY2FuX2JlX2FkZGVkX2hlcmUiOiJkbyBub3QgY29tcGFyZSBjbGllbnREYXRhSlNPTiBhZ2FpbnN0IGEgdGVtcGxhdGUuIFNlZSBodHRwczovL2dvby5nbC95YWJQZXgifQAAAAAAAAAAAA"
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
