import React from "react";
import CrudTableRow from "./CrudTableRow";

export default function CrudTable({ data, setDataToEdit, deleteData }) {
  //console.log(data);
  return (
    <div>
      <h3>tabla de datos</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>CreateDate</th>
            <th>UpdateDate</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <CrudTableRow
                key={el.id}
                el={el}
                deleteData={deleteData}
                setDataToEdit={setDataToEdit}
              />
            ))
          ) : (
            <tr>
              <td colSpan="3">
                <h1 style={{ backgroundColor: "#dc3545", color: "#fff" }}>
                  Sin datos
                </h1>
              </td>
            </tr>
          )}

          {/* {console.log( data.map)}       */}
        </tbody>
      </table>
    </div>
  );
}
