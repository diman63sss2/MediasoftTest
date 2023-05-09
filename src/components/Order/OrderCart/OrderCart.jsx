import React, {useState} from 'react';
import cl from './OrderCart.module.css';
import {useForm} from "react-hook-form";

const OrderCart = ({setStage}) => {

    const [card, setCard] = useState({
        num: '',
        date: '',
        cvv: '',
    });

    const [num, setNum] = useState('');

    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset,
        watch
    } = useForm();

    console.log(watch("number"));

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        setStage('cart');
    }

    const inputChange = (e) => {
        console.log(123123)
        setNum(e.target.value);
    }

    return (
        <form className={cl.form} onSubmit={handleSubmit(onSubmit)}>
            <h3 className={cl.title}>
                1-й шаг(информация о покупателе)
            </h3>
            <div className={cl.card}>
                <img className={cl.background} src="https://pcvector.net/uploads/posts/2018-08/1533326959_low-poly-background-generator-min.png" alt=""/>
                <div className={cl.fields}>
                    <div className={cl.head}>
                        <label className={cl.label} htmlFor="number">
                            <span>First Name:</span>
                            <input id={'number'} onChange={inputChange} className={cl.inputNum} {...register('number', {
                                required: "Please enter your card number",
                                pattern: {
                                    value: /^[0-9]*$/,
                                    message: "Card number must contain only digits"
                                },
                                maxLength: {
                                    value: 16,
                                    message: "Card number must have maximum of 16 digits"
                                },
                                minLength: {
                                    value: 16,
                                    message: "Card number must have min of 16 digits"
                                },
                            })} type="text"/>
                            {num}
                            {errors?.number && <p className={cl.error}>{errors?.number?.message || "Error"}</p>}
                            <span>
                                {}
                            </span>

                        </label>
                    </div>

                </div>
            </div>
            <button className={cl.button} type={'submit'}>
                Продолжить
            </button>
        </form>

    );
};

export default OrderCart;