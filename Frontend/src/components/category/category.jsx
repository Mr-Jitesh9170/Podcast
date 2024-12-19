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
                <h2>{category}</h2>
                <div className="card" >
                    {
                        categorylists?.map((categrylist) => {
                            return <Card podcast={categrylist} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Category;