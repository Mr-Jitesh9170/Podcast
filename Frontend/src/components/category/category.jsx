import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./category.scss";
import { Card } from "../card/card";
import { categoryLists } from "../../apis/upload";

const Category = () => {
    const { category } = useParams();
    const [categorylists, setCategoryLists] = useState([])


    useEffect(() => {
        categoryLists(category, setCategoryLists)
    }, [])

    return (
        <div className="categoryContainer">
            <div className="categorylists">
                <h1>{category}</h1>
                <div className="card" >
                    {
                        categorylists?.map((categrylist) => {
                            return <Card isMedia={categrylist.isMedia} thumbNail={categrylist.episodeImgPath} name={categrylist.userId.name} episodeName={categrylist.episodeName} episodeDes={categrylist.episodeDescription} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Category;