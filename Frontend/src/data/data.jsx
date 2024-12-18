import Upload from "../page/upload.jsx"
import { LogIn } from "../page/auth.jsx"
import { MdHome } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { MdOutlineFavorite } from "react-icons/md";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { IoReorderThreeSharp } from "react-icons/io5";
import { MdCloudUpload } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { MdLogin } from "react-icons/md";



// All left side dashboard icons =>
const HomeIcon = <MdHome size={27} />
const SearchIcon = <IoSearch size={27} />
const FavruitIcon = <MdOutlineFavorite size={27} />
const AccountIcon = <RiAccountPinCircleFill size={27} />
const ThreeDashIcon = <IoReorderThreeSharp size={27} color="#fff" />
const UploadIcon = <MdCloudUpload size={27} />
const CrossButtonIcon = <RxCross2 size={27} />
const LoginIcon = <MdLogin size={27} />





export const DashboardIcons = {
  homeIcon: HomeIcon,
  searchIcon: SearchIcon,
  favouritesIcon: FavruitIcon,
  accountIcon: AccountIcon,
  threeDashIcon: ThreeDashIcon,
  crossIcon: CrossButtonIcon
}


// ==============================================================================================>
//  =============================== DASHBOARD PAGE DATA ======================================>
// =====================================================================================>

export const leftDashBoard = [
  {
    name: "Dashboard",
    img: HomeIcon,
    route: "/podcast/dashboard"
  },
  {
    name: "Search",
    img: SearchIcon,
    route: "/podcast/search"
  },
  {
    name: "Favourites",
    img: FavruitIcon,
    route: "/podcast/favourites"
  },
  {
    name: "Upload",
    img: UploadIcon,
    route: <Upload />
  },
  {
    name: "Log in",
    img: LoginIcon,
    route: <LogIn />
  },
]

// ==============================================================================================>
//  =============================== SEARCH PAGE DATA ======================================>
// =====================================================================================>



export const SearchData = [
  {
    name: "Culture",
    img: "https://media.npr.org/assets/img/2020/12/07/99percent_custom-ad44d7569e602b2698267142396e71e91c539149.jpg",
    color: "#e8562a"
  },
  {
    name: "Business",
    img: "https://m.media-amazon.com/images/I/41-7FShV-3L.jpg",
    color: "#c9b2ab"
  },
  {
    name: "Education",
    img: "https://m.media-amazon.com/images/M/MV5BMTc0Mjg1Nzc0MF5BMl5BanBnXkFtZTcwODM5OTcwOQ@@._V1_.jpg",
    color: "#8cabaa"
  },
  {
    name: "Health",
    img: "https://m.media-amazon.com/images/M/MV5BMjNjYjJkYTYtYjI5Zi00NWE4LWFiZjItMjM0N2VlZjgxY2U0XkEyXkFqcGdeQXVyNzg3NjQyOQ@@._V1_.jpg",
    color: "#62bf62"
  },
  {
    name: "Comedy",
    img: "https://deadline.com/wp-content/uploads/2023/03/LLZA-_Prime-Video-Brings-Trevor-Noah-Home-To-Host-Its-First-South-African-Original_LOL-Last-One-Laughing-South-Africa.jpg?w=1024",
    color: "#ed4c59"
  },
  {
    name: "News",
    img: "https://i.scdn.co/image/1b5af843be11feb6c563e0d95f5fe0dad659b757",
    color: "#ba7538",
  },
  {
    name: "Science",
    img: "https://t3.ftcdn.net/jpg/02/06/22/40/360_F_206224040_ejMSpHtBCxGpzM96b3rKPCkbqhfZNUpr.jpg",
    color: "#6c9dad",
  },
  {
    name: "History",
    img: "https://ssl-static.libsyn.com/p/assets/6/b/f/e/6bfe939ed4336498/HHA-1400px_b.jpg?crop=1:1,offset-y0",
    color: "#de577f"
  },
  {
    name: "Religion",
    img: "https://d1bsmz3sdihplr.cloudfront.net/media/podcast-shows/BP_podcast_cover_2-optimized.jpg",
    color: "#aeb4b5"
  },
  {
    name: "Development",
    img: "https://i.scdn.co/image/ab6765630000ba8a1d971613512218740199a755",
    color: "#74d0d6"
  },
  {
    name: "Sports",
    img: "https://api.wbez.org/v2/images/5f8278f7-6fbf-46b5-bdc1-dab0e31bf050.jpg?mode=FILL&width=696&height=696",
    color: "#7dba3c"
  },
  {
    name: "Crime",
    img: "https://images.squarespace-cdn.com/content/v1/5b6a11479f87707f6722bd01/1541786848970-Y0SCCZBCEY6OAE790VFB/MFM.jpg?format=1000w",
    color: "#6c4bb8"
  },

]

// ==============================================================================================>
//  =============================== UPLOAD PAGE DATA ======================================>
// =====================================================================================>

export const categories = ["Culture", "Business", "Education", "Health", "Comedy", "News", "Science", "History", "Religion", "Developements", "Sports", "Crime"]