import style from './Navigation.module.css';

export default function Navigation() {

    return (
        <nav className={style.navMenu}>
            <ul>
                <li>Home</li>
                <li>Contacts</li>
                <li>Block</li>
            </ul>
        </nav>
    );
}