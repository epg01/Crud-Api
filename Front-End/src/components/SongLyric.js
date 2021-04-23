import React from "react";

const SongLyric = ({ lyrics, title }) => {
  return (
    <section>
      <h3>{title}</h3>
	<blockquote style={{background:"#222", color: "white", paddig:"0px" }}>
        {lyrics}{" "}
      </blockquote>
    </section>
  );
};

export default SongLyric;
