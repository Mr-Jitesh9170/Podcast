import "../styles/search.scss"
import { podcastCategories } from "../data/data";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div className="search-container">
      <div className="search-Top">
        <div className="search-top-icon" >
          <IoSearch size={27} />
        </div>
        <input type="text" placeholder="Search Artist/Podcast" value={search} onChange={e => handleSearch(e)} />
      </div>
      <div className="search-bottom">
        {
          podcastCategories.map(({ name, color, img }) => {
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