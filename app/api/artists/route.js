import { getAccessToken } from "../../../lib/spotify";

export async function GET() {
  const token = await getAccessToken();

  //const taylorSwift = "06HL4z0CvFAxyc27GXpf02";

  const artists = [
    {
      name: "Lil Durk",
      spotify_id: "3hcs9uc56yIGFCSy9leWe7",
    },
    {
      name: "J.Cole",
      spotify_id: "6l3HvQ5sa6mXTsMTB19rO5",
    },
    {
      name: "Future",
      spotify_id: "1RyvyyTE3xzB2ZywiAwp0i",
    },
    {
      name: "YoungBoy Never Broke Again",
      spotify_id: "7wlFDEWiM5OoIAt8RSli8b",
    },
    {
      name: "A Boogie Wit da Hoodie",
      spotify_id: "31W5EY0aAly4Qieq6OFu6I",
    },
    {
      name: "Kodack Black",
      spotify_id: "46SHBwWsqBkxI7EeeBEQG7",
    },
    {
      name: "Michael Jackson",
      spotify_id: "3fMbdgg4jU18AjLCKBhRSm",
    },
    {
      name: "Gunna",
      spotify_id: "2hlmm7s2ICUX0LVIhVFlZQ",
    },
    {
      name: "Rod Wave",
      spotify_id: "45TgXXqMDdF8BkjA83OM7z",
    },
    {
      name: "Moneybagg yo",
      spotify_id: "3tJoFztHeIJkJWMrx0td2f",
    },
  ];

  // Extract the artist IDs
  // example: ["06HL4z0CvFAxyc27GXpf02", "6vWDO969PvNqNYHIOW5v0m", "66CXWjxzNUsdJxJ2JdwvnR"]
  const artistsIds = artists.map((artist) => artist.spotify_id);

  // Convert the artist IDs to a string
  // example: "06HL4z0CvFAxyc27GXpf02,6vWDO969PvNqNYHIOW5v0m,66CXWjxzNUsdJxJ2JdwvnR"
  const artistsString = artistsIds.join(",");

  const apiResponse = await fetch(
    `https://api.spotify.com/v1/artists?ids=${artistsString}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const artistsData = await apiResponse.json();

  return new Response(JSON.stringify(artistsData));
}
