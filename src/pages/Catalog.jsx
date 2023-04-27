import React, {useEffect, useState} from 'react';
import {useFetching} from "../components/hooks/useFetching";
import {getProducts} from "../http/catalogAPI";
import CatalogList from "../components/Catalog/CatalogList/CatalogList";
import CatalogFilters from "../components/Catalog/CatalogFilters/CatalogFilters";
import CatalogPagination from "../components/Catalog/CatalogPagination/CatalogPagination";

const Catalog = () => {

    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({
        sort: "title",
        page: 1,
        onPage: 8
    })
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
        <section className={'catalog'}>
            { isProductsLoading ?
                <div className="container">
                    Загрузка
                </div> :
                <div className="container">
                    <CatalogFilters filters={filters} setFilters={setFilters}/>
                    <CatalogList products={products.sort(function(a,b){
                        switch (filters.sort) {
                            case 'title':
                                return a.title.localeCompare(b.title);
                            case 'price':
                                return a.price - b.price;
                            case 'rate':
                                return a.rating.rate - b.rating.rate;
                            case 'popular':
                                return a.rating.count - b.rating.count;
                        }
                    })} filters={filters}/>
                    <CatalogPagination elements={products.length} filters={filters} setFilters={setFilters}/>
                </div>
            }
        </section>
    );
};

export default Catalog;