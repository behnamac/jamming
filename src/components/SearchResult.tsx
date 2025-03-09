import React from "react";
import Track from "./Track";
import songs from "../stores/data";
import Table from "./ui/table";

function SearchResult() {
  return (
    <Table title="Result">
      <div className="ml-2 p-2 text-xl">
        {songs.map((song) => (
          <div className="flex w-full border-b-2 border-purple-950">
              <Track songName={song.song} singer={song.singer} />
          </div>
        ))}
      </div>
    </Table>
  );
}

export default SearchResult;
