import {useLayoutEffect, useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import style from './Navigation.module.css';
import * as SolidIcons from "@fortawesome/free-solid-svg-icons";
import {Link, useLocation} from "react-router-dom";

const initialState = [
    {
        title: 'Home',
        iconName: 'faHouse',
        path: '/'
    },
    {
        title: 'Contacts',
        iconName: 'faAddressCard',
        path: '/contacts'
    },
    {
        title: 'Blog',
        iconName: 'faBlog',
        path: '/blog'
    },
]

const pathValueMap = initialState.reduce((acc, item) => {
    acc[item.path] = item.title;
    return acc;
}, {});

export default function Navigation() {
    const location = useLocation();
    const [activeTabRef, setActiveTabRef] = useState('Home');
    const [navigationTabs, setNavigationTabs] = useState(initialState);

    useLayoutEffect(() => {
        if (location.pathname === '/') return;

        setActiveTabRef(pathValueMap[location.pathname])
    }, []);

    function changeActiveTabClickHandler(e) {
        setActiveTabRef(e.target.textContent);
    }

    return (
        <nav className={style.navMenu}>
            <ul>
                {navigationTabs.map(({title, iconName, path}, index) => (
                    <Link to={path} key={index}>
                        <li onClick={changeActiveTabClickHandler}
                            className={activeTabRef === title ? style.active : ''}
                        >
                            <FontAwesomeIcon icon={SolidIcons[iconName]}/>
                            {title}
                        </li>
                    </Link>
                ))}
            </ul>
        </nav>
    );
}