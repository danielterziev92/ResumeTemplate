import {useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faEnvelope, faPenToSquare} from "@fortawesome/free-solid-svg-icons";

import style from './Contacts.module.css';

import Footer from "../footer/Footer.jsx";

import useForm from "../../hooks/useForm.js";
import {Form} from "react-router-dom";
import createInitialValuesObject from "../../hooks/createInitialValuesObject.js";

const initialState = {
    country: {
        title: 'Country',
        value: 'Bulgaria'
    },
    email: {
        title: 'Email',
        value: 'daniel.st.terziev@gmail.com'
    },
    phone: {
        title: 'Phone',
        value: '+359886878828'
    }
}

const FormKey = {
    name: 'name',
    email: 'email',
    message: 'message',
}

export default function Contacts() {
    const [contactInfo, setContactInfo] = useState(initialState)
    const {formValues, valueChangeHandler, submitFormHandler} = useForm(
        createInitialValuesObject(FormKey), submitFormClickHandler
    );
    const [focusedInput, setFocusedInput] = useState('');

    function changeFocusedInput(e) {
        console.log(e.target)
    }

    function submitFormClickHandler(values) {
        console.log(values);
    }

    return (
        <>
            <article className={style.contactContainer}>
                <h3>Contact information</h3>
                <section className={style.contactBox}>
                    {Object.keys(contactInfo).map((key, index) => (
                        <p key={index}>
                            {contactInfo[key].title}:
                            {key === 'email' || key === 'phone'
                                ? (<a
                                    href={key === 'email'
                                        ? `mailto:${contactInfo[key].value}`
                                        : `tel:${contactInfo[key].value}`}>
                                    {contactInfo[key].value}
                                </a>)
                                : <a>{contactInfo[key].value}</a>}
                        </p>
                    ))}
                </section>
            </article>
            <article className={style.contactContainer}>
                <h3>Get in touch</h3>
                <form onSubmit={submitFormHandler}>
                    <label htmlFor={FormKey.name}>
                        <FontAwesomeIcon icon={faUser} className={style.icon}/>
                        <input type="text" name={FormKey.name} value={formValues[FormKey.name]} id={FormKey.name}
                               placeholder="Name" onChange={valueChangeHandler} onFocus={changeFocusedInput}/>
                    </label>
                    <label htmlFor={FormKey.email}>
                        <FontAwesomeIcon icon={faEnvelope} className={style.icon}/>
                        <input type="email" name={FormKey.email} value={formValues[FormKey.email]} id={FormKey.email}
                               placeholder="Email" onChange={valueChangeHandler} onFocus={changeFocusedInput}/>
                    </label>
                    <label htmlFor={FormKey.message}>
                        <FontAwesomeIcon icon={faPenToSquare} className={style.icon}/>
                        <textarea name={FormKey.message} id={FormKey.message} placeholder="Message"
                                  value={formValues[FormKey.message]} cols="auto" rows="10"
                                  onChange={valueChangeHandler}
                                  onFocus={changeFocusedInput}
                        />
                    </label>
                    <button>Send message</button>
                </form>
            </article>

            <Footer/>
        </>
    );
}