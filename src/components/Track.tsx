interface props {
  songName: string;
  singer: string;
}
function Track({ songName, singer }: props) {
  return (
    <div className="flex w-full p-3 text-amber-50">
      <div className="flex w-full flex-col p-3 text-amber-50">
        {songName}
        <span className="text-sm text-gray-300">{singer}</span>
      </div>
      <button className="m-2 p-2 text-gray-200 hover:cursor-pointer hover:text-gray-300">
        +
      </button>
    </div>
  );
}

export default Track;
