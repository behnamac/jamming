import Track from "./Track";
import Table from "./ui/table";

interface Song {
  song: string;
  singer: string;
}

interface Props {
  songs: Song[];
}

function SearchResult({ songs }: Props) {
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
