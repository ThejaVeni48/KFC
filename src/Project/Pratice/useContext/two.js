import React, { useContext } from "react";
import { Userdetails } from "./context";

const Two = () => {
  const two = useContext(Userdetails);

  const changename = () => {
    two.changename();
  };

  return (
    <>
      <h2>Two</h2>
      <h2>Theja {two.username}</h2>
    </>
  );
};

export default Two;
