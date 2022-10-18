import { useState, useEffect } from "react"

export const useLocalStorage = () => {

const [contactList, setContactList]  = useState([]);
    const getlocalStorage= () => {
        const fromLocal = JSON.parse(localStorage.getItem("contacts"));
        if (fromLocal === null) {
            return []
        } else {
            return fromLocal
        }
    }
    useEffect (() =>{
        setContactList(getlocalStorage())
        
    }, [])
  return contactList
}
 