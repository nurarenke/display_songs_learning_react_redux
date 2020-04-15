//action creator
export const selectSong = (song) => {
  //return an action
  return {
    type: "SONG_SELECTED", //type is mandatory but payload is not
    payload: song,
  };
};
