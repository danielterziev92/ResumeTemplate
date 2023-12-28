import style from './Contacts.module.css';
import Footer from "../footer/Footer.jsx";

export default function Contacts() {
    return (
        <>
            <article className={style.contactInformation}>
                <h3>Contact information</h3>
                <section className={style.contactBox}>
                    <p>County: <span>Bulgaria</span></p>
                    <p>Email: <span>daniel.stterziev@gmail com</span></p>
                    <p>Phone: <span>+359 886 878 828</span></p>
                </section>
            </article>

            {/*<Footer/>*/}
        </>
    );
}