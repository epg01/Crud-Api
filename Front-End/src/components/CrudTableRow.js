import React from "react";

export default function CrudTableRow({ el, setDataToEdit, deleteData }) {
  return (
    <tr>
      <td>{el.ID}</td>
      <td>{el.User}</td>
      <td>{el.CreateDate}</td>
      <td>{el.UpdateDate}</td>
      <td>{el.State}</td>

      <td>
        <button onClick={() => setDataToEdit(el)}> Editar</button>

        <button onClick={() => deleteData(el.ID)}> Elimiar</button>
      </td>
    </tr>
  );
}
