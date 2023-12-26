import {useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import style from './Navigation.module.css';
import * as SolidIcons from "@fortawesome/free-solid-svg-icons";

const navigationTabs = [
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
                {/*<li className={active style.active} onClick={changeActiveTabClickHandler}>Home</li>*/}
                {/*<li onClick={changeActiveTabClickHandler}>Contacts</li>*/}
                {/*<li onClick={changeActiveTabClickHandler}>Block</li>*/}
            </ul>
        </nav>
    );
}