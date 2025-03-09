import { useState } from "react";
import Playlist from "../components/Playlist";
import SearchResult from "../components/SearchResult";
import songs from "../stores/data";
import SearchBar from "../components/SearchBar";

function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const filteredItems = songs.filter((song) =>
    song.song.toLowerCase().includes(searchQuery.toLocaleLowerCase()),
  );
  const handleChange = (e: any) => {
    setSearchQuery(e.target.value);
  };
  return (
    <section className="min-w-[320px] bg-purple-950">
      <div className="mx-auto flex h-[95vh] min-h-[650px] max-w-[1440px] flex-col items-center justify-center">
        <SearchBar searchQuery={searchQuery} handleChange={handleChange} />
        <div className="flex h-[60vh] w-full gap-3 px-2 md:gap-7">
          <SearchResult songs={filteredItems} />
          <Playlist />
        </div>
      </div>
    </section>
  );
}

export default Home;
