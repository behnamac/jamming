import Table from "./ui/Table";
import Track from "./Track";

interface PlaylistProps {
  playlist: { songName: string; singer: string }[];
  removeFromPlaylist: (song: { songName: string; singer: string }) => void;
}

const Playlist: React.FC<PlaylistProps> = ({ playlist, removeFromPlaylist }) => {
  return (
    <Table>
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
    </Table>
  );
}

export default Playlist;
