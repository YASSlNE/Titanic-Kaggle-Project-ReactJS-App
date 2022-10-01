import React from 'react'
import Input from './Input';
import Button from './Button';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resolveTripleslashReference } from 'typescript';
import MultiPicker from 'rmc-picker';

import survived from '../assets/survived.png'
import dead from '../assets/dead.png'
function Home() {

  

  const [age, setAge]=useState()

  const [sbsp, setSbsp]=useState()

  const [parch, setParch]=useState()

  const [dep, setDep]=useState()

  const [sex, setSex]=useState()

  const [fare, setFare]=useState()

  const [tclass, setTclass]=useState()

  const [ageOnlyDigitsFlag, setAgeOnlyDigitsFlag] = useState(0)

  const [sbspOnlyDigitsFlag, setSbspOnlyDigitsFlag] = useState(0)

  const [parchOnlyDigitsFlag, setParchOnlyDigitsFlag] = useState(0)

  const [fareFlag, setFareFlag] = useState(0)

  const [predictionModal, setPredictionModal] = useState(0)


  const [prediction, setPrediction] = useState(0)


  const variants = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  }
  


  const handleAge=(e:any)=>{
    e.preventDefault();
    let value=e.target.value
    // Only digits
    if(isNaN(Number(value)))
      setAgeOnlyDigitsFlag(1)
    else
      setAgeOnlyDigitsFlag(0)

    setAge(value)
  }

  const handleSbsp=(e:any)=>{
    e.preventDefault();
    let value=e.target.value
    // Only digits
    if(isNaN(Number(value)))
      setSbspOnlyDigitsFlag(1)
    else
      setSbspOnlyDigitsFlag(0)
    setSbsp(e.target.value)
  }

  const handleParch=(e:any)=>{
    e.preventDefault();
    let value=e.target.value
    // Only digits
    if(isNaN(Number(value)))
      setParchOnlyDigitsFlag(1)
    else
      setParchOnlyDigitsFlag(0)
    setParch(e.target.value)
  }

  const handleDep=(e:any)=>{
    e.preventDefault();
    setDep(e.target.value)
  }

  const handleSex=(e:any)=>{
    e.preventDefault();
    setSex(e.target.value)
  }
  const handleFare=(e:any)=>{
    e.preventDefault();
    //Control
    let value=e.target.value
    if(isNaN(Number(value)))
      setFareFlag(1)
    else
      setFareFlag(0)

    setFare(e.target.value)
  }

  const handleTclass=(e:any)=>{
    e.preventDefault();
    setTclass(e.target.value)
  }

  const handleSubmit=async (e:any)=>{
    e.preventDefault();
    // fetch('http://localhost:8000/api?pclass=2').then(response=>response.json()).then(data=>{ console.log(data); })

    const query="http://localhost:8000/api?pclass="+tclass+"&sex="+sex+"&age="+age+"&sibsp="+sbsp+"&parch="+parch+"&fare="+fare+"&embarked="+dep



    if(ageOnlyDigitsFlag || sbspOnlyDigitsFlag || parchOnlyDigitsFlag || fareFlag)
      alert("Error")
    else
      fetch(query).then(response=>response.json()).then(data=>{
        
        if(data["prediction"]==="Survived")
          setPrediction(1)
        else
          setPrediction(0)
        setPredictionModal(1)
      }).catch((reason)=>{
        alert(reason)
      })


    


  }




  return (
    <div className="w-full h-full">
      <form onSubmit={handleSubmit}>
        <div className='ml-[340px] pt-[200px]'>
          <div className="flex gap-[100px]">
          <motion.div animate={{y:70}} className=' w-1/3 h-1/6 mb-7'>
            <label htmlFor="age" className="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300">Age</label>
            <input required value={age} onChange={handleAge} type="text" id="age" className="text-gray-200 text-xl rounded-xl rounded bg-[#bdac9b] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            
          {ageOnlyDigitsFlag? 
          <motion.div animate={{y:10}} className="mt-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold mr-2">Error</strong>
            <span className="block sm:inline">Only digits please.</span>
          </motion.div> :<></>}

          </motion.div>
          <motion.div animate={{y:70}} className='w-1/3 h-1/6 mb-7'>
            <label htmlFor="sex" className="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300">Choose sex</label>
            <select required onChange={handleSex} id="sex" className="text-gray-200 text-xl rounded-xl rounded bg-[#bdac9b] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected></option>
              <option value="0">Female</option>
              <option value="1">Male</option>
            </select>
          </motion.div>
          </div>
          <div className="flex gap-[100px]">
            <motion.div animate={{y:70}} className='w-1/3 h-1/6 mb-7'>
              <label htmlFor="parch" className="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300">Number of parents and children</label>
              <input required value={parch} onChange={handleParch} type="text" id="parch" className="text-gray-200 text-xl rounded-xl rounded bg-[#bdac9b] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
              {parchOnlyDigitsFlag? 
              <motion.div animate={{y:10}} className="mt-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold mr-2">Error</strong>
                <span className="block sm:inline">Only digits please.</span>
              </motion.div> :<></>}
            
            </motion.div>
            <motion.div animate={{y:70}} className='w-1/3 h-1/6 mb-7'>
              <label htmlFor="departure" className="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300">Select departure</label>
              <select required  onChange={handleDep} id="departure" className="text-gray-200 text-xl rounded-xl rounded bg-[#bdac9b] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected value="3">Unknown</option>
                <option value="0">Cherbourg</option>
                <option value="1">Queenstown</option>
                <option value="2">Southampton</option>
              </select>
            </motion.div>
          </div>
          <div className="flex gap-[100px]">
            <motion.div animate={{y:70}} className='w-1/3 h-1/6 mb-7'>
              <label htmlFor="sbsp" className="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300">Number of spouses and siblings</label>
              <input required value={sbsp} onChange={handleSbsp} type="text" id="sbsp" className="text-gray-200 text-xl rounded-xl rounded bg-[#bdac9b] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              {sbspOnlyDigitsFlag? 
              <motion.div animate={{y:10}} className="mt-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold mr-2">Error</strong>
                <span className="block sm:inline">Only digits please.</span>
              </motion.div> :<></>}
            </motion.div>
            <motion.div animate={{y:70}} className='w-1/3 h-1/6 mb-7'>
              <label htmlFor="tclass" className="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300">Ticket class</label>
              <select required  onChange={handleTclass} id="tclass" className="text-gray-200 text-xl rounded-xl rounded bg-[#bdac9b] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
              </select>
          </motion.div>
          </div>  
          
          <motion.div animate={{y:70}} className='w-1/3 h-1/6 mb-7'>
              <label htmlFor="fare" className="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300">Fare cost</label>
              <input required value={fare} onChange={handleFare} type="text" id="fare" className="text-gray-200 text-xl rounded-xl rounded bg-[#bdac9b] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              {fareFlag? 
              <motion.div animate={{y:10}} className="mt-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold mr-2">Error</strong>
                <span className="block sm:inline">Set the cost correctly please.</span>
              </motion.div> :<></>}  
          </motion.div>













          {predictionModal && (
        <AnimatePresence >
          <motion.div 
            key="predictionModal" 
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"

            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-[410px] my-6 mx-auto max-w-3xl">
              
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Prediction
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setPredictionModal(0)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*RESULT*/}


                {prediction? <div className="flex gap-6 relative p-6 ">
                  <img className='max-w-[70px]' src={survived}></img>
                  <p className="my-4 text-center text-slate-900 font-black text-2xl leading-relaxed">
                    Passenger survived.
                  </p>
                </div> : <div className="flex gap-6 relative p-6 ">
                  <img className='max-w-[124px]' src={dead}></img>
                  <p className="my-4 text-center text-slate-900 font-black text-2xl leading-relaxed">
                    Passenger did not survive.
                  </p>
                </div>}


                
                




                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setPredictionModal(0)}
                  >
                    Close
                  </button>
                  
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div className="opacity-25 fixed inset-0 z-40 bg-black"></motion.div>
        </AnimatePresence>
      )}  
        </div>
        
        <Button />
      </form>
    </div>
  )
}

export default Home