import React, { useCallback, useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import {useLocalStorage} from './LocalStorage';

const Search = ({ setDialNumber, dialNumber, searchInput, setShowKeyPad, setSearchInput }) => {
    const navigate = useNavigate()
    const fullcontactList = useLocalStorage()
    const [showSearch, setshowSearch] = useState(true)
    const [contactList, setContactList]  = useState([]);
    
    let searchList = useCallback(() => { 
      let value = dialNumber.toLowerCase()
      let sorted =  fullcontactList.sort((a, b) => {
          var x = a.firstName.toLowerCase();
          var y = b.firstName.toLowerCase();
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
        })
      let found = sorted.filter((item) => item.phone.includes(value) || item.firstName.toLowerCase().includes(value) || item.lastName.toLowerCase().includes(value))
        return found  
      },[fullcontactList,dialNumber])
      useEffect (() =>{
      setDialNumber(dialNumber)
      // setSearchInput(searchInput)
      setContactList(() => searchList())
    }, [fullcontactList, dialNumber, setDialNumber, setSearchInput, searchInput, searchList])

    const handleChange = (e) => {
        setDialNumber(e.target.value)
        setContactList(() => searchList())
    };
    const removeLastDegit = () => {
        setDialNumber(prevDial => prevDial.split("").filter((item, index, arr) => index<arr.length-1).join(''))
    }
    const closeDialPad = () =>{
      setDialNumber("")
      setshowSearch(false)
      setSearchInput(false)
    }
    const handleScroll = () => {
      setShowKeyPad(false)
      setSearchInput(true)
    }
  return (showSearch &&
        <div className="w-full h-full absolute top-0 z-50 left-0 bg-white">
          {searchInput && <div className="border-b-2 border-gray-400 border-solid flex items-center justify-center space-x-1 shadow-md p-2">
              <i id="hidesearchbar" onClick={closeDialPad} className="m-1 fas fas fa-arrow-left text-blue-700 text-xl"></i>
              <input  type="text" className=" text-3xl text-center w-full p-3" name="dialNumber" value={dialNumber} onChange={handleChange}/>
              <i onClick={removeLastDegit} className="fa fas fa-times absolute z-50 right-2 mt-3 pr-3 text-4xl cursor-pointer"></i>
          </div>
}
          {dialNumber && 
          <section className="bg-white w-full p-2 rounded-sm" onScroll={handleScroll}>
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
          }
        </div>
  )
}

export default Search