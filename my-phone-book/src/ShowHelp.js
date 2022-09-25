import React from 'react'

const ShowHelp = () => {
      // showHelp
    const showHelp = () => {
    console.log("IntroPage")}
  return (
     <div className="relative ">
        <div className="showme" onClick={showHelp()}>
            <div  className="text-white text-2xl flex flex-col top-0 mr-2 font-bold cursor-pointer">
                <span className=" -mt-2">.</span>
                <span className="-pt-3 -mt-6">.</span>
                <span className="-pt-3 -mt-6">.</span>
            </div>
        </div>
        <div  id="help" className="absolute top-0 -right-4 z-30  bg-gray-800 hideme">
            <a href="https://www.google.com">
                <p className="text-xl text-white w-48 p-3">Help & FeedBack</p>
            </a>
        </div>
    </div>
  )
}

export default ShowHelp