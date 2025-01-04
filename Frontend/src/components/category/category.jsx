import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./category.scss";
import { Card } from "../card/card";
import { categoryLists } from "../../apis/upload";
import useLoader from "../../hooks/loader";

const Category = () => {
    const { category } = useParams();
    const [categorylists, setCategoryLists] = useState([])
    const { setLoading, loading, Loader } = useLoader();

    const getCategoryData = async () => {
        let categoryData = await categoryLists(category);
        setCategoryLists(categoryData);
    }
    useEffect(() => {
        getCategoryData().finally(() => {
            setLoading(false)
        });
    }, [])
    return (
        <div className="container">
            <div className="episodesContainer" >
                <h2>{category}</h2>
                <div className="card">
                    {
                        loading ? <Loader /> :
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