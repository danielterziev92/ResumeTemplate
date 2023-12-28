import style from './App.module.css'
import {Route, Routes} from "react-router-dom";

import NavigationInfoBar from "./components/navigation-info-bar/NavigationInfoBar.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import Home from "./components/home/Home.jsx";

import Paths from "./utils/Paths.js";
import Contacts from "./components/contacts/Contacts.jsx";

function App() {
    return (
        <div className={style.MainContainer}>
            <NavigationInfoBar/>
            <Routes>
                <Route path={Paths.home} element={<Home/>}/>
                <Route path={Paths.contacts} element={<Contacts/>}/>
            </Routes>
            <Navigation/>
        </div>
    )
}

export default App
