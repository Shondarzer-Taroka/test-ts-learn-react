import React, { useState } from "react";

type UserInfo = {
    name: string;
    email: string;
    password: string;
    image: File | null
}


type UserError = {
    name?: string;
    email?: string;
    password?: string;
    image?: string
}


const UserForm2 = () => {
    const [error, setError] = useState<UserError>({})
    console.log(error);

    const [user, setUser] = useState<UserInfo>({
        name: '',
        email: '',
        password: '',
        image: null
    })

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0]
            console.log(e.target.files[0]);

            if (file.type.match("image.*")) {
                setError(prev => ({ ...prev, image: 'please select image' }))
                return;
            }
            if (file.size > 5 * 1024 * 104) {
                setError(prev => ({ ...prev, image: 'image file size must 5 Mb equal or less' }))
            }
            setUser(prev => ({ ...prev, image: file }))
            setError(prev => ({ ...prev, image: undefined }))
        }


    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setUser(prev => ({
            ...prev,
            [name]: value
        }))

        

    }

    console.log(user);

function onSubmit(e:React.FormEvent) {
    e.preventDefault()
    console.log(user);
    
}
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <span>name</span>
                    <input onChange={handleChange} className='border-2' type="text" name='name' />
                </div>
                <div>
                    <span>email</span>
                    <input onChange={handleChange} className='border-2' type="email" name='email' />
                </div>

                <div>
                    <span>password</span>
                    <input onChange={handleChange} className='border-2' type="password" name='password' />
                </div>
                <div>
                    <span>image</span>
                    <input onChange={handleImageChange} className='border-2' type="file" name='password' accept="image/*" />
                </div>
                <button type='submit'>submit</button>
            </form>
        </div>
    );
};

export default UserForm2;