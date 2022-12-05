import React, { useState } from "react";

function Contact() {

    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        msg: '',
    });

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullname}`);
    }

    const inputEvent = (e) => {
        const {name, value} = e.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name] :value,
            }
        })
    }

    return(
        <>
            <div className="my-5">
                <h1 className="text-center">
                    Contact Us
                </h1>
            </div>
            <div className="container contact_div mb-120">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Full Name
                                </label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="exampleFormControlInput1"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={inputEvent} 
                                    placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Phone Number
                                </label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    id="exampleFormControlInput1"
                                    name="phone"
                                    value={data.phone}
                                    onChange={inputEvent} 
                                    placeholder="Enter your phone" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Email
                                </label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="exampleFormControlInput1"
                                    name="email"
                                    value={data.email}
                                    onChange={inputEvent} 
                                    placeholder="Enter your email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea 
                                    className="form-control" 
                                    id="exampleFormControlTextarea1" 
                                    rows="3"
                                    name="msg"
                                    value={data.msg}
                                    onChange={inputEvent}
                                    placeholder="Your message">                                   
                                </textarea>
                            </div>
                            <div className="col-auto">
                                <button
                                    type="submit" 
                                    className="btn btn-primary btn-edit mb-3">
                                Submit
                                </button>
                            </div>                       
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;