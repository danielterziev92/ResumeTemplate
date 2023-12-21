import style from './App.module.css'

import './App.module.css'
import NavigationInfoBar from "./components/navigation-info-bar/NavigationInfoBar.jsx";

function App() {
    return (
        <div className={style.MainContainer}>
            <NavigationInfoBar/>
        </div>
    )
}

export default App
