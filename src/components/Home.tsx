import React from 'react'
import Input from './Input';
import Button from './Button';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { resolveTripleslashReference } from 'typescript';
import MultiPicker from 'rmc-picker';



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


    fetch(query).then(response=>response.json()).then(data=>{
      alert(data["prediction"])
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
            <input value={age} onChange={handleAge} type="text" id="age" className="text-gray-200 text-xl rounded-xl rounded bg-[#91807F] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            
          {ageOnlyDigitsFlag? 
          <motion.div animate={{y:10}} className="mt-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold mr-2">Error</strong>
            <span className="block sm:inline">Only digits please.</span>
          </motion.div> :<></>}

          </motion.div>
          <motion.div animate={{y:70}} className='w-1/3 h-1/6 mb-7'>
            <label htmlFor="sex" className="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300">Choose sex</label>
            <select onChange={handleSex} id="sex" className="text-gray-200 text-xl rounded-xl rounded bg-[#91807F] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected></option>
              <option value="0">Female</option>
              <option value="1">Male</option>
            </select>
          </motion.div>
          </div>
          <div className="flex gap-[100px]">
            <motion.div animate={{y:70}} className='w-1/3 h-1/6 mb-7'>
              <label htmlFor="parch" className="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300">Number of parents and children</label>
              <input value={parch} onChange={handleParch} type="text" id="parch" className="text-gray-200 text-xl rounded-xl rounded bg-[#91807F] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
              {parchOnlyDigitsFlag? 
              <motion.div animate={{y:10}} className="mt-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold mr-2">Error</strong>
                <span className="block sm:inline">Only digits please.</span>
              </motion.div> :<></>}
            
            </motion.div>
            <motion.div animate={{y:70}} className='w-1/3 h-1/6 mb-7'>
              <label htmlFor="departure" className="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300">Select departure</label>
              <select  onChange={handleDep} id="departure" className="text-gray-200 text-xl rounded-xl rounded bg-[#91807F] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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
              <input value={sbsp} onChange={handleSbsp} type="text" id="sbsp" className="text-gray-200 text-xl rounded-xl rounded bg-[#91807F] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              {sbspOnlyDigitsFlag? 
              <motion.div animate={{y:10}} className="mt-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold mr-2">Error</strong>
                <span className="block sm:inline">Only digits please.</span>
              </motion.div> :<></>}
            </motion.div>
            <motion.div animate={{y:70}} className='w-1/3 h-1/6 mb-7'>
              <label htmlFor="tclass" className="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300">Ticket class</label>
              <select  onChange={handleTclass} id="tclass" className="text-gray-200 text-xl rounded-xl rounded bg-[#91807F] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
              </select>
          </motion.div>
          </div>  
          
          <motion.div animate={{y:70}} className='w-1/3 h-1/6 mb-7'>
              <label htmlFor="fare" className="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300">Fare cost</label>
              <input value={fare} onChange={handleFare} type="text" id="fare" className="text-gray-200 text-xl rounded-xl rounded bg-[#91807F] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </motion.div>
            
        </div>
        
        <Button />
      </form>
    </div>
  )
}

export default Home