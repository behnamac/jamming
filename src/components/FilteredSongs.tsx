import Track from "./Track";
import songs from "../stores/data";
import Table from "./ui/Table";
import { useEffect, useState } from "react";
import TableList from "./ui/TableList";

interface Props {
  searchQuery: string;
  addToPlaylist: (song: { songName: string; singer: string }) => void;
  removeFromPlaylist: (song: { songName: string; singer: string }) => void;
  playlist: { songName: string; singer: string }[];
}

const FilteredSongs: React.FC<Props> = ({
  searchQuery,
  addToPlaylist,
  removeFromPlaylist,
  playlist,
}) => {
  const [filteredItems, setFilteredItems] = useState(songs);

  useEffect(() => {
    setFilteredItems(
      songs.filter((song) =>
        song.song.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    );
  }, [searchQuery]);

  const handleAddToPlaylist = (song: { songName: string; singer: string }) => {
    addToPlaylist(song);
    setFilteredItems((prevItems) =>
      prevItems.filter((item) => item.song !== song.songName),
    );
  };

  const handleRemoveFromPlaylist = (song: {
    songName: string;
    singer: string;
  }) => {
    removeFromPlaylist(song);
    setFilteredItems((prevItems) => [
      ...prevItems,
      { id: Date.now(), song: song.songName, singer: song.singer },
    ]);
  };

  return (
    <Table title="Result">
        <TableList className="h-full">
          {filteredItems.map((song) => (
            <Track
              key={song.id}
              songName={song.song}
              singer={song.singer}
              addToPlaylist={handleAddToPlaylist}
              removeFromPlaylist={handleRemoveFromPlaylist}
              playlist={playlist}
            />
          ))}
        </TableList>
    </Table>
  );
};

export default FilteredSongs;
