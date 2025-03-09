import Track from "./Track";
import songs from "../stores/data";
import Table from "./ui/Table";
import { useEffect, useState } from "react";

interface Props {
  searchQuery: string;
  addToPlaylist: (song: { songName: string; singer: string }) => void;
}

const FilteredSongs: React.FC<Props> = ({ searchQuery, addToPlaylist }) => {
  const [filteredItems, setFilteredItems] = useState(songs);
  useEffect(() => {
    setFilteredItems(
      songs.filter((song) =>
        song.song.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  const handleAddToPlaylist = (song: { songName: string; singer: string }) => {
    addToPlaylist(song);
    setFilteredItems((prevItems) =>
      prevItems.filter((item) => item.song !== song.songName)
    );
  };

  return (
    <Table title="Result">
      <div className="ml-2 p-2 text-xl">
        {filteredItems.map((song) => (
          <Track
            key={song.id}
            songName={song.song}
            singer={song.singer}
          addToPlaylist={handleAddToPlaylist}
          />
        ))}
      </div>
    </Table>
  );
};

export default FilteredSongs;
