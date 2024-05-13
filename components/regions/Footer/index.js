"use client";

import React, { useState } from "react";

import styles from "./Footer.module.scss";

const artists = [
  {
    name: "Kendrick Lamar",
    spotify_id: "2YZyLoL8N0Wb9xBt1NhZWg",
    description:
      "Kendrick Lamar is an American rapper and songwriter known for his thoughtful and introspective lyrics.",
    videoUrl: "https://www.youtube.com/embed/T6eK-2OQtew",
  },
  {
    name: "J. Cole",
    spotify_id: "6l3HvQ5sa6mXTsMTB19rO5",
    description:
      "J. Cole is a rapper and record producer known for his narrative-driven songs and profound insights into urban life.",
    videoUrl: "https://www.youtube.com/embed/WILNIXZr2oc",
  },
  {
    name: "Drake",
    spotify_id: "3TVXtAsR1Inumwj472S9r4",
    description:
      "Drake is a Canadian rapper, singer, and actor, famed for his versatility and emotive style.",
    videoUrl: "https://www.youtube.com/embed/3HFY0xuHybk",
  },
  {
    name: "Travis Scott",
    spotify_id: "0Y5tJX1MQlPlqiwlOH1tJY",
    description:
      "Travis Scott is an American rapper and producer known for his highly energetic and auto-tuned anthems.",
    videoUrl: "https://www.youtube.com/embed/_EyZUTDAH0U",
  },
  {
    name: "Nicki Minaj",
    spotify_id: "0hCNtLu0JehylgoiP8L4Gh",
    description:
      "Nicki Minaj is a Trinidadian-American rapper known for her animated flow and alter egos.",
    videoUrl: "https://www.youtube.com/embed/rV7zBXq5JsY",
  },
  {
    name: "Cardi B",
    spotify_id: "4kYSro6naA4h99UJvo89HB",
    description:
      "Cardi B is an American rapper recognized for her aggressive flow and candid lyrics.",
    videoUrl: "https://www.youtube.com/embed/xTlNMmZKwpA",
  },
  {
    name: "Migos",
    spotify_id: "6oMuImdp5ZcFhWP0ESe6mG",
    description:
      "Migos, an American hip hop trio, is known for their sharp hooks and ad-libs.",
    videoUrl: "https://www.youtube.com/embed/S-sJp1FfG7Q",
  },
  {
    name: "Snoop Dogg",
    spotify_id: "7hJcb9fa4alzcOq3EaNPoG",
    description:
      "Snoop Dogg is an iconic American rapper famous for his laid-back rapping and his deep connection to the West Coast vibe.",
    videoUrl: "https://www.youtube.com/embed/GtUVQei3nX4",
  },
  {
    name: "Lil Wayne",
    spotify_id: "55Aa2cqylxrFIXC767Z865",
    description:
      "Lil Wayne is an American rapper known for his prolific output and clever wordplay.",
    videoUrl: "https://www.youtube.com/embed/c7tOAGY59uQ",
  },
  {
    name: "Jay-Z",
    spotify_id: "3nFkdlSjzX9mRTtwJOzDYB",
    description:
      "Jay-Z is an American rapper and entrepreneur, one of the most influential figures in hip hop.",
    videoUrl: "https://www.youtube.com/embed/BoEKWtgJQAU",
  },
];

const Footer = () => {
  const [selectedArtist, setSelectedArtist] = useState(null);

  const handleSelectChange = (event) => {
    const spotifyId = event.target.value;
    const artist = artists.find((artist) => artist.spotify_id === spotifyId);
    setSelectedArtist(artist || null);
  };

  return (
    <footer className={styles.footer}>
      <select
        onChange={handleSelectChange}
        defaultValue=""
        className={styles.select}
      >
        <option value="">Select an artist...</option>
        {artists.map((artist, index) => (
          <option key={index} value={artist.spotify_id}>
            {artist.name}
          </option>
        ))}
      </select>
      {selectedArtist && (
        <div className={styles.videoContainer}>
          <iframe
            src={selectedArtist.videoUrl}
            title="Artist Video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className={styles.videoFrame}
          ></iframe>
        </div>
      )}
      <div className={styles.selectedArtist}>
        <p>
          {selectedArtist
            ? selectedArtist.description
            : "Please select an artist from the dropdown."}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
