import "../styles/search.scss"
import { DashboardIcons, SearchData } from "../data/data";
import { useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div className="search-container">
      <div className="search-Top">
        <div className="search-top-icon" >{DashboardIcons.searchIcon}</div>
        <input type="text" placeholder="Search Artist/Podcast" value={search} onChange={e => handleSearch(e)} />
      </div>
      <div className="search-bottom">
        {
          SearchData.map(({ name, color, img }) => {
            if (name.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase())) {
              return (
                <Link className="search-boxes" style={{ backgroundColor: `${color}` }} to={`/podcast/search/${name.toLowerCase()}`}  >
                  <div className="name">{name}</div>
                  <img src={img} alt="" />
                </Link>
              ) 
            }
          })
        }
      </div>
    </div>
  )
}

export default Search;