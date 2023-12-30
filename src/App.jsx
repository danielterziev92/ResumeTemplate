import {Route, Routes, useLocation} from "react-router-dom";

import style from './App.module.css'

import Home from "./components/home/Home.jsx";
import NavigationInfoBar from "./components/navigation-info-bar/NavigationInfoBar.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import Contacts from "./components/contacts/Contacts.jsx";

import Paths from "./utils/Paths.js";
import {useEffect} from "react";

function App() {
    const location = useLocation();

    useEffect(() => {
        const mainElement = document.querySelector('main');
        mainElement.scrollTop = 0;
    }, [location.pathname]);

    return (
        <div className={style.MainContainer}>
            <NavigationInfoBar/>
            <main className={style.mainContent}>
                <Routes>
                    <Route path={Paths.home} element={<Home/>}/>
                    <Route path={Paths.contacts} element={<Contacts/>}/>
                </Routes>
            </main>
            <Navigation/>
        </div>
    )
}

export default App
