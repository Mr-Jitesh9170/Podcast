import "../styles/search.scss"
import { podcastCategories } from "../data/data";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { OpenContext, UserContext } from "../context/context";

const Search = () => {
  const [search, setSearch] = useState('');
  const { isUser } = useContext(UserContext)
  const { openAuthTab } = useContext(OpenContext)
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
          podcastCategories.filter(({ name }) => name.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase())).map(({ name, color, img }) => {
            if (isUser) {
              return (
                <Link className="search-boxes" style={{ backgroundColor: `${color}` }} to={`/podcast/search/${name.toLowerCase()}`}  >
                  <div className="name">{name}</div>
                  <img src={img} alt="" />
                </Link>
              )
            } else {
              return (
                <div className="search-boxes" style={{ backgroundColor: `${color}` }} to={`/podcast/search/${name.toLowerCase()}`} onClick={openAuthTab}>
                  <div className="name">{name}</div>
                  <img src={img} alt="" />
                </div>
              )
            }
          })
        }
      </div>
    </div>
  )
}

export default Search;