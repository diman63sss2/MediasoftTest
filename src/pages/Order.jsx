import React, {useState} from 'react';
import OrderInfo from "../components/Order/OrderInfo/OrderInfo";
import OrderCart from "../components/Order/OrderCart/OrderCart";

const Order = () => {

    const [stage, setStage] = useState('info');
    switch (stage){
        case 'info':
            return(
                <div className='container'>
                    <OrderInfo setStage={setStage}/>
                </div>
            )
        case 'cart':
            return (
                <div className="container">
                    <OrderCart setStage={setStage}/>
                </div>
            )
    }

    return (
        <div className='container'>
            Order
        </div>
    );
};

export default Order;