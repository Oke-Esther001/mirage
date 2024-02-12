// import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/api/users").then((res) => {
        console.log(res.data.users);
      setData(res.data.users);
    });
  });
  return (
    <>
      {data.map((user) => {
        <div key={user.id}>
          <p>firstName: {user.firstName}</p>
          <p>gender: {user.gender}</p>
        </div>;
      })}
    </>
  );
};

export default Home;
