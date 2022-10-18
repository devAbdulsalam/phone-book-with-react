import React from 'react'
// import ContactForm from './conponent/ContactForm';
import Keypad from './Keypad';
import {ShowKeypad} from './Keypad';
import Contacts from './Contacts';
import History  from './History'
import Favourites  from './Favourites'
// import Contact from './Contact'
// <Route path='/contact'element={<Contacts/>} /> 

const Home = () => {
  return (
    <div id="head" className="bg-blue-500 w-full relative">
        <div className='fixed w-full z-50 bg-blue-500'>
            <div className="p-1">
                <div className="bg-white m-1 px-5 py-2 relative flex items-center rounded-sm">
                    <div  className="w-9/12 bg-white flex items-center justify-between relative">
                        <div id="showsearchFeild"  className="flex items-center justify-between w-10/12">
                            <i className="fas far fas fa-search text-gray-400 text-2xl"></i>
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
            <div  className="flex mt-3 relative z-50">
                <button id="navBtn" data-id="favourite" className="w-2/6 flex justify-center p-3 cursor-pointer active_nav">
                    <i className="fas fa-star text-white text-2xl"></i>
                </button>
                <button id="navBtn" data-id="history" className="w-2/6 flex justify-center p-3 cursor-pointer">
                    <i className="fas far fa-clock text-white text-2xl "></i>
                </button>
                <button id="navBtn" data-id="contacts" className="w-2/6 flex justify-center p-3 cursor-pointer">
                    <i className="fas fas fa-user text-white text-xl "></i>
                </button>
            </div>
        </div>
        <div className='w-full h-40'></div>
        <Favourites/>
        <History/>
        <Contacts/>
        <Keypad/>
        <ShowKeypad/>
        {/* <Contact /> */}
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
