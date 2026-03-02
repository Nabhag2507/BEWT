import React from 'react'
import { submitUserData } from './actions'

async function PageBdemo() {
    const handleSubmit = async (formData: FormData) => {
        'use server'
        await submitUserData(formData);
    };

    return (
        <>
        <form action = {handleSubmit}>
            <input type="text" name='name' placeholder='Enter you name' />
            <input type="text" name='age' placeholder='Enter you age' />

            <button type='submit'>submit</button>
        </form>
        </>
    )
}

export default PageBdemo