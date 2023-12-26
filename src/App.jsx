import style from './App.module.css'

import NavigationInfoBar from "./components/navigation-info-bar/NavigationInfoBar.jsx";
import Navigation from "./components/navigation/Navigation.jsx";

function App() {
    return (
        <div className={style.MainContainer}>
            <NavigationInfoBar/>

            <Navigation/>
        </div>
    )
}

export default App
