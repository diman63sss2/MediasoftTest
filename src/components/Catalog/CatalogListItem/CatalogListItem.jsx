import React from 'react';
import cl from './CatalogListItem.module.css';
import Button from "../../UI/Button/Button";

const CatalogListItem = ({product}) => {
    return (
        <li className={cl.item}>
            <div className={cl.content}>
                <div className={cl.image}>
                    <span className={cl.category}>
                        {product.category}
                    </span>
                    <img src={product.image} alt=""/>
                </div>
                <div className={cl.info}>
                    <h3 className={cl.title}>
                        {   product.title.length > 40 ?
                            product.title.substr(0, 40) + '...'
                            :
                            product.title
                        }
                    </h3>
                    <span className={cl.price}>
                        {product.price}$
                    </span>
                </div>
            </div>
            <div className={cl.additional}>
                <Button className={cl.button}>
                    Добавить в корзину
                </Button>
            </div>
        </li>
    );
};

export default CatalogListItem;