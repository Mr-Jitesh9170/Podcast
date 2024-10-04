import LoginIcon from "../assets/login.svg"

// All left side dashboard icons =>
const HomeIcon = <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="HomeRoundedIcon"  ><path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"></path></svg>
const SearchIcon = <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SearchRoundedIcon" width={24}  ><path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
const FavruitIcon = <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FavoriteRoundedIcon"><path d="M13.35 20.13c-.76.69-1.93.69-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29 2.64-1.8 5.9-.96 7.66 1.1 1.76-2.06 5.02-2.91 7.66-1.1 1.41.96 2.28 2.59 2.34 4.29.14 3.88-3.3 6.99-8.55 11.76l-.1.09z"></path></svg>

const AccountIcon = <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PersonIcon" ><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
const ThreeDashIcon = <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MenuIcon"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
const CrossButtonIcon = <svg width={20} fill="#f2f3f4" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CloseRoundedIcon"  ><path d="M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path></svg>

let UploadIcon = <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="BackupRoundedIcon"><path d="M19 11c0-3.87-3.13-7-7-7-3.22 0-5.93 2.18-6.74 5.15C2.82 9.71 1 11.89 1 14.5 1 17.54 3.46 20 6.5 20h12c2.49-.01 4.5-2.03 4.5-4.52 0-2.33-1.75-4.22-4-4.48zm-6 2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2H9.21c-.45 0-.67-.54-.35-.85l2.79-2.79c.2-.2.51-.2.71 0l2.79 2.79c.31.31.09.85-.35.85H13z"></path></svg>
let LogoutIcon = <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ExitToAppRoundedIcon"><path d="M10.79 16.29c.39.39 1.02.39 1.41 0l3.59-3.59c.39-.39.39-1.02 0-1.41L12.2 7.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L12.67 11H4c-.55 0-1 .45-1 1s.45 1 1 1h8.67l-1.88 1.88c-.39.39-.38 1.03 0 1.41zM19 3H5c-1.11 0-2 .9-2 2v3c0 .55.45 1 1 1s1-.45 1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1v3c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></svg>
let LightModeIcon = <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LightModeRoundedIcon"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg>



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

export const leftDashBoardTop = [
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
]

export let leftDashBoardBottom = [
  {
    name: "Upload",
    img: UploadIcon,
  },
  {
    name: "Log in",
    img: LogoutIcon,
  },
]

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

export const DashBoardData = [
  {
    name: "Most Popular",
    data
  },
  {
    name: "Comedy",
    data
  },
  {
    name: "News",
    data
  },
  {
    name: "Crime",
    data
  },
  {
    name: "Sports",
    data
  }
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
//  =============================== FAVOURITES PAGE DATA ======================================>
// =====================================================================================>

export const AllFavourites = [
  {
    name: 1,
    img: ""
  },
  {
    name: 2,
    img: ""
  },
  {
    name: 3,
    img: ""
  },
  {
    name: 4,
    img: ""
  },
]

// ==============================================================================================>
//  =============================== UPLOAD PAGE DATA ======================================>
// =====================================================================================>

export const UploadSelectionData = ["Culture", "Business", "Education", "Health", "Comedy", "News", "Science", "History", "Religion", "Developements", "Sports", "Crime"]



