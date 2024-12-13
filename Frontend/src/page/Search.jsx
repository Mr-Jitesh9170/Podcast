import "../styles/search.scss"
import { DashboardIcons, SearchData } from "../data/data";
import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div className="search-container">
      <div className="search-Top">
        <div className="search-top-icon" >{DashboardIcons.searchIcon}</div>
        <input type="text" placeholder="Search Artist/Podcast....." value={search} onChange={e => handleSearch(e)} />
      </div>
      <div className="search-bottom">
        {
          SearchData.map(({ name, color, img }) => {
            if (name.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase())) {
              return (
                <>
                  <div className="search-boxes" style={{ backgroundColor: `${color}` }}>
                    <div>{name}</div>
                    <img src={img} alt="" />
                  </div>
                </>
              )
            }
          })
        }
      </div>
    </div>
  )
}

export default Search;