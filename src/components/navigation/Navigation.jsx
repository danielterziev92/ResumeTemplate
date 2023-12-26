import {useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import style from './Navigation.module.css';
import * as SolidIcons from "@fortawesome/free-solid-svg-icons";

const initialState = [
    {
        title: 'Home',
        iconName: 'faHouse'
    },
    {
        title: 'Contacts',
        iconName: 'faAddressCard'
    },
    {
        title: 'Blog',
        iconName: 'faBlog'
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
                {navigationTabs.map(({title, iconName}, index) => (
                    <li key={index}
                        onClick={changeActiveTabClickHandler}
                        className={activeTabRef === title ? style.active : ''}
                    >
                        <FontAwesomeIcon icon={SolidIcons[iconName]}/>
                        {title}
                    </li>
                ))}
            </ul>
        </nav>
    );
}