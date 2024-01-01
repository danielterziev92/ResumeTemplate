import {useReducer} from "react";
import {Link} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithubSquare, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import * as SolidIcons from '@fortawesome/free-solid-svg-icons'
import style from './NavigationInfoBar.module.css'

const initialState = {
    imageUrl: 'https://img.freepik.com/free-photo/portrait-happy-young-male-network-engineer-with-laptop-hand-working-datacenter_662251-1533.jpg?w=1380&t=st=1703161313~exp=1703161913~hmac=cd7906c7eada3324bcca3df999e12b2e3d74e433e49ca10aca00e312c1bffbc3',
    fullName: 'Daniel Terziev',
    stackPosition: 'Full Stack Python Developer',
    socialMedias: [
        {
            name: 'GitHub',
            url: 'https://github.com/danielterziev92/',
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/danielterziev/',
        },
    ],
    allSkills: [
        {
            name: 'Technical skills',
            iconName: 'faGears',
            abilities: {
                programmingLanguages: {
                    name: 'Programming Languages',
                    skills: ['Python', 'JavaScript', 'HTML & CSS']
                },
                frameworks: {
                    name: 'Frameworks',
                    skills: ['Django', 'Django REST', 'ReactJS']
                },
                databases: {
                    name: 'Databases',
                    skills: ['PostgreSQL', 'SQLite', 'MS SQL', 'Redis']
                },
                tools: {
                    name: 'Tools',
                    skills: ['PyCharm', 'WebStorm', 'VSCode', 'Docker', 'Git', 'GitHub', 'Jira']
                },
            }
        },
        {
            name: 'Soft Skills',
            iconName: 'faUserLarge',
            abilities: {
                softSkills: {
                    name: '',
                    skills: ['Communication', 'Adaptability', 'Problem Solving', 'Creativity', 'Organizational skills', 'Teamwork', 'Attention to details'],
                }
            },
        },
    ],
    cvLink: '../../../public/Resume.pdf',
}

const reducerActions = {
    setImageUrl: 'SET_IMAGE_URL',
    setFullName: 'SET_FULL_NAME',
    setStackPosition: 'SET_STACK_POSITION',
}

const reducer = (state, action) => {
    switch (action.type) {
        case reducerActions.setImageUrl:
            return {...state, imageUrl: action.payload};
        case reducerActions.setFullName:
            return {...state, fullName: action.payload};
        case reducerActions.setStackPosition:
            return {...state, stackPosition: action.payload};
        default:
            return state;
    }
}

export default function NavigationInfoBar() {
    const [state, dispatch] = useReducer(reducer, initialState)

    function getFontAwesomeIcon(iconName) {
        switch (iconName) {
            case 'GitHub':
                return <FontAwesomeIcon icon={faGithubSquare} className={style[iconName]}/>
            case 'LinkedIn':
                return <FontAwesomeIcon icon={faLinkedin} className={style[iconName]}/>
            default:
                return <FontAwesomeIcon icon={SolidIcons[iconName]} className={style[iconName]}/>
        }
    }

    return (
        <aside className={style.InfoBarFrame}>
            <div className={style.InfoBarFrameHeader}>
                <figure>
                    <img src={state.imageUrl} alt="Profile picture"/>
                </figure>
                <h2>{state.fullName}</h2>
                <p>{state.stackPosition}</p>
            </div>
            <div className={style.InfoBarFrameDetails}>
                {Object.values(state.allSkills).map(({name, iconName, abilities}, index) => (
                    <div key={index} className={style.skills}>
                        <h3>
                            {getFontAwesomeIcon(iconName)}
                            {name}
                        </h3>
                        <ul>
                            {Object.values(abilities).map(({name, skills}, index) => (
                                <li key={index}>
                                    {name && <span>{name}</span>}
                                    <p>{skills.join(', ')}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <p className={style.download}>
                    <Link to={state.cvLink} target="_blank" download>Download CV {getFontAwesomeIcon('faDownload')}
                    </Link></p>
            </div>
            <div className={style.InfoBarFrameFooter}>
                {state.socialMedias.map((media, index) => (
                    <Link key={index} to={media.url}>
                        {getFontAwesomeIcon(media.name)}
                    </Link>
                ))}
            </div>
        </aside>
    );
}