import React from 'react';

import logotype from '../../assets/images/логотип/logotype.jpg'

import s from './Header.module.css';
import { Link } from 'react-router-dom';
import { ADMIN_ROUTE, HOME_ROUTE } from '../../utils/CONSTANTS';
const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.header__content}>
                
                <div className={s.header__content_logotype}><Link to={HOME_ROUTE}><img style={{borderRadius: "30px"}} src={logotype} /></Link></div>
                <nav className={s.header__content_nav}>
                    <div>О нас</div>
                    <div>Примеры</div>
                    <div>Приемущества</div>
                    <div>Обратная связь</div>
                    <div><Link to={ADMIN_ROUTE}>Страница администратора</Link></div>
                </nav>
            </div>
        </header>
    );
};

export default Header;