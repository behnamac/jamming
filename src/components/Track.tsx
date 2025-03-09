interface props {
  songName: string;
  singer: string;
  addToPlaylist?: (song: { songName: string; singer: string }) => void;
}
function Track({ songName, singer, addToPlaylist }: props) {
  const handleClick = () => {
    if (addToPlaylist) {
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
        +
      </button>
    </div>
  );
}

export default Track;
