import style from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={style.footerContainer}>
            <div className={style.footerContent}>
                <span>&copy; 2023 All Rights Reserved.</span>
                <span>email: daniel.st.terziev@gmail.com</span>
            </div>
        </footer>
    );
}