import React from 'react';
import cl from './CatalogList.module.css'
import CatalogListItem from "../CatalogListItem/CatalogListItem";
const CatalogList = ({products, filters}) => {
    console.log('CatalogList')
    console.log(filters.sort)
    const indexOfLastPost = filters.page * filters.onPage;
    const indexOfFirstPost = indexOfLastPost - filters.onPage;
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);
    return (
        <div className={cl.list}>
            {currentPosts.map(product =>
                <CatalogListItem product={product} key={product.id}/>
            )}
        </div>
    );
};

export default CatalogList;