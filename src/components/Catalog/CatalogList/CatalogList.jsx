import React from 'react';
import cl from './CatalogList.module.css'
import CatalogListItem from "../CatalogListItem/CatalogListItem";
const CatalogList = ({products}) => {

    return (
        <div className={cl.list}>
            {products.map(product =>
                <CatalogListItem product={product} key={product.id}/>
            )}
        </div>
    );
};

export default CatalogList;