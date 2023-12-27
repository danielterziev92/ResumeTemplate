import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight,} from "@fortawesome/free-solid-svg-icons";

import style from './Education.module.css';

export default function Education() {
    return (
        <article className={style.educationContainer}>
            <h2>My Education</h2>
            <div>
                <section className={style.educationBox}>
                    <h3>Python Advance and OOP</h3>
                    <small>Date: 09/2023 - 12/2023</small>
                    <p>Demonstrates expertise in project architecture, fundamental OOP concepts, and advanced OOP
                        principles, with a focus on implementing iterators, generators, and
                        decorators to enhance code functionality.</p>
                    <div>View certificate <FontAwesomeIcon icon={faChevronRight}/></div>
                </section>
            </div>
        </article>
    );
}