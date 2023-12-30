import {useState} from "react";
import {Link} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faJs, faPython, faReact} from "@fortawesome/free-brands-svg-icons";

import style from './Blog.module.css';

import pathToUrl from "../../utils/pathToUrl.js";

const initialPostsState = [
    {
        id: 1,
        imageUrl: 'https://files.realpython.com/media/Monthly-Python-News_Purple_Watermarked.5b2e306328cb.jpg',
        title: 'How to Get the Current Time in Python',
        date: new Date('2023-09-23'),
        shortDescription: 'Getting the current time in Python is a nice starting point for many time-related operations. One very important use case is creating timestamps. In this tutorial, you’ll learn how to get, display, and format the current time with the datetime module.',
        techStacks: ['Python'],
    },
    {
        id: 2,
        imageUrl: 'https://media.istockphoto.com/id/1403644222/photo/illustration-demonstrates-the-routing-of-ip-packets-throughout-the-internet-a-lan-computer.webp?b=1&s=170667a&w=0&k=20&c=oSHjHPl2eM2AMR8yam_7f_yHh5WHrrd1he1A4bGSuPs=',
        title: 'How to Get the Current Time in Python',
        date: new Date('2023-09-23'),
        shortDescription: 'Getting the current time in Python is a nice starting point for many time-related operations. One very important use case is creating timestamps. In this tutorial, you’ll learn how to get, display, and format the current time with the datetime module.',
        techStacks: ['Python', 'JavaScript', 'React'],
    },
    {
        id: 3,
        imageUrl: 'https://w0.peakpx.com/wallpaper/659/699/HD-wallpaper-python-amoled-coding-coding-dark-dark-programming-python-sky-universe.jpg',
        title: 'How to Get the Current Time in Python',
        date: new Date('2023-09-23'),
        shortDescription: 'Getting the current time in Python is a nice starting point for many time-related operations. One very important use case is creating timestamps. In this tutorial, you’ll learn how to get, display, and format the current time with the datetime module.',
        techStacks: ['Python', 'JavaScript', 'React'],
    },

]

export default function Blog() {
    const [posts, setPosts] = useState(initialPostsState);

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
                <h3>Blog</h3>
                {posts.map(post => (
                    <section key={post.id} className={style.postContent}>
                        <figure>
                            <img src={post.imageUrl} alt="post-image"/>
                        </figure>
                        <div className={style.dateAndStacks}>
                            <span className={style.postDate}>{formatDate(post.date)}</span>
                            /
                            <span className={style.postStacks}>
                                Stack: {post.techStacks.map(stack => (getFontAwesomeStackIcon(stack)))}
                            </span>
                        </div>
                        <h3>{post.title}</h3>
                        <p>{post.shortDescription}</p>
                        <Link to={pathToUrl(post.id)}/>
                    </section>
                ))}
            </article>
        </>
    );
}