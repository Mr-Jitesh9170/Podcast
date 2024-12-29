import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorPage } from "./error/error";
import Category from "./components/category/category.jsx";
import PodcastDetails from "./components/showpodcast/podcastDetails.jsx";
import { AudioPlayer } from "./components/audio/audio.jsx";
import "./app.scss"
import { VideoPlayer } from "./components/video/video.jsx"
import { MediaPlayerContext, OpenContext } from "./context/context.jsx";
import Home from "./page/home.jsx";
import DashBoard from "./page/dashBoard.jsx";
import Search from "./page/search.jsx";
import Favourites from "./page/favourites.jsx";
import Profile from "./page/profile.jsx";
import Upload from "./page/upload.jsx";
import Auth from "./page/auth.jsx";


function App() {
  const { media } = useContext(MediaPlayerContext);
  const { open } = useContext(OpenContext);
  

  return (
    <div className="app">
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
        {open.isAuthOpen && < Auth />}
        {open.isUploadOpen && <Upload />}
      </BrowserRouter>
    </div>
  );
}

export default App; 