import {useLayoutEffect, useState} from "react";
import {Link} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faJs, faPython, faReact} from "@fortawesome/free-brands-svg-icons";
import {faCalendarDays, faLayerGroup} from "@fortawesome/free-solid-svg-icons";

import style from './Blog.module.css';

import Footer from "../footer/Footer.jsx";

import Urls from "../../utils/Urls.js";
import pathToUrl from "../../utils/pathToUrl.js";

const initialPostsState = [
    {
        id: 0,
        imageUrl: 'https://files.realpython.com/media/Monthly-Python-News_Purple_Watermarked.5b2e306328cb.jpg',
        title: 'How to Get the Current Time in Python',
        date: new Date('2023-09-23'),
        shortDescription: 'Getting the current time in Python is a nice starting ',
        techStacks: ['Python'],
    },
    {
        id: 1,
        imageUrl: 'https://media.istockphoto.com/id/1403644222/photo/illustration-demonstrates-the-routing-of-ip-packets-throughout-the-internet-a-lan-computer.webp?b=1&s=170667a&w=0&k=20&c=oSHjHPl2eM2AMR8yam_7f_yHh5WHrrd1he1A4bGSuPs=',
        title: 'How to Get the Current Time in Python',
        date: new Date('2023-09-23'),
        shortDescription: 'Getting the current time in Python is a nice starting point for many time-related operations. One very important use case is creating timestamps. In this tutorial, you’ll learn how to get, display, and format the current time with the datetime module.',
        techStacks: ['Python', 'JavaScript', 'React'],
    },
    {
        id: 2,
        imageUrl: 'https://w0.peakpx.com/wallpaper/659/699/HD-wallpaper-python-amoled-coding-coding-dark-dark-programming-python-sky-universe.jpg',
        title: 'How to Get the Current Time in Python',
        date: new Date('2023-09-23'),
        shortDescription: 'Getting the current time in Python is a nice starting point for many time-related operations. ',
        techStacks: ['Python', 'JavaScript', 'React'],
    },
    {
        id: 3,
        imageUrl: 'https://files.realpython.com/media/Monthly-Python-News_Purple_Watermarked.5b2e306328cb.jpg',
        title: 'How to Get the Current Time in Python',
        date: new Date('2023-09-23'),
        shortDescription: 'Getting the current time in Python is a nice starting point for many time-related operations. One very important use case is creating timestamps. In this tutorial, you’ll learn how to get, display, and format the current time with the datetime module.',
        techStacks: ['Python'],
    },
    {
        id: 4,
        imageUrl: 'https://media.istockphoto.com/id/1403644222/photo/illustration-demonstrates-the-routing-of-ip-packets-throughout-the-internet-a-lan-computer.webp?b=1&s=170667a&w=0&k=20&c=oSHjHPl2eM2AMR8yam_7f_yHh5WHrrd1he1A4bGSuPs=',
        title: 'How to Get the Current Time in Python',
        date: new Date('2023-09-23'),
        shortDescription: 'Getting the current time in Python is a nice starting point for many time-related operations. One very important use case is creating timestamps. In this tutorial, you’ll learn how to get, display, and format the current time with the datetime module.',
        techStacks: ['Python', 'JavaScript', 'React'],
    },
    {
        id: 5,
        imageUrl: 'https://w0.peakpx.com/wallpaper/659/699/HD-wallpaper-python-amoled-coding-coding-dark-dark-programming-python-sky-universe.jpg',
        title: 'How to Get the Current Time in Python',
        date: new Date('2023-09-23'),
        shortDescription: 'Getting the current time in Python is a nice starting point for many time-related operations. One very important use case is creating timestamps. In this tutorial, you’ll learn how to get, display, and format the current time with the datetime module.',
        techStacks: ['Python', 'JavaScript', 'React'],
    },
    {
        id: 6,
        imageUrl: 'https://files.realpython.com/media/Monthly-Python-News_Purple_Watermarked.5b2e306328cb.jpg',
        title: 'How to Get the Current Time in Python',
        date: new Date('2023-09-23'),
        shortDescription: 'Getting the current time in Python is a nice starting point for many time-related operations. One very important use case is creating timestamps. In this tutorial, you’ll learn how to get, display, and format the current time with the datetime module.',
        techStacks: ['Python'],
    },
    {
        id: 7,
        imageUrl: 'https://media.istockphoto.com/id/1403644222/photo/illustration-demonstrates-the-routing-of-ip-packets-throughout-the-internet-a-lan-computer.webp?b=1&s=170667a&w=0&k=20&c=oSHjHPl2eM2AMR8yam_7f_yHh5WHrrd1he1A4bGSuPs=',
        title: 'How to Get the Current Time in Python',
        date: new Date('2023-09-23'),
        shortDescription: 'Getting the current time in Python is a nice starting point for many time-related operations. One very important use case is creating timestamps. In this tutorial, you’ll learn how to get, display, and format the current time with the datetime module.',
        techStacks: ['Python', 'JavaScript', 'React'],
    },
    {
        id: 8,
        imageUrl: 'https://w0.peakpx.com/wallpaper/659/699/HD-wallpaper-python-amoled-coding-coding-dark-dark-programming-python-sky-universe.jpg',
        title: 'How to Get the Current Time in Python',
        date: new Date('2023-09-23'),
        shortDescription: 'Getting the current time in Python is a nice starting point for many time-related operations. One very important use case is creating timestamps. In this tutorial, you’ll learn how to get, display, and format the current time with the datetime module.',
        techStacks: ['Python', 'JavaScript', 'React'],
    },

]

export default function Blog() {
    const [posts, setPosts] = useState(initialPostsState);
    const [figureHeight, setFigureHeight] = useState(0);

    useLayoutEffect(() => {
        const sectionWidth = document.querySelector(`.${style.postContent}`).offsetWidth;
        setFigureHeight(Math.round((9 / 16) * sectionWidth));
    }, []);

    function getFontAwesomeStackIcon(stack) {
        if (stack === 'Python') return <FontAwesomeIcon icon={faPython}/>
        if (stack === 'JavaScript') return <FontAwesomeIcon icon={faJs}/>
        if (stack === 'React') return <FontAwesomeIcon icon={faReact}/>
    }

    function formatDate(date) {
        const day = date.getDate();
        const month = new Intl.DateTimeFormat('en-US', {month: 'short'}).format(date);
        const year = date.getFullYear();

        return `${day} ${month} ${year}`;
    }

    return (
        <>
            <article className={style.blogContainer}>
                <h2>Blog</h2>
                <section>
                    <span>Total: {posts.length}</span>
                </section>
            </article>
            <article className={style.postContainer}>
                {posts.map(post => (
                    <section key={post.id} className={style.postContent}>
                        <figure style={{height: figureHeight + 'px'}}>
                            <img src={post.imageUrl} alt="post-image"/>
                        </figure>
                        <div className={style.dateAndStacks}>
                            <span className={style.postDate}>
                                <FontAwesomeIcon icon={faCalendarDays}/> Date: {formatDate(post.date)}
                            </span>
                            <span className={style.postStacks}>
                                <FontAwesomeIcon icon={faLayerGroup}/> Stacks: {post.techStacks.map(
                                stack => (getFontAwesomeStackIcon(stack)
                                ))}
                            </span>
                        </div>
                        <div className={style.postDetails}>
                            <h3>{post.title}</h3>
                            <p>{post.shortDescription}</p>
                            <Link to={pathToUrl(Urls.blogDetail, {id: post.id})}>Read more</Link>
                        </div>
                    </section>
                ))}
            </article>
            <Footer/>
        </>
    );
}