import React, { useState, useEffect } from "react";
import { helpHttp } from "../helper/helpHttp";

import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:8000"; //mi enpoint

  //se ejecuta la primera vez unicamente
  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {

        if (!res.err) {
          setDb(res);


          setError(null);
        } else {
          setDb(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);

  const createData = (data) => {

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    api.post(url, options).then((res) => {

      if (!res.err) {

        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endPoint = `${url}/${data.ID}`;

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    api.put(endPoint, options).then((res) => {

      if (!res.err) {
        let newData = db.map((el) => (el.ID === data.ID ? data : el));
        setDb(newData);

      } else {
        setError(res);
      }
    });

  };

  const deleteData = (id) => {
    let isDelete = window.confirm(`¿estás seguro de su eliminación del usuario '${id}'?`);

    if (isDelete) {
      let endPoint = `${url}/${id}`;

      let options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endPoint, options).then((res) => {
        if (!res.err) {
          let newData = db.filter((el) => el.ID !== id);
          setDb(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  return (
    <div>
      <article>
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && (
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </div>
  );
};

export default CrudApi;
