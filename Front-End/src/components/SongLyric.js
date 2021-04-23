import React from "react";

const SongLyric = ({ lyrics, title }) => {
  return (
    <section>
      <h3>{title}</h3>
      <blockquote style={{ whiteSpace: "pre-wrap", color: "white" }}>
        {lyrics}{" "}
      </blockquote>
    </section>
  );
};

export default SongLyric;
