import React from 'react'
import props from 'prop-types'
function Input({name, placeholder, type}:any) {
   if(type==='pclass')
    return (
      <div className='w-1/3 h-1/6 mb-7'>
        <label htmlFor="departure" className="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300">Select departure</label>
        <select id="departure" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected value="3">Unknown</option>
          <option value="0">Cherbourg</option>
          <option value="1">Queenstown</option>
          <option value="2">Southampton</option>
        </select>
      </div>
    )
    else if(type==='sex')
    return (
      <div className='w-1/3 h-1/6 mb-7'>
        <label htmlFor="sex" className="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300">Choose sex</label>
        <select id="sex" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected></option>
          <option value="0">Female</option>
          <option value="1">Male</option>
        </select>
      </div>
    )
  else
  return (
    <div className='w-1/3 h-1/6 mb-7'>
            <label htmlFor="first_name" className="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300">{name}</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required/>
    </div>
  )
}




export default Input