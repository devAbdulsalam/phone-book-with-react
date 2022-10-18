import React from 'react'
import {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useLocalStorage} from './LocalStorage';

const Favourites = () => {
    const navigate = useNavigate()
    const [contactList, setContactList]  = useState([]);
    const fullcontactList = useLocalStorage()
    useEffect (() =>{
        SortFavourite(fullcontactList)
        
    }, [fullcontactList])
    const SortFavourite = (contactList) => {
        contactList.sort((a, b) => {return b.favourite - a.favourite})
        return setContactList(() => contactList)
    }
    let bgColor = ["green", "yellow", "gray", "#ff7f00", "#9a32cd", "#1874cd", "#1874cd", "#cd9b1d"]
    let finalBgColor
    function ColorCode() {
        for (let counter = 0; counter < bgColor.length; counter++) {
            finalBgColor = bgColor[Math.floor(Math.random() * bgColor.length)]
        }
        return finalBgColor;
    };

    const  FavStar = (id) => {
        let items = useLocalStorage()
        items = items.filter((item) => {
            if(id === item.id){
                item.favourite = true
                console.log(item.favourite)
            }
            return item
        })
        localStorage.setItem("contacts", JSON.stringify(items))
    }
  return (
    <section id="navSection" data-id="favourite">
        <div id="favouriteList" className="favouriteList grid grid-cols-2">
            {contactList.map((contact) => {
                const {id, firstName} = contact
            return(
                <article key={id} style={{backgroundColor:`${ColorCode()}`}} className="border-solid border border-white p-2 relative" onClick={() => {navigate(`/calling/${id}`)}}>
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