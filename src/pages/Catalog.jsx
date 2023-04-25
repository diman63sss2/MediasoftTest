import React, {useEffect, useState} from 'react';
import {useFetching} from "../components/hooks/useFetching";
import {getProducts} from "../http/catalogAPI";
import CatalogList from "../components/Catalog/CatalogList/CatalogList";

const Catalog = () => {

    const [products, setProducts] = useState([]);

    const [fetchProducts, isProductsLoading] = useFetching(async () => {
        const response = await getProducts();
        console.log(response.data)
        setProducts(response.data);
    })

    useEffect(() => {
            fetchProducts().then()
        }, // eslint-disable-next-line
        [])

    return (
        <section class={'catalog'}>
            { isProductsLoading ?
                <div className="container">
                    Загрузка
                </div> :
                <div className="container">
                    <CatalogList products={products}/>
                </div>
            }
        </section>
    );
};

export default Catalog;