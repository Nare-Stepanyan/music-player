import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { useGetSongsByCountryQuery } from "../redux/services/shazamCore";
import { countryCodes } from "./../assets/constants";

const AroundYou = () => {
  const [countryCode, setCountryCode] = useState("");
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByCountryQuery({
    countryCode,
  });

  useEffect(() => {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country?apiKey=at_z4hCNvxdGY129OtsxvrNNvbyvRWso`
      )
      .then((res) => {
        const country = res?.data?.location?.country;
        if (countryCodes.includes(country)) {
          setCountryCode(country);
        } else setCountryCode("US");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, [countryCode]);

  if (isFetching && loading) return <Loader title="Loading songs around you" />;
  if (error && countryCode) return <Error />;
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Around you
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => {
          return (
            <SongCard
              key={song.key}
              song={song}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AroundYou;
