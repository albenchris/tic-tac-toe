import { useState } from 'react';

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
        <div className='form-container'>

            <form id='player-form' onSubmit={handleSubmit}>
                <label htmlFor='name'>What is your name?</label>

                <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='name'
                    defaultValue={name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <button type='submit'>Play!</button>


                <div className='error-message'>
                    {errorMessage}
                </div>
            </form>

        </div>
    );
};

export default NameForm;