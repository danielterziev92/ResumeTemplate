import {useReducer} from "react";

import style from './NavigationInfoBar.module.css'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const initialState = {
    imageUrl: 'https://img.freepik.com/free-photo/portrait-happy-young-male-network-engineer-with-laptop-hand-working-datacenter_662251-1533.jpg?w=1380&t=st=1703161313~exp=1703161913~hmac=cd7906c7eada3324bcca3df999e12b2e3d74e433e49ca10aca00e312c1bffbc3',
    fullName: 'Daniel Terziev',
    stackPosition: 'Full Stack Python Developer',
    gitHubUrl: 'https://github.com/danielterziev92/',
    linkedIdUrl: 'https://www.linkedin.com/in/danielterziev/',
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

            </div>
            <div className={style.InfoBarFrameFooter}>
                <FontAwesomeIcon icon="fa-brands fa-square-github"/>
                <FontAwesomeIcon icon="fa-brands fa-linkedin"/>
            </div>
        </aside>
    );
}