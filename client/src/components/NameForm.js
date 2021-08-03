import { useState } from 'react';
import { io } from 'socket.io-client';
import '../css/form.css';

const NameForm = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '' });
    const { name } = formState;

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formState);
    };

    const handleChange = e => {
        if (e.target.value.length) setErrorMessage('');

        if (!errorMessage) setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleBlur = e => {
        e.target.value.length ? setErrorMessage('') : setErrorMessage(`${e.target.name} is required`);
    };

    return (
        <form id='player-form' onSubmit={handleSubmit}>
            <label htmlFor='name'>What is your name?</label>
            <input
                type='text'
                name='name'
                id='name'
                placeholder={errorMessage}
                defaultValue={name}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <button
                id='name-button'
                type='submit'
                onClick={handleSubmit}
            >
                Play!
            </button>
        </form>
    );
};

export default NameForm;