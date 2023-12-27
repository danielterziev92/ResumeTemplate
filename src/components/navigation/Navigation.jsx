import {useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import style from './Navigation.module.css';
import * as SolidIcons from "@fortawesome/free-solid-svg-icons";
import Paths from "../../utils/Paths.js";
import {Link} from "react-router-dom";

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

export default function Navigation() {
    const [activeTabRef, setActiveTabRef] = useState('Home');
    const [navigationTabs, setNavigationTabs] = useState(initialState);

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