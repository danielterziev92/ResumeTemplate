import style from './Home.module.css';

import Banner from "../banner/Banner.jsx";
import Education from "../education/Education.jsx";

export default function Home() {


    return (
        <div className={style.home}>
            <Banner/>
            <Education/>
        </div>
    );
}