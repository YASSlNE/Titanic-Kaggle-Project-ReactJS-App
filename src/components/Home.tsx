import React from 'react'
import Input from './Input';
function Home() {
  return (
    <div className="w-full h-full">
        <div className='ml-[100px] pt-[200px]'>
          <div className="flex gap-[100px]">
            <Input name="Age"/>
            <Input name="Fare cost"/>
          </div>
          <div className="flex gap-[100px]">
            <Input name="Number of siblings and spouses"/>
            <Input name="Ticket class" type="tclass"/>
          </div>  
            <Input name="Number of parents and children"/>
            <Input name="Passenger class" type="pclass"/>
            <Input name="Sex" type="sex"/>
            
        </div>
        
    </div>
  )
}

export default Home