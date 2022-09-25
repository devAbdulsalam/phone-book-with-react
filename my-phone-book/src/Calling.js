import React from 'react'
import {useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {useLocalStorage} from './LocalStorage';


const Calling = () => {
	let navigate = useNavigate()
	const {id}  = useParams()
    let userId = id
    const loadpage = () =>{setTimeout(() => {
            navigate("/home")
        }, 7000);
    }
    const stopLoading = () => {clearTimeout(loadpage);}
    useEffect(() => {
        loadpage()
        stopLoading()
    });

    const HandleStart = () =>{
        navigate("/home")
    }
	const fullcontactList = useLocalStorage()
	useEffect (() =>{
		setContactList(() => fullcontactList)
		
	}, [fullcontactList])

	const [contactList, setContactList]  = useState([]);
	const  callContact = contactList.filter((contact) => {
		if(contact.id === userId){
			return contact
		}
		return console.log("hi there")
	})
  return (
    <section className="bg-green-200 w-full h-screen top-0">
		<div className="py-24 w-4/6 mx-auto">
			<div className="text-center text-6xl py-5"> 
				<i className="fa fa-user"></i>
			</div>
			<div className="flex flex-col justify-between text-center space-y-3">
				{callContact.map((contact) =>{
					const {firstname, lastName, phone} = contact
					return(
						<>
						<h1 id="callingName" className="">{firstname || lastName}</h1>
						<p id="callingNumber" className="">{phone}</p>
						</>
					)
				})}
				<p>Nigeria</p>
				<audio id="myAudio">
					<source src="/src/ringSound.mp3" type="audio/mp3" />
				</audio>
				<p id="timer">00.02</p>
				<p>calling</p>
			</div>
			<div className="flex justify-between text-center m-5 text-white">
				<div id="mute" className="cursor-pointer">
					<i id="mic" className=" fa fas fa-microphone-alt-slash "></i>
					<p>Mute</p>
				</div>
				<div id="Keypad" className="cursor-pointer">
					<i className="fa-solid fa-mobile-retro"></i>
					<p>Keypad</p>
				</div>
				<div id="Speaker" className="cursor-pointer">
					<i id="spk" className="fa-solid fa-volume-high"></i>
					<p>Speaker</p>
				</div>
			</div>
			<div onClick={() => {HandleStart()}} className="button dialPadCall text-2xl w-20 mt-40 mx-auto p-5 rounded-full border-solid bg-red-500 hover:border-x-2 hover:border-red-400 cursor-pointer">
				<i className="fa fa-phone text-white text-4xl text-center"></i>
			</div>
		</div>
	</section>
  )
}

export default Calling