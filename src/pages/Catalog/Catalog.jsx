import React, {useEffect, useState} from 'react';
import {useFetching} from "../../components/hooks/useFetching";
import {getProducts} from "../../http/catalogAPI";
import CatalogList from "../../components/Catalog/CatalogList/CatalogList";
import CatalogFilters from "../../components/Catalog/CatalogFilters/CatalogFilters";
import CatalogPagination from "../../components/Catalog/CatalogPagination/CatalogPagination";
import CatalogCategories from "../../components/Catalog/CatalogCategories/CatalogCategories";
import cl from './catalog.module.css';
import filterByProperty from "../../untils/filterCategory";

const Catalog = () => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState(null);
    const [filters, setFilters] = useState({
        sort: "title",
        page: 1,
        onPage: 8,
        category: null
    });

    const [fetchProducts, isProductsLoading] = useFetching(async () => {
        const response = await getProducts();
        setProducts(response.data);
        /*add field for compare*/
        response.data.filter((product) => {
            product.compare = false;
            return product
        })
        setFilteredProducts(response.data);
    })

    useEffect(() => {
            fetchProducts().then()
        }, // eslint-disable-next-line
        [])

    useEffect(() => {
            categoryFiltering();
        }, // eslint-disable-next-line
        [filters])

    const  categoryFiltering = (elements = products) => {
        setFilteredProducts(filterByProperty(elements, filters));
    }


    return (
        <section>
            {isProductsLoading && <div className="container">Loading...</div>}
            {filteredProducts && (
                 <div className="container">
                    <CatalogFilters filters={filters} setFilters={setFilters}/>
                    <div className={cl.catalogListContainer}>
                        <CatalogCategories filters={filters} setFilters={setFilters}/>
                        <CatalogList products={filteredProducts} filters={filters}/>
                    </div>
                    <CatalogPagination elements={filteredProducts.length} filters={filters} setFilters={setFilters}/>
                 </div>
            )}
        </section>
    );

};

export default Catalog;