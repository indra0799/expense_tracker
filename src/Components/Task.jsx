import React from 'react'

const Task = ({cash,amo}) => {
if(amo<=0){

        return (
            <div className='hisblocksneg'>
            <p className='hismeans'>{cash}</p><span className='hisamo'>${amo}</span>
            </div>
  )
}

if(amo>0){

    return (
        <div className='hisblockspos'>
        <p className='hismeans'>{cash}</p><span className='hisamo'>${amo}</span>
        </div>
)
}



}

export default Task