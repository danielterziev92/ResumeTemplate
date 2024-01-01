import {useEffect, useState, useCallback, useMemo} from "react";
import style from './Banner.module.css';

const textToShow = [
    'Skilled in Python, OOP, and Django for web development, with expertise in data structures, algorithms, Linux system administration, and ReactJS for creating sophisticated single-page applications.'
];

export default function Banner() {
    const [text, setText] = useState()
    const [currentIndex, setCurrentIndex] = useState({wordIndex: 0, charIndex: 0});
    const [isIntervalActive, setIsIntervalActive] = useState(true);

    const increaseIndex = useCallback(() => {
        setCurrentIndex((prevIndex) => ({
            wordIndex: prevIndex.wordIndex,
            charIndex: prevIndex.charIndex + 1
        }));
    }, []);

    const checkForPipe = () => (currentIndex.charIndex > 0 && currentIndex.charIndex < currentWord.length) ? '|' : '';

    const currentWord = useMemo(() => textToShow[currentIndex.wordIndex], [currentIndex.wordIndex]);

    useEffect(() => {
        if (!isIntervalActive) return;

        const intervalId = setInterval(() => {
            const charCountToShow = Math.min(currentWord.length, currentIndex.charIndex + 1);
            setText(currentWord.slice(0, charCountToShow));

            if (currentWord !== text) {
                increaseIndex();
            }

            if (currentWord === text) setIsIntervalActive(false);
        }, 100);

        return () => clearInterval(intervalId);
    }, [currentIndex, text, isIntervalActive]);

    return (
        <article className={style.banner}>
            <h2>{`${text}${checkForPipe()}`}</h2>
        </article>
    );
}
