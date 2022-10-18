import React from 'react'
import { useNavigate } from 'react-router-dom';

const Keypad = ({ setDialNumber, dialNumber, setShowKeyPad, setSearchInput, setshowSearch}) => {
    const navigate = useNavigate()
    const handleChange = (e) => {
        setDialNumber(e.target.value);
    };
    const removeLastDegit = () => {
        if(dialNumber.length < 1){
            setShowKeyPad(false)
            setSearchInput(false)
            setshowSearch(false)
            console.log("no number")
        }else{
        setDialNumber(prevDial => prevDial.split("").filter((item, index, arr) => index<arr.length-1).join('').toString())
        }
    }

    const handleClick = (e) => {
        let digit
         if(e.target.innerHTML === `#` || e.target.innerHTML === "*" ){
            digit = e.target.innerHTML
            setDialNumber(prevDial => prevDial + digit)
         }else{
          digit = e.currentTarget.children[0].innerHTML;
          setDialNumber(prevDial => prevDial + digit);
         }
    }
    const handleCloseKey = () => {
        if(dialNumber){
            setSearchInput(true)
            setshowSearch(true)
            setShowKeyPad(false)
        }else{
            setSearchInput(false)
            setShowKeyPad(false)
            setshowSearch(false)
        }
    }

  return ( <section id="dialpad" className="mx-auto w-full md:w-1/2 shadow-md bg-gray-400 fixed z-50 bottom-0">
            <div className="bg-white h-full  md:w-full mx-auto">
                <div id="displaydialinput" className="border-b-2 border-gray-400 border-solid">
                    <input  type="text" className=" text-3xl text-center w-full p-3" name="dialNumber" value={dialNumber} onChange={handleChange}/>
                    <button type='button' onClick={removeLastDegit} className="fa fas fa-times absolute z-50 right-2 mt-3 pr-3 text-4xl cursor-pointer"></button>
                </div>
                <div className="container py-2 px-5">
                    <div id="buttons"  className="text-2xl text-center grid grid-cols-3 items-center justify-center space-1">
                        <div onClick={handleClick}   className="button text-2xl w-20 m-auto p-2 rounded-full border-solid hover:border-x-2 hover:bg-slate-100 cursor-pointer"> 
                            <div>1</div> 
                            <div className="text-lg text-gray-600">@@</div>
                        </div>
                        <div onClick={handleClick}   className="button text-2xl w-20 m-auto p-2 rounded-full border-solid hover:border-x-2 hover:bg-slate-100 cursor-pointer">
                            <div >2</div> 
                            <div className="text-lg text-gray-600">ABC</div>
                        </div>
                        <div onClick={handleClick} className="button text-2xl w-20 m-auto p-2 rounded-full border-solid hover:border-x-2 hover:bg-slate-100 cursor-pointer">
                            <div>3</div> 
                            <div className="text-lg text-gray-600">DEF</div>
                        </div>
                        <div onClick={handleClick} className="button text-2xl w-20 m-auto p-2 rounded-full border-solid hover:border-x-2 hover:bg-slate-100 cursor-pointer">
                            <div  >4</div> 
                            <div className="text-lg text-gray-600">GHI</div>
                        </div>
                        <div onClick={handleClick} className="button text-2xl w-20 m-auto p-2 rounded-full border-solid hover:border-x-2 hover:bg-slate-100 cursor-pointer">
                            <div  >5</div> 
                            <div className="text-lg text-gray-600">JKL</div>
                        </div>
                    <div onClick={handleClick} className="button text-2xl w-20 m-auto p-2 rounded-full border-solid hover:border-x-2 hover:bg-slate-100 cursor-pointer">
                            <div  >6</div> 
                            <div className="text-lg text-gray-600">MNO</div>
                        </div>
                    <div onClick={handleClick} className="button text-2xl w-20 m-auto p-2 rounded-full border-solid hover:border-x-2 hover:bg-slate-100 cursor-pointer">
                            <div  >7</div> 
                            <div className="text-lg text-gray-600">PQRS</div>
                        </div>
                    <div onClick={handleClick} className="button text-2xl w-20 m-auto p-2 rounded-full border-solid hover:border-x-2 hover:bg-slate-100 cursor-pointer">
                            <div  >8</div> 
                            <div className="text-lg text-gray-600">TUV</div>
                        </div>
                    <div onClick={handleClick} className="button text-2xl w-20 m-auto p-2 rounded-full border-solid hover:border-x-2 hover:bg-slate-100 cursor-pointer">
                            <div  >9</div> 
                            <div className="text-lg text-gray-600">WXYZ</div>
                        </div>
                    <div onClick={handleClick} className="button text-2xl w-20 m-auto p-2 rounded-full flex justify-center items-center h-full border-solid hover:border-x-2 hover:bg-slate-100 cursor-pointer">*</div>
                    <div onClick={handleClick} className="button text-2xl w-20 m-auto p-2 rounded-full border-solid hover:border-x-2 hover:bg-slate-100 cursor-pointer">
                            <div  >0</div>
                            <div className="text-lg text-gray-600">+</div>
                        </div>
                    <div onClick={handleClick}  className="button text-2xl w-20 m-auto p-2 rounded-full flex justify-center items-center h-full border-solid hover:border-x-2 hover:bg-slate-100 cursor-pointer">#</div>
                    <div onClick={handleClick}  className="button text-2xl w-20 m-auto p-2 rounded-full border-solid hover:border-x-2 hover:bg-slate-100 cursor-pointer invisible"></div>
                        <div id="call" onClick={() => {navigate(`/calling/${dialNumber}`)}} className="button dialPadCall text-2xl w-20 m-auto p-5 rounded-full border-solid bg-green-800 hover:border-x-2 hover:border-green-300 cursor-pointer">
                            <i className="fa fa-phone text-white text-4xl text-center"></i>
                        </div>
                        <div id="closeDialPad" onClick={handleCloseKey} className="button text-2xl w-20 m-auto p-2 rounded-full border-solid h-full flex justify-center items-center hover:border-x-2 hover:bg-slate-100 cursor-pointer">
                            <i className="fa fa-arrow-down"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
export default Keypad


