
interface props {
  songName: string;
  singer: string;
}
function Track({ songName, singer }: props) {
  return (
    <div className="flex flex-col">
      {songName}
      {singer}
    </div>
  );
}

export default Track;
