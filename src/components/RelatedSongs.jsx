import SongBar from "./SongBar";

const RelatedSongs = ({
  artistId,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  data,
}) => {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl text-white">Related songs</h1>
      <div className="flex flex-col w-full mt-6">
        {data.map((song, i) => {
          return (
            <SongBar
              key={`${song.key}-${artistId}`}
              song={song}
              artistId={artistId}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={handlePlayClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedSongs;
