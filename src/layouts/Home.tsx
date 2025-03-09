import Playlist from "../components/Playlist";
import SearchResult from "../components/SearchResult";

function Home() {
  return (
    <section className="min-w-[320px] bg-purple-950">
      <div className="mx-auto flex h-[95vh] min-h-[650px] max-w-[1440px] flex-col items-center justify-center">
        {/* <SearchBar /> */}
        <div className="flex h-[60vh] w-full gap-3 px-2 md:gap-7">
          <SearchResult />
          <Playlist />
        </div>
      </div>
    </section>
  );
}

export default Home;
