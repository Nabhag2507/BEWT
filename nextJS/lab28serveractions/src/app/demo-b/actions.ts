'use server'

interface UserDataResult{
    success: boolean,
    data:{
        name: string,
        age: number
    }
}

export async function submitUserData(formData: FormData): Promise<UserDataResult>{
    const name = formData.get('name') as string
    const age = formData.get('age') as string
    
    console.log("name: ", name);
    console.log("age: ", age);

    return {
        success: true,
        data: {
            name: name,
            age: parseInt(age)
        }
    }
}