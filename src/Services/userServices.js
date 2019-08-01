export const getSongsList = () => {
  if (true) {
    return "All song list";
  }
};
export const getSong = id => {
  if (id) {
    console.log(id);
    return "single song";
  }
};

export const addSong = text => {
  if (text) {
    console.log(text);
    return "add song";
  }
};

export const updateSongsList = (id, text) => {
  if (id && text) {
    console.log(`id and body generated: ${(id, text)}`);
  }

  if (id === "1") {
    return "updated song id fetched";
  }
};

export const deleteSong = id => {
  if (id) {
    console.log("id deleted");
  } else if (id === 1) {
    return "song delted";
  }
};
