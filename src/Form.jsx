import React, {useState} from "react";

function Form() {

    const [name, setName] = useState('');
    const [fullName, setFullname] = useState();

    
    const inputEvent = (e) => {
        setName(e.target.value);
    };

    const onSubmit = (e) => {
        setFullname(name);

        e.preventDefault();
    }

    return(
        <>
            <div className="root__container">
                <h2>Hello {fullName}</h2>
                <form className="root__form">
                    <input type="text"
                        placeholder="Enter your name"
                        onChange={inputEvent}
                        value={name}
                    />
                    <button onClick={onSubmit}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Form;