import React from 'react'

export const ShowKeypad = () => {
  return (
    <section className="w-full flex justify-center p-3 fixed bottom-0">
        <div className="w-24 h-20 flex justify-center items-center  rounded-full font-bold text-4xl text-white bg-blue-500 cursor-pointer">
            <div className="flex flex-col justify-center items-center pl-1 -space-y-5 text-center">
                <div className="">
                    <span className="-ml-1">.</span>
                    <span className="-ml-1">.</span>
                    <span className="-ml-1">.</span>
                </div>
                <div>
                    <span className="-ml-1">.</span>
                    <span className="-ml-1">.</span>
                    <span className="-ml-1">.</span>
                </div>
                <span className="w-full pr-1">.</span>
            </div>
        </div>
    </section>
  )
}


const Keypad = () => {
  return (
    <section id="dialpad" className="mx-auto w-full md:w-1/2 shadow-md bg-gray-400 absolute z-50 bottom-0">
        <div className="bg-white h-full  md:w-full mx-auto">
            <div id="displaydialinput" className="border-b-2 border-gray-400 border-solid">
                <input id="displayNumbers" type="text" className=" text-3xl text-center w-full" placeholder="" />
                <i id="removelastinput" className="fa fas fa-times absolute z-50 right-2 mt-3 pr-3 text-4xl cursor-pointer"></i>
            </div>
            <div className="container py-2 px-5">
                <div id="buttons" className="text-2xl text-center grid grid-cols-3 items-center justify-center space-1">
                    <div className="button text-2xl w-20 m-auto p-2 rounded-full border-solid hover:border-x-2 hover:bg-slate-100 cursor-pointer"> 
                        <div>1</div> 
                        <div className="text-lg text-gray-600">@@</div>
                    </div>
                    <div className="button text-2xl w-20 m-auto p-2 rounded-full border-solid hover:border-x-2 hover:bg-slate-100 cursor-pointer">
                        <div>2</div> 
                        <div className="text-lg text-gray-600">ABC</div>
                    </div>
                    <div className="button text-2xl w-20 m-auto p-2 rounded-full border-solid hover:border-x-2 hover:bg-slate-100 cursor-pointer">
                        <div>3</div> 
                        <div className="text-lg text-gray-600">DEF</div>
                    </div>
                    <div className="button text-2xl w-20 m-auto p-2 rounded-full border-solid hover:border-x-2 hover:bg-slate-100 cursor-pointer">
                        <div>4</div> 
                        <div className="text-lg text-gray-600">GHI</div>
                    </div>
                    <div className="button text-2xl w-20 m-auto p-2 rounded-full border-solid hover:border-x-2 hover:bg-slate-100 cursor-pointer">
                        <div>5</div> 
                        <div className="text-lg text-gray-600">JKL</div>
                    </div>
                    <div className="button text-2xl w-20 m-auto p-2 rounded-full border-solid hover:border-x-2 hover:bg-slate-100 cursor-pointer">
                        <div>6</div> 
                        <div className="text-lg text-gray-600">MNO</div>
                    </div>
                    <div className="button text-2xl w-20 m-auto p-2 rounded-full border-solid hover:border-x-2 hover:bg-slate-100 cursor-pointer">
                        <div>7</div> 
                        <div className="text-lg text-gray-600">PQRS</div>
                    </div>
                    <div className="button text-2xl w-20 m-auto p-2 rounded-full border-solid hover:border-x-2 hover:bg-slate-100 cursor-pointer">
                        <div>8</div> 
                        <div className="text-lg text-gray-600">TUV</div>
                    </div>
                    <div className="button text-2xl w-20 m-auto p-2 rounded-full border-solid hover:border-x-2 hover:bg-slate-100 cursor-pointer">
                        <div>9</div> 
                        <div className="text-lg text-gray-600">WXYZ</div>
                    </div>
                    <div className="button text-2xl w-20 m-auto p-2 rounded-full flex justify-center items-center h-full border-solid hover:border-x-2 hover:bg-slate-100 cursor-pointer">*</div>
                    <div className="button text-2xl w-20 m-auto p-2 rounded-full border-solid hover:border-x-2 hover:bg-slate-100 cursor-pointer">
                        <div>0</div>
                        <div className="text-lg text-gray-600">+</div>
                    </div>
                    <div className="button text-2xl w-20 m-auto p-2 rounded-full flex justify-center items-center h-full border-solid hover:border-x-2 hover:bg-slate-100 cursor-pointer">#</div>
                    <div className="button text-2xl w-20 m-auto p-2 rounded-full border-solid hover:border-x-2 hover:bg-slate-100 cursor-pointer invisible"></div>
                    <div id="call" className="button dialPadCall text-2xl w-20 m-auto p-5 rounded-full border-solid bg-green-800 hover:border-x-2 hover:border-green-300 cursor-pointer">
                        <i className="fa fa-phone text-white text-4xl text-center"></i>
                        {/* <ion-icon className="bg-white text-white text-4xl text-center" name="call-outline"></ion-icon> */}
                    </div>
                    <div id="closeDialPad" className="button text-2xl w-20 m-auto p-2 rounded-full border-solid h-full flex justify-center items-center hover:border-x-2 hover:bg-slate-100 cursor-pointer">
                        <i className="fa fa-arrow-down"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Keypad


