import React, { createContext, useState } from "react";
import Routing from "./routing";

export const Userdetails = createContext();

const Navigation = () => {
  const [username, setUsername] = useState(0);

  const changename = () => {
    setUsername(username + 1);
  };

  return (
    <Userdetails.Provider value={{ username, changename }}>
      <Routing/>
    </Userdetails.Provider>
  );
};

export default Navigation;
