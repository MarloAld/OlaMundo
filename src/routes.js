import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Paginas/Inicio/Inicio";
import SobreMim from "./Paginas/Sobremim/Sobremim";
import Menu from "./Componentes/Menu";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>

      <Routes>
        <Route
          path="/"
          element={<Inicio />}
        />
        <Route
          path="/sobremim"
          element={<SobreMim />}
        />
        <Route
          path="*"
          element={<div>Página não encontrada</div>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;