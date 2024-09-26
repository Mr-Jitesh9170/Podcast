import { Home } from "./page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashBoard } from "./page/DashBoard";
import { Search } from "./page/Search";
import { Favourites } from "./page/Favourites";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favourites" element={<Favourites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App; 