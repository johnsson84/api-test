import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Startpage from "./pages/Startpage";
import Api1 from "./pages/Api1";
import Api2 from "./pages/Api2";

function App() {
  return (
    <section>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Startpage />} />
          <Route exact path="/api1" element={<Api1 />} />
          <Route exact path="/api2" element={<Api2 />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
