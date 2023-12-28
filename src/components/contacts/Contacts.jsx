import style from './Contacts.module.css';

export default function Contacts() {
    return (
        <main className={style.contactContainer}>
            <article className={style.contactInformation}>
                <h3>Contact information 2</h3>
                <section>
                    <p>County: <span>Bulgaria</span></p>
                    <p>Email: <span>daniel.stterziev@gmail com</span></p>
                </section>
            </article>
        </main>
    );
}