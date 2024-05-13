import { getAccessToken } from "../../../lib/spotify";

export async function GET() {
  const token = await getAccessToken();

  const artists = [
    {
      name: "Kendrick Lamar",
      spotify_id: "2YZyLoL8N0Wb9xBt1NhZWg",
    },
    {
      name: "J. Cole",
      spotify_id: "6l3HvQ5sa6mXTsMTB19rO5",
    },
    {
      name: "Drake",
      spotify_id: "3TVXtAsR1Inumwj472S9r4",
    },
    {
      name: "Travis Scott",
      spotify_id: "0Y5tJX1MQlPlqiwlOH1tJY",
    },
    {
      name: "Nicki Minaj",
      spotify_id: "0hCNtLu0JehylgoiP8L4Gh",
    },
    {
      name: "Cardi B",
      spotify_id: "4kYSro6naA4h99UJvo89HB",
    },
    {
      name: "Migos",
      spotify_id: "6oMuImdp5ZcFhWP0ESe6mG",
    },
    {
      name: "Snoop Dogg",
      spotify_id: "7hJcb9fa4alzcOq3EaNPoG",
    },
    {
      name: "Lil Wayne",
      spotify_id: "55Aa2cqylxrFIXC767Z865",
    },
    {
      name: "Jay-Z",
      spotify_id: "3nFkdlSjzX9mRTtwJOzDYB",
    },
  ];

  const artistsIds = artists.map((artist) => artist.spotify_id);
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
