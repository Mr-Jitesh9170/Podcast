import "../styles/DashBoard.scss"
import { Card } from "../components/card/card.jsx";
import { useEffect, useState } from "react";
import { categoryLists } from "../apis/upload.js";
import { podcastCategories } from "../data/data.jsx";

const DashBoard = () => {
  const [allCategories, setAllCategories] = useState({});
  const [seeAll, setSeeAll] = useState(
    {
      isOpened: "",
      isHide: false
    }
  )

  const getAllCategoriesData = async () => {
    try {
      await Promise.all(podcastCategories.map(async ({ name }) => {
        let categoryData = await categoryLists(name);
        await setAllCategories((prevState) => ({ ...prevState, [name]: categoryData }))
      }))
    } catch (error) {
      console.log(error, "<--- error in getAllCategoriesData data!")
    }
  }

  const seeAllHandler = (index) => {
    setSeeAll({ isOpened: index, isHide: !seeAll.isHide })
  }

  useEffect(() => {
    getAllCategoriesData();
  }, [])
  return (
    <div className="Dashboard-container">
      {
        podcastCategories.map(({ name }, i) => {
          if (allCategories[name]?.length) {
            return (
              <div className="dashboard-child-container" key={i} style={seeAll.isOpened === i && seeAll.isHide ? { height: "fit-content" } : {height:"60%"}}>
                <div className="child-top">
                  <h2>{name}</h2>
                  <span onClick={() => seeAllHandler(i)} >{seeAll.isHide && i === seeAll.isOpened ? "Hide all" : "Show all"}</span>
                </div>
                <div className="child-bottom-content">
                  {
                    allCategories[name]?.map((podcastData, j) => {
                      return <Card podcast={podcastData} key={j} />
                    })
                  }
                </div>
              </div>
            )
          }
        })
      }
    </div >
  )
}

export default DashBoard