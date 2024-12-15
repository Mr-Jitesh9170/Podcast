import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorPage } from "./error/error";
import HashLoader from "react-spinners/HashLoader";

const Home = lazy(() => import("./page/home.jsx"))
const DashBoard = lazy(() => import("./page/dashBoard.jsx"))
const Search = lazy(() => import("./page/search.jsx"))
const Favourites = lazy(() => import("./page/favourites.jsx"))
const Profile = lazy(() => import("./page/profile.jsx"))
const VideoPlayer = lazy(() => import("./components/videoPlayer/videoPlay.jsx"))


function App() {

  return (
    <Suspense fallback={
      <HashLoader style={{ display: "flex", alignItems: "center", justifyContent: "center" }} size={80} />
    }>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}  >
            <Route path="/podcast/dashboard" element={<DashBoard />} />
            <Route path="/podcast/search" element={<Search />} />
            <Route path="/podcast/favourites" element={<Favourites />} />
            <Route path="/podcast/profile" element={<Profile />} />
            <Route path="/podcast/video" element={<VideoPlayer />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}


export default App; 