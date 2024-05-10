"use client";

import styles from "./Footer.module.scss";

import React, { useState } from "react";

const artists = [
  {
    name: "Taylor Swift",
    spotify_id: "06HL4z0CvFAxyc27GXpf02",
    description:
      "Taylor Swift is an American singer-songwriter known for narrative songs about her personal life.",
  },
  {
    name: "Beyoncé",
    spotify_id: "6vWDO969PvNqNYHIOW5v0m",
    description:
      "Beyoncé is a global icon, known for her powerful vocals and electrifying performances.",
  },
  {
    name: "Ariana Grande",
    spotify_id: "66CXWjxzNUsdJxJ2JdwvnR",
    description:
      "Ariana Grande is a pop and R&B vocalist known for her expansive four-octave vocal range.",
  },
  {
    name: "Thelonius Monk",
    spotify_id: "4PDpGtF16XpqvXxsrFwQnN",
    description:
      "Thelonious Monk was a pivotal figure in the history of jazz and is known for his unique improvisational style.",
  },
  {
    name: "Dizzy Gillespie",
    spotify_id: "5RzjqfPS0Bu4bUMkyNNDpn",
    description:
      "Dizzy Gillespie was an American jazz trumpeter, bandleader, and composer, and one of the pioneers of bebop.",
  },
  {
    name: "Charlie Parker",
    spotify_id: "4Ww5mwS7BWYjoZTUIrMHfC",
    description:
      "Charlie Parker was a highly influential soloist and leading figure in the development of bebop.",
  },
  {
    name: "Sonny Rollins",
    spotify_id: "1VEzN9lxvG6KPR3QQGsebR",
    description:
      "Sonny Rollins is an American jazz tenor saxophonist who is widely recognized as one of the most important and influential jazz musicians.",
  },
  {
    name: "Dexter Gordon",
    spotify_id: "3NUsiT2JSyaWAnWaXxDzhQ",
    description:
      "Dexter Gordon was a major figure in the bebop and hard bop movements of jazz.",
  },
  {
    name: "Kenny Burrell",
    spotify_id: "1sdyFmN4bVOcuFDpTVsxBB",
    description:
      "Kenny Burrell is known for his warm tone and soulful approach to the jazz guitar.",
  },
  {
    name: "Wes Montgomery",
    spotify_id: "03YhcM6fxypfwckPCQV8pQ",
    description:
      "Wes Montgomery was one of the most influential jazz guitarists, known for his distinctive plucking style.",
  },
];

const Footer = () => {
  const [selectedArtistInfo, setSelectedArtistInfo] = useState("");

  const handleSelectChange = (event) => {
    const spotifyId = event.target.value;
    const artist = artists.find((artist) => artist.spotify_id === spotifyId);
    setSelectedArtistInfo(
      artist
        ? `${artist.description}`
        : "Please select an artist from the dropdown."
    );
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.latestRelease}>
        <div className={styles.albumInfo}></div>
      </div>
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

      <p>{selectedArtistInfo}</p>
    </footer>
  );
};

export default Footer;
