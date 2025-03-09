import Track from "./Track";
import Table from "./ui/Table";
interface Props {
  playlist: { songName: string; singer: string }[];
}

function Playlist({ playlist }: Props) {
  return (
    <Table>
      {playlist.map((song, index) => (
        <Track key={index}
          songName={song.songName} singer={song.singer}
        />
      ))}
    </Table>
  );
}

export default Playlist;
