import React from "react";
import usePlayer from "~/hooks/usePlayer.hook";
import trackData from "~/data/trackData.json";
import { PlayButton, ProgressBar } from "~/components";
import styles from "./Player.module.css";

const Player = () => {
  const { state } = usePlayer();

  state.meta = {
    id: trackData.id,
    src: trackData.preview_url,
    name: trackData.name,
    artists: [trackData.artists[0].name],
  };

  state.duration = trackData.duration_ms;

  return state.meta?.src ? (
    <div className={styles.root}>
      <div className={styles.player}>
        <PlayButton />
        <div className="w-full">
          <p className={styles.trackName}>{state.meta?.name} </p>
          <ProgressBar />
          <p className={styles.trackAuthor}>{state.meta?.artists}</p>
        </div>
      </div>
      <div className={styles.trackInfo}></div>
    </div>
  ) : null;
};

export default Player;
