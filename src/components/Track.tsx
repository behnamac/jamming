import { useState, useEffect } from "react";

interface TrackProps {
  songName: string;
  singer: string;
  addToPlaylist: (song: { songName: string; singer: string }) => void;
  removeFromPlaylist: (song: { songName: string; singer: string }) => void;
  playlist: { songName: string; singer: string }[];
}

function Track({
  songName,
  singer,
  addToPlaylist,
  removeFromPlaylist,
  playlist,
}: TrackProps) {
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setAdded(
      playlist.some(
        (song) => song.songName === songName && song.singer === singer,
      ),
    );
  }, [playlist, songName, singer]);

  const handleClick = () => {
    if (added) {
      removeFromPlaylist({ songName, singer });
    } else {
      addToPlaylist({ songName, singer });
    }
  };

  return (
    <div className="flex w-full p-3 text-amber-50">
      <div className="flex w-full flex-col p-3 text-amber-50">
        {songName}
        <span className="text-sm text-gray-300">{singer}</span>
      </div>
      <button
        className="m-2 p-2 text-gray-200 hover:cursor-pointer hover:text-gray-300"
        onClick={handleClick}
      >
        {added ? "-" : "+"}
      </button>
    </div>
  );
}

export default Track;
