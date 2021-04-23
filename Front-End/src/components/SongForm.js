import React, { useState } from "react";

const initialForm = {
  User: "",
  song: "",
};

const SongForm = ({ handleSearch }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      //se extrae name si artist o song, con los corchetes ago dinamico el objeto
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.User) {
       alert("datos completos berriendo");
       return;
    }
    handleSearch(form);
    setForm(initialForm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="User"
          placeholder="Nombre del intérprete"
          onChange={handleChange}
          value={form.User}
        />
	  {/*        <input
          type="text"
          name="song"
          placeholder="Nombre de la cancion"
          onChange={handleChange}
          value={form.song}
          /> */}
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default SongForm;
