import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
 

const Intro = () => {
    let navigate = useNavigate()

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
 return(
        <header>
        <div className="flex justify-center place-content-center z-50 h-screen">
            <div className="flex flex-col justify-center p-10 text-center">
                <div id="welcome" className="flex justify-center m-6 cursor-pointer">
                    <i className="fa fa fa-phone text-6xl text-green-600"></i>
                </div>
                <h1 className="text-2xl m-2 font-bold">Welcome to My Phone Book Project</h1>
                <p className="text-xl">For more best user experience use mobile Phone or Tablet</p>
                <button className="bg-green-700 p-2 mt-3 rounded-lg hover:bg-green-500" onClick={() => {HandleStart()}}>Get Started</button>
            </div>
        </div>
        <div className="fixed w-full bottom-0">
            <div className="text-center p-6 bg-gray-200">
                <span>© <span>{new Date().getFullYear().toString()}</span> Copyright:</span>
                <a  className="text-gray-600 font-semibold" href="https:// " target="_blank" rel='noreferrer'>Dev.Abdulsalm.js</a>
            </div>
        </div>
    </header> 
    )
};

export default Intro