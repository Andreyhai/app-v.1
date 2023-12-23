import React from 'react';

import logotype from '../../assets/images/логотип/logotype.jpg'

import s from './Header.module.css';
const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.header__content}>
                <img src={logotype} className={s.header__content_logotype}/>
                <nav className={s.header__content_nav}>
                    <div>О нас</div>
                    <div>Примеры</div>
                    <div>Приемущества</div>
                    <div>Обратная связь</div>
                </nav>
            </div>
        </header>
    );
};

export default Header;