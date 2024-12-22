import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorPage } from "./error/error";
import HashLoader from "react-spinners/HashLoader";
import Category from "./components/category/category.jsx";
import { Video } from "./components/video/video.jsx";
import PodcastDetails from "./components/showpodcast/podcastDetails.jsx";

const Home = lazy(() => import("./page/home.jsx"))
const DashBoard = lazy(() => import("./page/dashBoard.jsx"))
const Search = lazy(() => import("./page/search.jsx"))
const Favourites = lazy(() => import("./page/favourites.jsx"))
const Profile = lazy(() => import("./page/profile.jsx"))

 
function App() {
  return (
    <Suspense fallback={
      <HashLoader style={{ display: "flex", alignItems: "center", justifyContent: "center" }} size={80} />
    }>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}  >
            <Route index element={<DashBoard />} />
            <Route path="/podcast/search" element={<Search />} />
            <Route path="/podcast/favourites" element={<Favourites />} />
            <Route path="/podcast/profile" element={<Profile />} />
            <Route path="/podcast/search/:category" element={<Category />} />
            <Route path="/podcast/play/:video" element={<Video />} />
            <Route path="/podcast/podcast-details/:id" element={<PodcastDetails />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App; 