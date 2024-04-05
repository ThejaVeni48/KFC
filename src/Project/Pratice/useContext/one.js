import React, { useContext } from "react";
import { Userdetails } from "./context";

const One = () => {
  const globalinfo = useContext(Userdetails);

  const changename = () => {
    globalinfo.changename();
  };

  return (
    <>
      <h1>About Screen</h1>
      <h3>I'm from Navigation, global info {globalinfo.username}</h3>
      <button onClick={changename}>Change Name</button>
    </>
  );
};

export default One;
