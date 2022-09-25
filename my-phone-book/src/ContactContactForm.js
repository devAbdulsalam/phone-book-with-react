import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useLocalStorage} from './LocalStorage';

const CreateContactForm = () => {
    const navigate = useNavigate()

        // local storage
    const contactList = useLocalStorage()
        
    //  saveContactToLocalStorage
    function saveContactToLocalStorage(contact){
            const contacts = contact;
            let items = contactList
            items.push(contacts);
            localStorage.setItem("contacts", JSON.stringify(items))
            console.log("contact has been saved");
        };  
    const [contact, setContact] = useState({ firstName: '', lastName: '', phone: '', email: '', company: '', relationship: '', address: '' });
    const [contacts, setContacts] = useState([]);
        // handleChange
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setContact({ ...contact, [name]: value });
    };
    // handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (contact.firstName  && contact.phone){
        const newContact = { ...contact, id: new Date().getTime().toString(), history: "", favourite: ""};
        setContacts([...contacts, newContact]);
        setContact({ firstName: '', lastName: '', phone: '', email: '', company: '', relationship: '', address: '' });
        saveContactToLocalStorage(newContact)
        navigate('/home')
        }
    };
  return (
        <section id="createContactForm" className="bg-gray-400 z-20 h-screen top-0 w-full">
            <div className="relative w-full">
                <div id="contactHead" className="bg-gray-600 p-2 top-0 z-10 w-full">
                    <div className="flex justify-between items-center w-full px-3">
                        <div className="text-white text-2xl" onClick={() => navigate('/home')}>
                            <i className="fa fas fa-times cursor-pointer"></i>
                        </div>
                        <div className="">
                            <h1 className="text-white text-xl font-bold">Create contact</h1>
                        </div>
                    </div>
                </div >
                <div id="contactbody" className="w-full ">
                    <div className="w-full lg:w-80 mx-auto flex flex-col justify-center mt-5 p-2">		
                        <div id="contactImage" className="flex justify-center">
                            <div className=" text-center">
                                <div className="rounded-full bg-gray-100 p-2">
                                    <i className="fa fas fa-camera-retro text-4xl m-6 camera-icon"></i>
                                </div>
                                <h2 className="text-xl text-white m-2 font-semibold">Add photo</h2>
                            </div>
                        </div>
                        <div className="mt-3">
                            <form  className="mx-2 flex flex-col space-y-4 items-center">
                                <div className="flex text-2xl items-center justify-center m-2">
                                    <div className="m-2">
                                        <i className="fa fa-user"></i>
                                    </div>
                                    <label htmlFor="First Name" className=""></label>
                                        <input type="text" placeholder="First name" id="firstName" 
                                        onChange={handleChange}
                                        name='firstName'  value={contact.firstName}
                                        className="w-80 p-3 text-2xl rounded-md" />
                                    <div className="m-2 invisible">
                                        <i className="fa fas fa-caret-down invisible"></i>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center m-2">
                                    <div className=""></div>
                                    <label htmlFor="Last Name" className=""></label>
                                    <input type="text" placeholder="Last name" id="lastName" 
                                        onChange={handleChange}
                                        name='lastName'  value={contact.lastName}
                                        className="w-80 p-3 text-xl rounded-md"/>
                                </div>
                                <div className="flex text-2xl items-center justify-center m-2">
                                    <div className="m-2">
                                        <i className="fa fa-phone"></i>
                                    </div>
                                    <label htmlFor="Phone" className=""></label>
                                    <input type="text" placeholder="Phone"
                                        id="phone"
                                        onChange={handleChange}
                                        name='phone'  value={contact.phone}
                                        className="w-80 p-3 text-xl rounded-md" />
                                    <div className="m-2 invisible">
                                        <i className="fa fas fa-caret-down invisible"></i>
                                    </div>
                                </div>
                                 <div className="flex text-2xl items-center justify-center m-2  ">
                                    <div className="m-2">
                                        <i className="fa far fa-envelope"></i>
                                    </div>
                                    <label htmlFor="Email" className=""></label>
                                    <input type="email" placeholder="Email" onChange={handleChange}
                                        id='email' name='email'  value={contact.email}  className="w-80 p-3 text-xl rounded-md" />
                                    <div className="m-2 invisible">
                                        <i className="fa fas fa-caret-down invisible"></i>
                                    </div>
                                </div>
                                <div className="flex text-2xl items-center justify-center m-2">
                                    <div className=""></div>
                                    <label htmlFor="Company" className=""></label>
                                    <input type="text" placeholder="Company"
                                        onChange={handleChange}
                                        name='company'  value={contact.company}
                                        id="company"
                                        className="w-80 p-3 text-xl rounded-md" />
                                </div>
                                <div className="flex text-2xl items-center justify-center m-2 ">
                                    <label htmlFor="Relationship" className=""></label>
                                        <input type="text" placeholder="Relationship "
                                        id="relationship"
                                        name='relationship'  value={contact.relationship}
                                        onChange={handleChange}
                                        className="w-80 p-3 text-xl rounded-md" />
                                </div>
                                <div className="flex text-2xl items-center justify-center m-2 ">
                                    <div className="m-2">
                                        <i className="fa fas fa-location-arrow"></i>
                                    </div>
                                    <label htmlFor="Address" className=""></label>
                                    <input type="text" placeholder="Address"  id="address"  name='address'  value={contact.address} 
                                        onChange={handleChange}  className="w-80 p-3 text-xl rounded-md" />
                                    <div className="m-2 invisible">
                                        <i className="fa fas fa-caret-down invisible"></i>
                                    </div>
                                </div>
                                <div className=" flex p-1 m-1">
                                    <button className="text-white bg-blue-500 border-0 py-2 px-10 
                                    focus:outline-none  hover:bg-blue-700 rounded text-lg font-bold" type='submit' onClick={handleSubmit}>Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )};

export default CreateContactForm;