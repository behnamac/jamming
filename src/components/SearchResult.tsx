import React from "react";
import Track from "./Track";
import songs from "../stores/data";

function SearchResult() {
  return (
    <div className="w-1/2 bg-purple-900 rounded-t-xl">
      <div className="w-full border-b-2 border-gray-700 bg-purple-800 rounded-t-xl">
        <h1 className="ml-5 py-2 text-3xl font-bold text-amber-50">Result</h1>
      </div>
      <div className="bg--500 h-full w-full overflow-auto bg-purple-900 py-1">
        <ul className="ml-2 p-2 text-xl">
          {songs.map((song) => (
            <div className="flex w-full border-b-2 border-purple-950">
              <li className="flex w-full flex-col p-3 text-amber-50">
                {song.singer}
                <span className="text-sm text-gray-400">{song.song}</span>
              </li>
              <button className="m-2 p-2 text-gray-200 hover:cursor-pointer hover:text-gray-300">
                +
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchResult;
