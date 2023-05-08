import React, {useState} from 'react';
import OrderInfo from "../components/Order/OrderInfo/OrderInfo";

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
                    cart
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