import React from "react";
import ConfirmedEmail from "./ConfirmedEmail/index";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/confirmed-email" element={<ConfirmedEmail />} />
    </Routes>
  );
}

export default App;
