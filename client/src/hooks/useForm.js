import {useState} from "react";

export default function useForm(initialState, onSubmitHandler) {
    const [formValues, setFormValues] = useState(initialState);

    function valueChangeHandler(e) {
        const {name, value} = e.target;

        setFormValues((state) => ({
            ...state,
            [name]: value,
        }))
    }

    function submitFormHandler(e) {
        e.preventDefault();
        onSubmitHandler(formValues);
    }

    return {formValues, valueChangeHandler, submitFormHandler}
}