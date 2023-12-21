import style from './NavigationInfoBar.module.css'
import {useReducer} from "react";

const initialState = {
    imageUrl: 'https://img.freepik.com/free-photo/portrait-happy-young-male-network-engineer-with-laptop-hand-working-datacenter_662251-1533.jpg?w=1380&t=st=1703161313~exp=1703161913~hmac=cd7906c7eada3324bcca3df999e12b2e3d74e433e49ca10aca00e312c1bffbc3',
    fullName: 'Daniel Terziev',
    stackPosition: 'Full Stack Python Developer',
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

        </aside>
    );
}