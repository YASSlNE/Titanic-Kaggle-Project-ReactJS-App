import React from 'react'
import Input from './Input';
import Button from './Button';
import { useState } from 'react';
function Home() {

  

  const [age, setAge]=useState(11)

  const [sbsp, setSbsp]=useState()

  const [parch, setParch]=useState()

  const [dep, setDep]=useState()

  const [sex, setSex]=useState()

  const [fare, setFare]=useState()

  const [tclass, setTclass]=useState()



  const handleAge=(e:any)=>{
    e.preventDefault();
    setAge(e.target.value)
  }

  const handleSbsp=(e:any)=>{
    e.preventDefault();
    setSbsp(e.target.value)
  }

  const handleParch=(e:any)=>{
    e.preventDefault();
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
      console.log(data)
    })


  }


  return (
    <div className="w-full h-full">
      <form onSubmit={handleSubmit}>
        <div className='ml-[340px] pt-[200px]'>
          <div className="flex gap-[100px]">
          <div className='w-1/3 h-1/6 mb-7'>
            <label htmlFor="age" className="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300">Age</label>
            <input onChange={handleAge} type="text" id="age" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          </div>
          <div className='w-1/3 h-1/6 mb-7'>
            <label htmlFor="sex" className="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300">Choose sex</label>
            <select onChange={handleSex} id="sex" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected></option>
              <option value="0">Female</option>
              <option value="1">Male</option>
            </select>
          </div>
          </div>
          <div className="flex gap-[100px]">
            <div className='w-1/3 h-1/6 mb-7'>
              <label htmlFor="parch" className="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300">Number of parents and children</label>
              <input onChange={handleParch} type="text" id="parch" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div className='w-1/3 h-1/6 mb-7'>
              <label htmlFor="departure" className="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300">Select departure</label>
              <select onChange={handleDep} id="departure" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected value="3">Unknown</option>
                <option value="0">Cherbourg</option>
                <option value="1">Queenstown</option>
                <option value="2">Southampton</option>
              </select>
            </div>
          </div>
          <div className="flex gap-[100px]">
            <div className='w-1/3 h-1/6 mb-7'>
              <label htmlFor="sbsp" className="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300">Number of spouses and siblings</label>
              <input onChange={handleSbsp} type="text" id="sbsp" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div className='w-1/3 h-1/6 mb-7'>
              <label htmlFor="tclass" className="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300">Ticket class</label>
              <select onChange={handleTclass} id="tclass" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
              </select>
          </div>
          </div>  
          
          <div className='w-1/3 h-1/6 mb-7'>
              <label htmlFor="fare" className="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300">Fare cost</label>
              <input onChange={handleFare} type="text" id="fare" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
            
        </div>
        
        <Button />
      </form>
    </div>
  )
}

export default Home