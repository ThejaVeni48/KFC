import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import One from "./one";
import Two from "./two";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={One}/>
        <Route path="/two" Component={Two}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
