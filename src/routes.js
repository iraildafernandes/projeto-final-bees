import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import MulheresBrilham from "./Pages/MulheresQueBrilham";
import Trilhas from "./Pages/Trilhas";
import PaginaNaoEncontrada from "./Pages/Paginanaoencontrada";
import FilmesPage from "./Pages/FilmesPage";
import Contato from "./Pages/Contato";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                {/* Rota para a página Inicial(Home) */}
                <Route path="/" element={ <Home /> } />

                {/* Rota para a página Mulheres que Brilham */}
                <Route path="/mulheresquebrilham" element={ <MulheresBrilham /> } />

                {/* Rota para a página Trilhas Tech */}
                <Route path="/trilhas" element={ <Trilhas /> } />

                {/* Rota para a página Filmes Inspiradores */}
                <Route path="/filmes" element={ <FilmesPage /> } />

                {/* Rota para a página Contato */}
                <Route path="/contato" element={ <Contato /> } />

                {/* Rota para uma página inexistente */}
                <Route path="*" element={ <PaginaNaoEncontrada /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;

