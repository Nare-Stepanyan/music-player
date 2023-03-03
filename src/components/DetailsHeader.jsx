import { Link } from "react-router-dom";

const DetailsHeader = ({ artistId, songData, artistData }) => {
  const artist = artistData?.attributes;
  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28 rounded-3xl" />
      <div className="absolute inset-0 flex flex-center m-2">
        <img
          alt="artist image"
          src={
            artistId
              ? artist?.artwork?.url.replace("{w}", "500").replace("{h}", "500")
              : songData?.images?.coverart
          }
          className="sm:w-40 w-20 sm:h-40 h-20 rounded-full object-cover border-2 shadow-xl shadow-black"
        />
        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">
            {artistId ? artist?.name : songData?.title}
          </p>
          {!artistId && (
            <Link to={`/artists/${songData?.artists[0]?.adamId}`}>
              <p className="text-base text-gray-400 mt-2">
                {songData?.subtitle}
              </p>
            </Link>
          )}
          <p className="text-base text-gray-400 mt-2">
            {artistId ? artist?.genreNames[0] : songData?.genres?.primary}
          </p>
        </div>
      </div>
      <div className="w-full h-16" />
    </div>
  );
};

export default DetailsHeader;
