import React, {useContext} from 'react';
import cl from './CartList.module.css';
import {AuthContext} from "../../../context";
import {observer} from "mobx-react-lite";
import CartListItem from "../CartListItem/CartListItem";

const CartList = observer(() => {
    const {user} = useContext(AuthContext);
    return (
        <div className={cl.list}>
            {
                JSON.parse(JSON.stringify(user.products)).map((el)=>
                    <CartListItem key={el.id} product={el}/>
                )
            }
        </div>
    );
});

export default CartList;