import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {CART_ROUTE, MAIN_ROUTE} from "../../untils/const";
import logo from '../../images/logo.svg'
import cartImg from '../../images/cart.svg'
import cl from './Header.module.css'
import Modal from "../UI/Modal/Modal";

const Header = () => {
    const login = false;
    let num = 10;

    const [signVisible, setSignVisible] = useState(false);
    const [registerVisible, setRegisterVisible] = useState(false);

    return (
        <header className={cl.header}>
            <div className="container">
                <div className={cl.header_container}>
                    <Link to={MAIN_ROUTE} className={cl.logo}>
                        <img src={logo} alt="Крутой логотип для хорошей компании"/>
                    </Link>
                    { login ?
                        <Link to={CART_ROUTE} className={cl.cart}>
                            <img src={cartImg} alt="cart"/>
                            {
                                num !== 0 &&
                                <div className={cl.num}>
                                    {num}
                                </div>
                            }
                        </Link> :
                        <div className={cl.authorize}>
                            <div onClick={()=>setSignVisible(true)} className={cl.sign}>
                                sign in
                            </div>
                            <div onClick={()=>setRegisterVisible(true)} className={cl.register}>
                                sign up
                            </div>
                            <Modal visible={signVisible} setVisible={setSignVisible}>
                                sign in
                            </Modal>
                            <Modal visible={registerVisible} setVisible={setRegisterVisible}>
                                sign up
                            </Modal>
                        </div>

                    }
                </div>
            </div>
        </header>
    );
};

export default Header;