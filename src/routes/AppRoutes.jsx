import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicial from "../pages/Inicial";
import Sobre from "../pages/Sobre";
import Body from "../layout/Body";
import PrincipiosCard from "../pages/principios";
import Theme from "../pages/theme";

export default function AppRoutes() {
  return (
    <BrowserRouter> 
      <Routes> 
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Inicial />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/principios" element={<PrincipiosCard />} />
          <Route path="/info" element={<Theme />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
