import React from 'react'
import {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useLocalStorage} from './LocalStorage';

const History = () => {
	const navigate = useNavigate()
    const [history, setHistory]  = useState([]);
    const fullHistory = useLocalStorage()
    useEffect (() =>{
        setHistory(() => fullHistory)
        
    }, [fullHistory])
  return (
    <section id="navSection" data-id="history" className="">
					<div id="hArticles" className="flex flex-col p-2">
						{history.map((contact) => {
							const {id, firstName} = contact
							const time = "6 hr"
							return(
							<article key={id} className="history1 p-3">
								<div className="flex px-3 cursor-pointer">
									<div className="w-10/12 flex flex-col space-y-1 ">
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
								{/* <!-- other details --> */}
								<div id="otherDetails" className="my-2 p-2 border-t-2 border-gray-300 hidden ">
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
								</div>
							</article>
							)
						})}
						
					</div>
				</section>
  )
}

export default History