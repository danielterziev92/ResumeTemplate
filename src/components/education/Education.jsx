import {useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight,} from "@fortawesome/free-solid-svg-icons";

import style from './Education.module.css';
import ImageModal from "../image-modal/ImageModal.jsx";

const initialState = [
    {
        title: 'Python OOP',
        startDate: '09/2023',
        endDate: '12/2023',
        description: 'Demonstrates expertise in project architecture, fundamental OOP concepts, and advanced OOP principles, with a focus on implementing iterators, generators, and decorators to enhance code functionality.',
        imagePath: 'public/Python OOP - October 2022 - Certificate.jpeg',
    },
]

export default function Education() {
    const [courses, setCourses] = useState(initialState)
    const [imageModalOpen, setImageModalOpen] = useState(false);
    const [selectedImagePath, setSelectedImagePath] = useState('');

    function closeImageModalClickHandler() {
        setImageModalOpen(false);
    }

    function openImageModalClickHandler(imagePath) {
        setSelectedImagePath(imagePath);
        setImageModalOpen(true);
    }

    return (
        <article className={style.educationContainer}>
            <h2>My Education</h2>
            <div className={style.educationBox}>
                {courses.map(({title, startDate, endDate, description, imagePath}, index) => (
                    <section key={index}>
                        <h3>{title}</h3>
                        <small>Date: {startDate} - {endDate}</small>
                        <p>{description}</p>
                        <div onClick={() => openImageModalClickHandler(imagePath)}>
                            View certificate
                            <FontAwesomeIcon icon={faChevronRight}/>
                        </div>
                    </section>
                ))}
            </div>

            {imageModalOpen && <ImageModal imagePath={selectedImagePath} closeHandler={closeImageModalClickHandler}/>}
        </article>
    );
}