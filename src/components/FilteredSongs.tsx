import Track from "./Track";
import Table from "./ui/table";
import songs from "../stores/data";

interface Props {
  searchQuery: string;
  addToPlaylist: (song: { songName: string; singer: string }) => void;
}

function FilteredSongs({ searchQuery, addToPlaylist }: Props) {
  const filteredItems = songs.filter((song) =>
    song.song.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <Table title="Result">
      <div className="ml-2 p-2 text-xl">
        {filteredItems.map((song) => (
          <Track
          key={song.id}
            songName={song.song}
            singer={song.singer}
            addToPlaylist={addToPlaylist}
          />
        ))}
      </div>
    </Table>
  );
}

export default FilteredSongs;
