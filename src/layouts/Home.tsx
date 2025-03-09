import { useState } from "react";
import Playlist from "../components/Playlist";
import SearchBar from "../components/SearchBar";
import FilteredSongs from "../components/FilteredSongs";

function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [playlist, setPlaylist] = useState<
    { songName: string; singer: string }[]
  >([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const addToPlaylist = (song: { songName: string; singer: string }) => {
    setPlaylist((prevPlaylist) => [...prevPlaylist, song]);
  };

  const removeFromPlaylist = (song: { songName: string; singer: string }) => {
    setPlaylist((prevPlaylist) =>
      prevPlaylist.filter(
        (item) =>
          item.songName !== song.songName || item.singer !== song.singer,
      ),
    );
  };

  return (
    <section className="min-w-[320px] bg-purple-950">
      <div className="mx-auto flex h-[95vh] min-h-[650px] max-w-[1440px] flex-col items-center justify-center">
        <SearchBar searchQuery={searchQuery} handleChange={handleChange} />
        <div className="flex h-[60vh] w-full gap-3 px-2 md:gap-7">
          <FilteredSongs
            searchQuery={searchQuery}
            addToPlaylist={addToPlaylist}
            removeFromPlaylist={removeFromPlaylist}
            playlist={playlist}
          />
          <Playlist
            playlist={playlist}
            addToPlaylist={addToPlaylist}
            removeFromPlaylist={removeFromPlaylist}
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
