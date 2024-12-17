// import React from "react";
import { NavBar } from '../../components';
import './Contact.css';

function handleFormSubmit() {
    return <p>Will add functionality soon!</p>;
}

const Contact = () => {
    return (
        <div>
            <NavBar/>
            <div className='contact container'>
                <h1>Contact Me</h1>
                <div className='contact form container'>
                    <form className='contact form' onSubmit={handleFormSubmit}>
                        <div className='contact form item'>
                            <label className='contact form item label'>Email:</label>
                            <input className='contact form item input' type='text'></input>
                        </div>
                        <div className='contact form item'>
                            <label className='contact form item label'>Phone Number:</label>
                            <input className='contact form item input' type='text'></input>
                        </div>
                        <div className='contact form item'>
                            <label className='contact form item label'>Full Name:</label>
                            <input className='contact form item input' type='text'></input>
                        </div>
                        <div className='contact form item'>
                            <label className='contact form item label'>Description:</label>
                            <input className='contact form item input' type='text'></input>
                        </div>
                        <input className='contact form submit' type='submit'/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;