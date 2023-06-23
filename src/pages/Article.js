import React from 'react';
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import {SingleArticle} from '../components/SingleArticle';


export const Article = () => {
    const {search} = useLocation();
    const id = search.slice(4);
    const {articles} = React.useContext(useContext);
    const article = articles.find(item => String(item.id) === id) || {};
    return (
        <SingleArticle data={article}/>
    )
}