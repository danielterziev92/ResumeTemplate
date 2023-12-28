import {Route, Routes} from "react-router-dom";

import style from './App.module.css'

import Home from "./components/home/Home.jsx";
import NavigationInfoBar from "./components/navigation-info-bar/NavigationInfoBar.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import Contacts from "./components/contacts/Contacts.jsx";

import Paths from "./utils/Paths.js";

function App() {
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
