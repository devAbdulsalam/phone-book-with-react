import React from 'react'
import {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useLocalStorage} from './LocalStorage';


const OpenContactsList = () => {
    const navigate = useNavigate()
    const [contactList, setContactList]  = useState([]);
    const fullcontactList = useLocalStorage()
    useEffect (() =>{
        setContactList(() => fullcontactList)
        
    }, [fullcontactList])

    //  

  return (
    <section className="bg-white w-full p-2">
        <div id="allcontactH1">
            <h1 className="text-xl">All contacts</h1>	
        </div>
        <div id="myContactList">
            {contactList.map((contact) => {
            const {id, firstName }= contact;
            return (            
            <article key={id} className="my-2">
                <div className="flex items-center " onClick={()=> {navigate(`/contact/${id}`)}}>
                    <div className="w-2/12">
                        <div id="firstLetter" className="rounded-full text-center p-3 bg-blue-500">
                            <h2 className="text-2xl cursor-pointer">{firstName.charAt(0).toUpperCase()}</h2>
                        </div>
                    </div>  
                    <h3 id="myName" className="text-2xl mx-5 my-4 cursor-pointer">{firstName}</h3>
                </div>
            </article>)
            })}
        </div>
    </section>
  )
}

const Contacts = () => {
const navigate = useNavigate()
  return (
    <div className="w-full flex debug justify-between relative bg-gray-100">
        <div className="w-2/12 text-center sticky pt-6">
            <h1 className="text-xl font-bold text-blue-500">A</h1>
        </div>
        <div className="w-10/12">
            <article className="bg-gray-100">
                <div className="flex justify-center items-center p-3"  onClick={() => {navigate(`/createContact`)}}>
                    <div className="w-2/12">
                        <i className="fa fas fa-plus text-3xl text-blue-500"></i>	
                    </div>
                    <h3 className="text-2xl mx-5 cursor-pointer">Create new contact</h3>
                </div>
            </article>
            <div id="myContactList">
                <OpenContactsList />
            </div>
        </div>
    </div>
  )
}
export default Contacts;