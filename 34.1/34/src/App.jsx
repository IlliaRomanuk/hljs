import React from "react";
import { Routes, Route } from "react-router-dom";
import ProdTable from "./components/productTablke";
import ProdPreview from "./components/productPreview";
import Log from "./components/loginationm";
function App() {
  return (
    <Routes>
      <Route path="/productPreview" element={<ProdPreview />}></Route>
      <Route path="/productTable" element={<ProdTable />}></Route>
      <Route path="/" element={<Log />}></Route>
    </Routes>
  );
}

export default App;
