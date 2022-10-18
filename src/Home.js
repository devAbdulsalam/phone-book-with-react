import React, {useState} from 'react'
import Favourites  from './Favourites'
import { useNavigate} from 'react-router-dom';
import Keypad from './Keypad' 
import Search from './Search';

const Home = () => {
    const [showKeypad, setShowKeyPad] = useState(false)
    const [showSearch, setshowSearch] = useState(false)
    const [searchInput, setSearchInput] = useState(false)
    const navigate = useNavigate();
    const [dialNumber, setDialNumber] = useState('');
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
        <div className='fixed w-full z-20 bg-blue-300'>
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
                <button id="navBtn" data-id="favourite" className="w-2/6 flex justify-center p-3 cursor-pointer border-b-white border-b-4">
                    <i className="fas fa-star text-white text-2xl"></i>
                </button>
                <button id="navBtn" data-id="history" className="w-2/6 flex justify-center p-3 cursor-pointer" onClick={() => {navigate("/history")}}>
                    <i className="fas far fa-clock text-white text-2xl "></i>
                </button>
                <button id="navBtn" data-id="contacts" className="w-2/6 flex justify-center p-3 cursor-pointer" onClick={() => {navigate("/contacts")}}>
                    <i className="fas fas fa-user text-white text-xl "></i>
                </button>
            </div>
        </div>
        <div className='w-full h-36'></div>
        <Favourites/>
        {showSearch && <Search setDialNumber={setDialNumber} dialNumber={dialNumber} setSearchInput={setSearchInput} searchInput={searchInput} setShowKeyPad={setShowKeyPad}/>}
        {showKeypad && <Keypad setDialNumber={setDialNumber} dialNumber={dialNumber} setShowKeyPad={setShowKeyPad} showKeypad={showKeypad} setSearchInput={setSearchInput} searchInput={searchInput} setshowSearch={setshowSearch}/>}
       
        <button onClick={handleKeypad} className="w-20 h-20 z-100 absolute bottom-10 right-1/2 translate-x-1/2 flex justify-center items-center rounded-full font-bold text-4xl text-white bg-blue-500 cursor-pointer">
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

export default Home;


export const SettingMenu = () => {
  return (
    <div className="absolute top-2 right-2 z-30 bg-white shadow-sm p-4 hidden">
            <div className="">
                <div className="p-2 text-2xl">
                    <h2>Call History</h2>
                </div>
                <div className="p-2 text-2xl">
                    <h2>Clear frequents</h2>
                </div>
                <div className="p-2 text-2xl">
                    <h2>Settings</h2>
                </div>
            </div>
        </div>
  )
}
