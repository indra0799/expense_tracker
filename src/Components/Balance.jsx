import React from 'react'

const Balance = ({sum,setSum}) => {

  if(sum===110){
    setSum(99);
  }
  return (
    <div id='balance'>
        <p>YOUR BALANCE</p>
        <h2>{sum}</h2>
    </div>
  )
}

export default Balance