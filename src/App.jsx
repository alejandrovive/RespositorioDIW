import Home from './Pages/Home';
import '../src/Estilos/estilos.scss';
import Footer from './Componentes/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Componentes/Menu";
import Tema1 from "./Pages/Tema1";
import Tema2 from "./Pages/Tema2";
import Tema3 from "./Pages/Tema3";
import Tema4 from './Pages/Tema4';
function App() {
  return (
    <BrowserRouter>
  <Menu />
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/tema1' element={<Tema1 />} />
       <Route path="/tema2" element={<Tema2 />} />
       <Route path="/tema3" element={<Tema3 />} />
       <Route path="/tema4" element={<Tema4 />} />
     </Routes>
   <Footer />
</ BrowserRouter>
  )
}

export default App
