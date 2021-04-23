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
      const { User, song } = search;
      let artistUrl = `http://localhost:8000/${User}`;
        let songUrl = `http://localhost:8000/${User}`;	
      console.log(artistUrl, songUrl);

      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);

      console.log(artistRes, songRes);

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
      <h2>Busqueda</h2>
      <article className="grid-1-3">
        {loading && <Loader />}

        <SongForm handleSearch={handleSearch} />
        {search && !loading && <SongDetail search={search} lyric={lyric} />}
      </article>
    </div>
  );
};

export default SongSearch;
