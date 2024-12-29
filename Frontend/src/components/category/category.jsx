import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./category.scss";
import { Card } from "../card/card";
import { categoryLists } from "../../apis/upload";
import { OpenContext, UserContext } from "../../context/context";

const Category = () => {
    const { isUser } = useContext(UserContext)
    const { openAuthTab } = useContext(OpenContext)
    const { category } = useParams();
    const [categorylists, setCategoryLists] = useState([])

    const getCategoryData = async () => {
        let categoryData = await categoryLists(category);
        setCategoryLists(categoryData);
    }
    useEffect(() => {
        getCategoryData();
    }, [])
    return (
        <>
            {
                isUser ?
                    <div className="categoryContainer">
                        <h2>{category}</h2>
                        <div className="card" >
                            {
                                categorylists?.map((categrylist) => {
                                    return <Card podcast={categrylist} />
                                })
                            }
                        </div>
                    </div> : (openAuthTab())
            }
        </>
    )
}

export default Category;