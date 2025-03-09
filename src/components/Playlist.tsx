import Table from "./ui/Table";
import Track from "./Track";
import TableList from "./ui/TableList";

interface PlaylistProps {
  playlist: { songName: string; singer: string }[];
  removeFromPlaylist: (song: { songName: string; singer: string }) => void;
}

const Playlist: React.FC<PlaylistProps> = ({
  playlist,
  removeFromPlaylist,
}) => {
  return (
    <Table>
      <TableList className="h-[90%]">
        {playlist.map((song, index) => (
          <Track
            key={index}
            songName={song.songName}
            singer={song.singer}
            addToPlaylist={() => {}}
            removeFromPlaylist={removeFromPlaylist}
            playlist={playlist}
          />
        ))}
      </TableList>

      <button className="rounded-xl bg-purple-400 p-2 text-white hover:bg-purple-500 hover:cursor-pointer">
        Add to Spotify
      </button>
    </Table>
  );
};

export default Playlist;
