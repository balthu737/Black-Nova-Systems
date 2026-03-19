import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import Manual from "./pages/manual";
import Automatico from "./pages/automatico";
import Buscar from "./pages/buscar";

function app(){
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/manual" element={<Manual />} />
      <Route path="/automatico" element={<Automatico />} />
      <Route path="/buscar" element={<Buscar />} />
    </Routes>
);
}


export default app;