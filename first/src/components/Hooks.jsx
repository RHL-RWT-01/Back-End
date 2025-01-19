import React, { useState, useEffect } from "react";

function Hooks() {
  const [id, setId] = useState(1);
  const [data, setData] = useState();

  useEffect 
    (() => {
      fetch(`https://jsonplaceholder.typicode.com/todos${id}`)
        .then((response) => response.json())
        .then((data) => setData(data));
    },
    []);
  return (
    <>
      <div>Todos</div>
      <div>id:{id}</div>
      <div>title:{data.title}</div>
      <div>completed:{data.completed}</div>
      <div>userId:{data?.userId}</div>
      <button onClick={() => setId(id + 1)}>Increment</button>
    </>
  );
}

export default Hooks;
