import React from 'react'
import { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom';
import {useLocalStorage} from './LocalStorage';

const Contact = () => {
    const contactList = useLocalStorage()
    const {id}  = useParams()
    let userId = id
    const navigate = useNavigate()

    const [contact, setContactList]  = useState([]);
    useEffect (() =>{
        setContactList(contactList)
      
    }, [contactList])
    const mycontact = contact.filter((contact) => contact.id === userId)

    const DeleteContact = (id)=> {
    let items = contactList
    items = items.filter((item) => item.id !== id) 
        console.log(items)
        // return items
        localStorage.setItem("contacts", JSON.stringify(items))
        navigate("/contacts")
        
    }

//  const FullsettingMenu = () => {
//         return(
        
//         )
//     }

    const [moreLinks, setMoreLinks] = useState(false)
    return (
      <section id="contantFullDetails" className="bg-gray-200 w-full h-screen">
        { mycontact.map((contact) =>{
            const { id, firstName, lastName, phone, email, relationship, address, company} = contact 
                return(            
                    <div key={id} >
                        <div className="bg-green-300 p-4">
                            <div>
                                <div className="text-white text-2xl" onClick={() => {navigate("/home")}}>
                                    <i className="fa fas fa-times cursor-pointer"></i>
                                </div>
                                <div className="flex justify-end space-x-8 text-2xl text-white">
                                    <i id="starContact" className="fas fa-star" onClick={() => {navigate("/home")}}></i>
                                    <i id="editContact" className="fas fa-pen" onClick={() => {navigate(`/editContact/${id}`)}}></i>
                                    <div onClick={() => setMoreLinks(!moreLinks)} className="relative mx-2">										
                                        <div className="text-white text-3xl flex flex-col -top-5 right-0 mx-2 font-bold cursor-pointer absolute">
                                            <span className="-pt-3 -mt-2">.</span>
                                            <span className="-pt-3 -mt-6">.</span>
                                            <span className="-pt-3 -mt-6">.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-8xl text-center text-white p-5 m-2">
                                    <i className="fa fas fa-user-secret"></i>
                                </div>
                                <div className="text-4xl font-bold text-white ">
                                    <h2 id="contactName">{firstName} {lastName}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-2">
                            <article className="shadow-md flex justify-center items-center p-5">
                                <div onClick={() => {navigate(`/calling/${id}`)}} className="w-3/12 text-3xl text-green-500 cursor-pointer">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="flex justify-between items-center w-full border-b-teal-50 border-solid">
                                    <div onClick={() => {navigate(`/calling/${id}`)}}>
                                        <p id="phoneNumber" className="text-2xl">{phone}</p>
                                        <p className="text-xl">Mobile</p>
                                    </div>
                                    <div id="message" className="cursor-pointer">
                                        <i className="fa  far fa-comment text-green-400 text-3xl"></i>	
                                    </div>
                                </div>								
                            </article>
                            <article className="shadow-md flex justify-center items-center p-5 mt-2">
                                <div className="w-3/12 text-3xl text-green-500">
                                        <i className="fas fas fas fa-mail-bulk"></i>
                                    </div>
                                    <div className="flex justify-between items-center w-full border-b-teal-50 border-solid">
                                    <div>
                                        <p id="myEmail" className="text-2xl">{email}</p>
                                        <p className="text-xl">Email<span id="mycontactId" className="invisible"></span></p>
                                    </div>
                                    <div id="mail" className="cursor-pointer">
                                        <i className="fa-solid fa-share text-green-400 text-3xl"></i>	
                                    </div>
                                </div>								
                            </article>
                        </div>
                        <div className="bg-white p-2">
                            <article className="shadow-md flex justify-center items-center p-5">
                                <div className="w-3/12 text-3xl text-green-500 cursor-pointer">
                                    <i className="fas fas fa-link"></i>
                                </div>
                                <div className="flex justify-between items-center w-full border-b-teal-50 border-solid">
                                    <div >
                                        <p id="myRelationship" className="text-2xl">{relationship}</p>
                                        <p className="text-xl">Relationship</p>
                                    </div>
                                    {/* <!-- <div id="message" className="cursor-pointer">
                                        <i className="fa  far fa-comment text-green-400 text-3xl"></i>	
                                    </div> --> */}
                                </div>								
                            </article>
                            <article className="shadow-md flex justify-center items-center p-5 mt-2">
                                <div  className="w-3/12 text-3xl text-green-500">
                                        <i className="fas fas fa-house-user"></i>
                                    </div>
                                    <div className="flex justify-between items-center w-full border-b-teal-50 border-solid">
                                    <div>
                                        <p id="myAddress" className="text-2xl">{address}</p>
                                        <p className="text-xl">Address</p>
                                    </div>
                                    <div id="direction" className="cursor-pointer">
                                        <i className="fa  far fas fa-directions text-green-400 text-3xl"></i>	
                                    </div>
                                </div>								
                            </article>
                            <article className="shadow-md flex justify-center items-center p-5 mt-2">
                                <div className="w-3/12 text-3xl text-green-500">
                                        <i className="fas fas fa-briefcase"></i>
                                    </div>
                                    <div className="flex justify-between items-center w-full border-b-teal-50 border-solid">
                                    <div >
                                        <p id="myCompany" className="text-2xl">{
                                        company}</p>
                                        <p className="text-xl">Company</p>
                                    </div>
                                    <div id="direction" className="cursor-pointer">
                                        <i className="fa  fas fa-directions text-green-400 text-3xl"></i>	
                                    </div>
                                </div>								
                            </article>
                        </div>
                    </div>)
            })            
        }            
        {moreLinks && <div className="bg-transparent z-50 fixed w-full h-full top-0  right-0 p-2 justify-end transition duration-500" onClick={() => setMoreLinks(!moreLinks)}>
            <div id="settinglinks" className="border-none bg-white shadow-lg relative w-4/6 h-fit mt-8 float-right duration-500 mr-3 text-xl pointer-events-auto 
                rounded-md outline-none text-current">
                <h1 className="p-3 cursor-pointer hover:bg-gray-100 active:bg-gray-300">Link</h1>
                <h1 id="deleteContact" className="p-3 cursor-pointer hover:bg-gray-100 active:bg-gray-300" onClick={() => {DeleteContact(id)}}>Delete</h1>
                <h1 className="p-3 cursor-pointer hover:bg-gray-100 active:bg-gray-300">Share</h1>
                <h1 className="p-3 cursor-pointer hover:bg-gray-100 active:bg-gray-300">Create shortcut</h1> 
                <h1 className="p-3 cursor-pointer hover:bg-gray-100 active:bg-gray-300">Open auto recording</h1>
                <h1 className="p-3 cursor-pointer hover:bg-gray-100 active:bg-gray-300">Set ringtone</h1>
                <h1 className="p-3 cursor-pointer hover:bg-gray-100 active:bg-gray-300">Route to voicemail</h1>
            </div>
        </div>}
       </section>
  )
}

export default Contact

