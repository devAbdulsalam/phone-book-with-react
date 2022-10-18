import React from 'react'
import {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Keypad from './Keypad';
import Search from './Search';
import {useLocalStorage} from './LocalStorage';

const OpenContactsList = () => {
    const navigate = useNavigate()
    const [contactList, setContactList]  = useState([]);
    const fullcontactList = useLocalStorage()
        
    useEffect (() =>{
            fullcontactList.sort((a, b)=>{
                var x = a.firstName.toLowerCase();
                var y = b.firstName.toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            });
        setContactList(() => fullcontactList)
        
    }, [fullcontactList])

    let bgColor = ["green", "yellow", "gray", "#ff7f00", "#9a32cd", "#1874cd", "#1874cd", "#cd9b1d"]
    let finalBgColor
    function ColorCode() {
        for (let counter = 0; counter < bgColor.length; counter++) {
            finalBgColor = bgColor[Math.floor(Math.random() * bgColor.length)]
        }
        return finalBgColor;
    };
    
  return (
    <section className="bg-white w-full p-2 rounded-sm">
        <div id="allcontactH1">
            <h1 className="text-2xl pl-2">All contacts</h1>	
        </div>
        <div id="myContactList">
            {contactList.map((contact) => {
            const {id, firstName }= contact;
            return (            
            <article key={id} className="my-2">
                <div className="flex items-center " onClick={()=> {navigate(`/contact/${id}`)}}>
                    <div className="w-2/12">
                        <div id="firstLetter" style={{backgroundColor:`${ColorCode()}`}} className="rounded-full text-center p-3">
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
    const [showKeypad, setShowKeyPad] = useState(false)
    const [showSearch, setshowSearch] = useState(false)
    const [searchInput, setSearchInput] = useState(false)
    const navigate = useNavigate()
    const [dialNumber, setDialNumber] = useState('')
    const handleSearch = () =>{
        setshowSearch(true)
        setSearchInput(true)
        setShowKeyPad(false)
    }
    const handleKeypad = () =>{
        if(dialNumber){
            setshowSearch(true)
            setShowKeyPad(!showKeypad)
            setSearchInput(true)
            console.log("yes dialNumber")
        }
        if(!dialNumber){
            console.log("no dialNumber")
            setshowSearch(true)
            setSearchInput(false)
            setShowKeyPad(true)
        }
    }
  return (
    <div id="head" className="bg-blue-300 w-full relative max-h-screen overflow-auto ">
        <div className='fixed w-full z-50 bg-blue-300'  onClick={() => setShowKeyPad(showKeypad)}>
            <div className="p-1">
                <div className="bg-white m-1 px-5 py-2 relative flex items-center rounded-sm">
                    <div  className="w-9/12 bg-white flex items-center justify-between relative">
                         <div id="showsearchFeild" onClick={handleSearch} className="flex items-center justify-between w-10/12">
                            <i className="fas far fas fa-search text-gray-400 text-2xl cursor-pointer" onClick={handleSearch}></i>
                            <p className="w-10/12 text-gray-400 text-2xl">Search contacts</p>
                        </div>
                    </div>
                    <div className="flex justify-between w-3/12">
                        <div>
                            <i className="fas far fas fas fa-microphone text-gray-400 text-2xl cursor-pointer "></i>
                        </div>
                        <div id="openSettingMenu" className="relative">
                            <div className="text-gray-400 text-2xl flex flex-col -top-2 right-0 mx-2 font-bold cursor-pointer absolute">
                                <span className="-pt-3 -mt-2">.</span>
                                <span className="-pt-3 -mt-6">.</span>
                                <span className="-pt-3 -mt-6">.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div  className="flex mt-5 relative z-50">
                <button id="navBtn" data-id="favourite" className="w-2/6 flex justify-center p-3 cursor-pointer"  onClick={() => {navigate("/home")}}>
                    <i className="fas fa-star text-white text-2xl"></i>
                </button>
                <button id="navBtn" data-id="history" className="w-2/6 flex justify-center p-3 cursor-pointer" onClick={() => {navigate("/history")}}>
                    <i className="fas far fa-clock text-white text-2xl "></i>
                </button>
                <button id="navBtn" data-id="contacts" className="w-2/6 flex justify-center p-3 mt-1 cursor-pointer border-b-white border-b-4">
                    <i className="fas fas fa-user text-white text-xl "></i>
                </button>
            </div>
        </div>
        <div className='w-full h-36'></div>
 
    <div className="w-full flex justify-between relative bg-gray-100">
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
         {showSearch && <Search setDialNumber={setDialNumber} dialNumber={dialNumber} setSearchInput={setSearchInput} searchInput={searchInput}/>}
        {showKeypad && <Keypad setDialNumber={setDialNumber} dialNumber={dialNumber} setShowKeyPad={setShowKeyPad} showKeypad={showKeypad} setSearchInput={setSearchInput} searchInput={searchInput} setshowSearch={setshowSearch}/>}
       
         <button onClick={handleKeypad} className="w-20 h-20 fixed bottom-10 left-3/4 flex justify-center items-center rounded-full font-bold text-4xl text-white bg-blue-500 cursor-pointer">
            <div className="flex flex-col justify-center items-center -space-y-5 space-x-1 text-center">
                <div className="-mt-3">
                    <span className="ml-1">.</span>
                    <span className="ml-1">.</span>
                    <span className="ml-1">.</span>
                </div>
                <div>
                    <span className="ml-1">.</span>
                    <span className="m-1">.</span>
                    <span className="m-1">.</span>
                </div>
                <span className="w-full px-1 -md-2">.</span>
            </div>
        </button>
    </div>
  )
}
export default Contacts;