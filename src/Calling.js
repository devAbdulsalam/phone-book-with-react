import React, {useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {useLocalStorage} from './LocalStorage';
import Timmer from './Timmer';
import ringSound from './ringSound.mp3';

const Calling = () => {
	let navigate = useNavigate()
	const {id:userId}  = useParams()
    const loadpage = () =>{setTimeout(() => {
            navigate("/home")
        }, 10000);
    }
    const stopLoading = () => {clearTimeout(loadpage);}
    useEffect(() => {
        loadpage()
        stopLoading()
		playAudio()
    },[]);

    const HandleStart = () =>{
        navigate("/home")
    }
	const [mute, setMute]  = useState(false);
	const [speaker, setSpeaker] = useState(false)
	const audioElem = useRef(null)
	// const [PlayAudio, setPlayAudio]  = useState(false);
	// const [keyPad, setKeyPad]  = useState(false);
	// const [callTime, setCallTime]  = useState(false);
	const playAudio = () => {
		audioElem.current.play( )
  	}

	const handleMute = () => {
		setMute(!mute)
	}
	const handlePlayPause = () => {
		audioElem.current.play()
		let audioVolume = audioElem.current.volume
		setSpeaker(!speaker)
		if(audioVolume === 1){
			console.log("audioVolume = 0")
			return audioElem.current.volume = 0
		} else {
			console.log("audioVolume = 1")
			return audioElem.current.volume = 1
		}
	}
	const fullcontactList = useLocalStorage()
	const [contactList, setContactList]  = useState([]);
	const [contactId, setContactId]  = useState('');
	const [contact, setContact] = useState('');
	useEffect (() =>{  
		let checkContact = fullcontactList.indexOf((item) => item.id === userId);
			if (checkContact === -1) {
				console.log("no item found")
				setContact({id: new Date().getTime().toString(), firstName: '',  phone: '', email: '', company: '', relationship: '', address: '', lastCall: 0, favourite: 0})
				const newContact = { ...contact, firstName:userId, phone:userId};
				setContactId(newContact.id)
				setContactList([...fullcontactList, newContact]);
				}
			if (checkContact === +1) {
				console.log("item found")
				console.log(checkContact)
				setContactId(userId)
				setContactList(fullcontactList)
			}
	}, [fullcontactList])

	console.log(contactList)
	const  updateContact = contactList.filter((contact) => {
		if(contact.id === contactId){
			contact.lastCall = new  Date().getTime()
			contact.favourite += 1
			console.log(contact.lastCall)
            console.log(contact.favourite)
			console.log("found")
			}
			if(contact.id !== contactId){
				console.log(contact)
				console.log("not found")
			}
			return contact
		})
		
	const  callContact = updateContact.filter((contact) => contact.id === contactId)

		
  return (
    <section className="bg-green-200 w-full h-screen top-0">
		<div className="py-24 w-4/6 mx-auto">
			<div className="text-center text-6xl py-5"> 
				<i className="fa fa-user"></i>
			</div>
			<div className="flex flex-col justify-between text-center space-y-3">
				{callContact.map((contact) =>{
					const {id, firstname, lastName, phone} = contact
					return(
						<div key={id}>
						<h1 id="callingName" className="">{firstname || lastName}</h1>
						<p id="callingNumber" className="">{phone}</p>
						</div>
					)
				})}
				<p>Nigeria</p>
				<audio id="myAudio"  src={ringSound} type="audio/mp3"  ref={audioElem}/>
				<Timmer/>
				<p>calling</p>
			</div>
			<div className="flex justify-between text-center m-5 text-white">
				<div id="mute" className="cursor-pointer" onClick={handleMute}>
					<i id="mic" className={`fa fas ${mute ? 'fa-microphone-slash text-red-400' : 'fa-microphone-alt-slash'}`}></i>
					<p>Mute</p>
				</div>
				<div id="Keypad" className="cursor-pointer">
					<i className="fa-solid fa-mobile-retro"></i>
					<p>Keypad</p>
				</div>
				<div id="Speaker" className="cursor-pointer" onClick={handlePlayPause}>
					<i id="spk" className={`fa-solid ${speaker ? 'fa-volume-xmark text-red-400' : 'fa-volume-high'}`}></i>
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

