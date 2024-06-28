import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Paginas/Inicio/Inicio";
import SobreMim from "./Paginas/Sobremim/Sobremim";
import Menu from "./Componentes/Menu";
import Rodape from "Componentes/Rodape";
import PaginaPadrao from "Componentes/PaginaPadrao";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route
            index
            element={<Inicio />}
          />
          <Route
            path="sobremim"
            element={<SobreMim />}
          />
        </Route>

        <Route
          path="*"
          element={<div>Página não encontrada</div>}
        />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
