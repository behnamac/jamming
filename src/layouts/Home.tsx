import Playlist from "../components/Playlist";
import SearchBar from "../components/SearchBar";
import SearchResult from "../components/SearchResult";

function Home() {
  return (
    <div className="bg-purple-950 h-screen flex flex-col justify-center items-center">
      <SearchBar />
      <div className="w-full bg-amber-300 h-[60%]">
        <SearchResult />
        <Playlist />
      </div>
    </div>
  );
}

export default Home;
