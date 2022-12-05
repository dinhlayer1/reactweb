import React, {useState} from "react";

function Login() {

    const [fullName, setFullname] = useState({
        fName: '',
        lName: '',
        email: '',
        phone: '',
    });

    const inputEvent = (e) => {

        const {value, name} = e.target;

        setFullname((preValue) => {
            return {
                ...preValue,
                [name]: value,
            }
            // if(name === 'fName') {
            //     return{
            //         fName: value,
            //         lName: preValue.lName,
            //         email: preValue.email,
            //         phone: preValue.phone
            //     }
            // }
            // else if(name === 'lName') {
            //     return{
            //         fName: preValue.fName,
            //         lName: value,
            //         email: preValue.email,
            //         phone: preValue.phone
            //     }
            // }
            // else if(name === 'email') {
            //     return{
            //         fName: preValue.fName,
            //         lName: preValue.lName,
            //         email: value,
            //         phone: preValue.phone
            //     }
            // }
            // else if(name === 'phone') {
            //     return{
            //         fName: preValue.fName,
            //         lName: preValue.lName,
            //         email: preValue.email,
            //         phone: value
            //     }
            // }
        });
    }

    const onSubmits = (e) => {
        e.preventDefault();
        alert('')
    }
    return (
        <>
            <div className="root__container">
                <h2>Hello {fullName.fName} {fullName.lName}</h2>
                <p>{fullName.email}</p>
                <p>{fullName.phone}</p>
                <form className="root__form" onSubmit={onSubmits}>
                    <input type='text'
                        placeholder="Enter your first name"
                        onChange={inputEvent}
                        value={fullName.fName}
                        name='fName'
                     />
                    <input type='text'
                        placeholder="Enter your last name"
                        onChange={inputEvent}
                        value={fullName.lName}
                        name='lName'
                    />
                    <input type='email'
                        placeholder="Enter your email"
                        onChange={inputEvent}
                        value={fullName.email}
                        name='email'
                    />
                    <input type='number'
                        placeholder="Enter your phone"
                        onChange={inputEvent}
                        value={fullName.phone}
                        name='phone'
                    />
                    <button type="submit">Sunmit</button>
                </form>
            </div>
        </>
    ) 
}

export default Login;