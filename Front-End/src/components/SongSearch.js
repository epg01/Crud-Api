import React, { useState, useEffect } from "react";
import SongDetail from "./SongDetail";
import SongForm from "./SongForm";
import Loader from "./Loader";
import { helpHttp } from "../helper/helpHttp";

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { user, song } = search;
      let artistUrl = `http://localhost:8000/{user}`;
      let songUrl = `https://api.lyrics.ovh/v1/${user}/${song}`;
      //console.log(artistUrl, songUrl);

      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);

      //console.log(artistRes, songRes);

      setBio(artistRes);
      setLyric(songRes);

      setLoading(false);
    };
    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    //console.log(data);
    setSearch(data);
  };

  return (
    <div>
      <h2>Song search</h2>
      <article className="grid-1-3">
        {loading && <Loader />}
        <SongForm handleSearch={handleSearch} />
        {search && !loading && (
          <SongDetail search={search} lyric={lyric} bio={bio} />
        )}
      </article>
    </div>
  );
};

export default SongSearch;
