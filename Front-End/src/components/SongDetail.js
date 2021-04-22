import React from "react";
import Message from "./Message";
import SongArtis from "./SongArtis";
import SongLyric from "./SongLyric";

const SongDetail = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null;

  return (
    <>
      {lyric.error || lyric.err || lyric.name === "AbortError" ? (
        <Message
          msg={`Error: el artista no  existe '<em>${search.song}</em>'`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyric title={search.song} lyrics={lyric.lyrics} />
      )}

      {bio.artists ? (
        <SongArtis artist={bio.artists[0]} />
      ) : (
        <Message
          msg={`Error:La canción no existe '<em> ${search.artist} </em>'`}
          bgColor="#dc3545"
        />
      )}
    </>
  );
};

export default SongDetail;
