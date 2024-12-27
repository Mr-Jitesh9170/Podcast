import { lazy, Suspense, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorPage } from "./error/error";
import HashLoader from "react-spinners/HashLoader";
import Category from "./components/category/category.jsx";
import PodcastDetails from "./components/showpodcast/podcastDetails.jsx";
import { AudioPlayer } from "./components/audio/audio.jsx";
import "./app.scss"
import { VideoPlayer } from "./components/video/video.jsx"
import { MediaPlayerContext } from "./context/context.jsx";

const Home = lazy(() => import("./page/home.jsx"))
const DashBoard = lazy(() => import("./page/dashBoard.jsx"))
const Search = lazy(() => import("./page/search.jsx"))
const Favourites = lazy(() => import("./page/favourites.jsx"))
const Profile = lazy(() => import("./page/profile.jsx"))


function App() {
  const { media } = useContext(MediaPlayerContext)

  return (
    <div className="app">
      <Suspense fallback={
        <HashLoader style={{ display: "flex", alignItems: "center", justifyContent: "center" }} size={80} />
      }>
        {media?.isMedia === "Audio" && <AudioPlayer media={media} />}
        {media?.isMedia === "Video" && <VideoPlayer media={media} />}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}  >
              <Route index element={<DashBoard />} />
              <Route path="/podcast/search" element={<Search />} />
              <Route path="/podcast/favourites" element={<Favourites />} />
              <Route path="/podcast/profile" element={<Profile />} />
              <Route path="/podcast/search/:category" element={<Category />} />
              <Route path="/podcast/podcast-details/:id" element={<PodcastDetails />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App; 