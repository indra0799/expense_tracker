import React from 'react'
import Task from './Task'

const History = ({arr}) => {
  
 
  return (
    <div className='history'>
      <div className='hisheading'>
        History
      </div>
      

      {arr.map((item,index)=>(
          <Task key={index} cash={item.text} amo={item.amount}/>
        ))}


       {/* <div className='hisblocks'>
        <p className='hismeans'>cash</p><span className='hisamo'>$500</span>
      </div>

      <div className='hisblocks'>
        <p className='hismeans'>cash</p><span className='hisamo'>$500</span>
      </div> */}
    
     
    </div>
  )
}

export default History