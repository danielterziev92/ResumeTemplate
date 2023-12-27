import style from './Home.module.css';

import Banner from "../banner/Banner.jsx";

export default function Home() {


    return (
        <div className={style.home}>
            <Banner/>
        </div>
    );
}