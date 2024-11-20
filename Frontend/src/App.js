import { Home } from "./page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashBoard } from "./page/DashBoard";
import { Search } from "./page/Search";
import { Favourites } from "./page/Favourites";
import { Profile } from "./page/profile";
import { ErrorPage } from "./error/error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="/podcast/dashboard" element={<DashBoard />} />
          <Route path="/podcast/search" element={<Search />} />
          <Route path="/podcast/favourites" element={<Favourites />} />
          <Route path="/podcast/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 