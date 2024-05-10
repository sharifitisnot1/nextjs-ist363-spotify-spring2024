"use client";

import styles from "./Footer.module.scss";

import React, { useState } from "react";

const artists = [
  {
    name: "Taylor Swift",
    spotify_id: "06HL4z0CvFAxyc27GXpf02",
    description:
      "Taylor Swift is an American singer-songwriter known for narrative songs about her personal life.",
    videoUrl: "https://www.youtube.com/embed/VZTRUy7VxD8",
  },
  {
    name: "Beyoncé",
    spotify_id: "6vWDO969PvNqNYHIOW5v0m",
    description:
      "Beyoncé is a global icon, known for her powerful vocals and electrifying performances.",
    videoUrl: "https://www.youtube.com/embed/rwieSVDhz04",
  },
  {
    name: "Ariana Grande",
    spotify_id: "66CXWjxzNUsdJxJ2JdwvnR",
    description:
      "Ariana Grande is a pop and R&B vocalist known for her expansive four-octave vocal range.",
    videoUrl: "https://www.youtube.com/embed/KU1MOoAb54A",
  },
  {
    name: "Thelonius Monk",
    spotify_id: "4PDpGtF16XpqvXxsrFwQnN",
    description:
      "Thelonious Monk was a pivotal figure in the history of jazz and is known for his unique improvisational style.",
    videoUrl: "https://www.youtube.com/embed/KshrtLXBdl8",
  },
  {
    name: "Dizzy Gillespie",
    spotify_id: "5RzjqfPS0Bu4bUMkyNNDpn",
    description:
      "Dizzy Gillespie was an American jazz trumpeter, bandleader, and composer, and one of the pioneers of bebop.",
    videoUrl: "https://www.youtube.com/embed/09BB1pci8_o",
  },
  {
    name: "Charlie Parker",
    spotify_id: "4Ww5mwS7BWYjoZTUIrMHfC",
    description:
      "Charlie Parker was a highly influential soloist and leading figure in the development of bebop.",
    videoUrl: "https://www.youtube.com/embed/KXP84ijiLbg",
  },
  {
    name: "Sonny Rollins",
    spotify_id: "1VEzN9lxvG6KPR3QQGsebR",
    description:
      "Sonny Rollins is an American jazz tenor saxophonist who is widely recognized as one of the most important and influential jazz musicians.",
    videoUrl: "https://www.youtube.com/embed/cneBpjwfxhg",
  },
  {
    name: "Dexter Gordon",
    spotify_id: "3NUsiT2JSyaWAnWaXxDzhQ",
    description:
      "Dexter Gordon was a major figure in the bebop and hard bop movements of jazz.",
    videoUrl: "https://www.youtube.com/embed/EtmKAy9P1kY",
  },
  {
    name: "Kenny Burrell",
    spotify_id: "1sdyFmN4bVOcuFDpTVsxBB",
    description:
      "Kenny Burrell is known for his warm tone and soulful approach to the jazz guitar.",
    videoUrl: "https://www.youtube.com/embed/q2DbH1PIWxU",
  },
  {
    name: "Wes Montgomery",
    spotify_id: "03YhcM6fxypfwckPCQV8pQ",
    description:
      "Wes Montgomery was one of the most influential jazz guitarists, known for his distinctive plucking style.",
    videoUrl: "https://www.youtube.com/embed/IFBeo0cGu7c",
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
      <p>
        {selectedArtist
          ? selectedArtist.description
          : "Please select an artist from the dropdown."}
      </p>
    </footer>
  );
};

export default Footer;
