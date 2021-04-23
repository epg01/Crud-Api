import React from "react";
import Message from "./Message";
import SongLyric from "./SongLyric";

const SongDetail = ({ search, lyric }) => {
    if (!lyric) return null;
    
    console.log(lyric);

    return (
	<>
	    {/*	    <SongLyric title={search.song} lyrics={lyric.ID} />
	    <SongLyric title={search.song} lyrics={lyric.User} />
	    <SongLyric title={search.song} lyrics={lyric.State} />
	    <SongLyric title={search.song} lyrics={lyric.CreateDate} />
	    <SongLyric title={search.song} lyrics={lyric.UpdateDate} /> */}

	    {lyric.error || lyric.err || lyric.name === "AbortError" ? (
		<Message
		    msg={`Error: el id no existe`}
		    bgColor="#dc3545"
		/>
	    ) : (
		<SongLyric title={search.song} lyrics={lyric.ID}/>
	    )}

	    {lyric.error || lyric.err || lyric.name === "AbortError" ? (
		<Message
		    msg={`Error: el user '<em>${lyric.User}</em>' no existe`}
		    bgColor="#dc3545"
		/>
	    ) : (
		<SongLyric title={search.song} lyrics={lyric.User}/>
	    )}


	    	    {lyric.error || lyric.err || lyric.name === "AbortError" ? (
		<Message
		    msg={`Error: el State no existe`}
		    bgColor="#dc3545"
		/>
	    ) : (
		<SongLyric title={search.song} lyrics={lyric.State}/>
	    )}


	    	    {lyric.error || lyric.err || lyric.name === "AbortError" ? (
		<Message
		    msg={`Error: el createdate no existe`}
		    bgColor="#dc3545"
		/>
	    ) : (
		<SongLyric title={search.song} lyrics={lyric.CreateDate}/>
		)}


	    {lyric.error || lyric.err || lyric.name === "AbortError" ? (
		<Message
		    msg={`Error: el update no existe`}
		    bgColor="#dc3545"
		/>
	    ) : (
		<SongLyric title={search.song} lyrics={lyric.ID}/>
	    )}
	    


      {/* {bio.artists ? (
        <SongArtis artist={bio.artist} />
      ) : (
        <Message
          msg={`Error:La canción no existe '<em> ${search.artist} </em>'`}
          bgColor="#dc3545"
        />
      )} */}
    </>
  );
};

export default SongDetail;
