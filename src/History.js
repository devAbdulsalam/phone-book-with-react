import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Keypad from './Keypad';
import Search from './Search';
import {useLocalStorage} from './LocalStorage';
const History = () => {
    const navigate = useNavigate();
	const [showKeypad, setShowKeyPad] = useState(false)
    const [showSearch, setshowSearch] = useState(false)    
    const [searchInput, setSearchInput] = useState(false)
    const [dialNumber, setDialNumber] = useState('');
    const [history, setHistory]  = useState([]);
    const fullHistory = useLocalStorage()
    useEffect (() =>{
        setHistory(() => fullHistory)
        
    }, [fullHistory])
	const [showMoreDetails, setMoreDetails] = useState(false)
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
                <button id="navBtn" data-id="favourite" className="w-2/6 flex justify-center p-3 cursor-pointer" onClick={() => {navigate("/home")}}>
                    <i className="fas fa-star text-white text-2xl"></i>
                </button>
                <button id="navBtn" data-id="history" className="w-2/6 flex justify-center p-3 cursor-pointer border-b-white border-b-4" >
                    <i className="fas far fa-clock text-white text-2xl "></i>
                </button>
                <button id="navBtn" data-id="contacts" className="w-2/6 flex justify-center p-3 cursor-pointer" onClick={() => {navigate("/contacts")}}>
                    <i className="fas fas fa-user text-white text-xl "></i>
                </button>
            </div>
        </div>
     <div className='w-full h-36'></div>
    <section id="navSection" data-id="history" className="bg-gray-50">
					<div id="hArticles" className="flex flex-col p-2">
						{history.map((contact) => {
							const {id, firstName} = contact
							const time = "6 hr"
							return(
							<article key={id} className="history1 p-3">
								<div className="flex px-3 cursor-pointer">
									<div className="w-10/12 flex flex-col space-y-1 "  onClick={()=> setMoreDetails(!showMoreDetails)}>
										<h1 className="uppercase font-body text-2xl">{firstName}</h1>
										<div>
											<span className="fa fas fa-arrow-circle-down text-green-600"></span>
											<span className="fa fas fas fa-directions text-red-500"></span>
											<span>Mobile</span>
											<span>{time} ago</span>
										</div>
										<div>
											<p className="text-green-300">Unlimited MD</p>
										</div>
									</div>
									<div  id="call" className="cursor-pointer flex items-center" onClick={() => {navigate(`/calling/${id}`)}}>
										<i className="fa fa fa-phone text-3xl text-green-800"></i>
									</div>
								</div>
								
								{showMoreDetails &&  <div id="otherDetails" className="my-2 p-2 border-t-2 border-gray-300">
									<div>
										<div id="message" className="flex space-x-5 p-2 cursor-pointer">
											<i className="fa  fa-comment text-3xl"></i>	
											<h3 className="text-2xl mx-2">Send a message</h3>
										</div>
										<div className="flex space-x-5 p-2 cursor-pointer">
											<i className="fa fa-minus-circle text-3xl"></i>	
											<h3 className="text-2xl mx-2">Block number</h3>
										</div>
										<div className="flex space-x-5 p-2 cursor-pointer">
											<i className="fa fa-info-circle text-3xl"></i>	
											<h3 className="text-2xl mx-2">Call details</h3>
										</div>
										
									</div>
								</div>}
							</article>
							)
						})}
						
					</div>
				</section>
			
        {showSearch && <Search setDialNumber={setDialNumber} dialNumber={dialNumber} setSearchInput={setSearchInput} searchInput={searchInput} setShowKeyPad={setShowKeyPad}/>}
        {showKeypad && <Keypad setDialNumber={setDialNumber} dialNumber={dialNumber} setShowKeyPad={setShowKeyPad} showKeypad={showKeypad} setSearchInput={setSearchInput} searchInput={searchInput} setshowSearch={setshowSearch}/>}
       
        <button onClick={handleKeypad} className="w-20 h-20 fixed bottom-10 mx-auto left-3/4 flex justify-center items-center rounded-full font-bold text-4xl text-white bg-blue-500 cursor-pointer">
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

export default History