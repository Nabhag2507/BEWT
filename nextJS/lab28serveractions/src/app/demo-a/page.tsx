async function handleFormSubmit(formData: FormData) {
    'use server'

    const name = formData.get('name') as string
    const email = formData.get('email') as string

    console.log("=== form data ===");
    console.log('name: ', name);
    console.log('email: ', email);
    console.log('Timestamp: ', new Date().toISOString());
    console.log("================");
}

function FirstLabDemo() {
    return (
        <>
            <form action={handleFormSubmit}>
                <input type="text" name="name" placeholder='Enter your name' />
                <input type="email" name="email" placeholder='Enter your email' />

                <button type='submit'>submit form</button>
            </form>
        </>
    )
}

export default FirstLabDemo