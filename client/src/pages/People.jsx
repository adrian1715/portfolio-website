import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function People() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const res = await axios
        .get("http://localhost:8000/api/people")
        .catch((err) => console.log(err));

      setData(res.data);
    }
    fetchData();
  }, [data]);

  async function deleteHandler(id) {
    const res = await axios.delete(`http://localhost:8000/api/people/${id}`);
  }

  return (
    <>
      <Outlet />
      <div className="d-flex justify-content-between">
        <h1 className="">People</h1>
        <Link to="new" className="d-flex align-items-center btn btn-primary">
          Add person
        </Link>
      </div>
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id} className="mb-2">
              {item.name}-
              <form
                className="d-inline-block"
                onSubmit={(e) => {
                  e.preventDefault();
                  deleteHandler(item.id);
                  console.log(`${item.name} deleted`);
                }}
              >
                <button className="text-danger">Delete</button>
              </form>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
