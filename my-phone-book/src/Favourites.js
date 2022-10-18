import React from 'react'
import {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useLocalStorage} from './LocalStorage';

const Favourites = () => {
    const navigate = useNavigate()
    const [contactList, setContactList]  = useState([]);
    const fullcontactList = useLocalStorage()
    useEffect (() =>{
        setContactList(() => fullcontactList)
        
    }, [fullcontactList])
    const sortFavourite = (contactList) => {
        contactList.sort(function(a, b){return b.favourite - a.favourite})
        return contactList
    }

    const  FavStar = (id) => {
        let items = useLocalStorage()
        items = items.filter( function (item){
            if(id === item.contactId){
                item.favourite = true
            }
            return item
        })
        localStorage.setItem("contacts", JSON.stringify(items))
    }
    console.log(sortFavourite)
  return (
    <section id="navSection" data-id="favourite">
        <div id="favouriteList" className="favouriteList grid grid-cols-2">
            {contactList.map((contact) => {
                const {id, firstName} = contact
            return(
                <article key={id} className="bg-yellow-300 border-solid border border-white p-2 relative" onClick={() => {navigate(`/calling/${id}`)}}>
                <div id="fullContact" className="text-white text-2xl flex flex-col top-1 right-2 mx-2 font-bold cursor-pointer absolute">
                    <span className="-pt-3 -mt-3">.</span>
                    <span className="-pt-3 -mt-5">.</span>
                    <span className="-pt-3 -mt-5">.</span>
                </div>
                <h1 className="uppercase text-gray-100 text-8xl text-center">{firstName.charAt(0).toUpperCase()}</h1>
                <div className="flex justify-between p-2">
                    <h2 className="text-white text-2xl uppercase">{firstName}</h2>
                    <i className="fas fa-star text-white text-sm" onClick={() =>{FavStar(id)}}></i>
                </div>
            </article>
            )}
        )}
        </div>
    </section>
  )
}

export default Favourites