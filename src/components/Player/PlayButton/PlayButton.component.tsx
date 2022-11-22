import React from "react";
import { PlayIcon, PauseIcon } from "@heroicons/react/20/solid";
import trackData from "~/data/trackData.json";

import usePlayer from "~/hooks/usePlayer.hook";

import styles from "./PlayButton.module.css";

const PlayButton = () => {
  const { state, actions } = usePlayer();

  const handleButtonClick = () => {
    state.playing ? actions.pause() : actions.play();
  };

  return (
    <button onClick={handleButtonClick} className={styles.button}>
      {state.playing ? (
        <PauseIcon className={styles.icon} onClick={() => actions.pause()} />
      ) : (
        <PlayIcon
          className={styles.icon}
          onClick={() =>
            actions.play({
              id: trackData.id,
              name: trackData.name,
              src: trackData.preview_url,
              artists: trackData.artists.map((artist) => artist.name),
            })
          }
        />
      )}
    </button>
  );
};

export default PlayButton;
