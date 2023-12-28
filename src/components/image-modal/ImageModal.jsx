import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

import style from './ImageModal.module.css';

export default function ImageModal({imagePath, closeHandler}) {
    return (
        <div className={style.modal}>
            <FontAwesomeIcon icon={faXmark} className={style.closeButton} onClick={closeHandler}/>
            <figure>
                <img src={imagePath} alt="Image"/>
            </figure>
            <div className={style.overlay} onClick={closeHandler}></div>
        </div>
    );
}