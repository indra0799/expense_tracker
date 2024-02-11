import React from 'react'

const Analyse = ({income,expense}) => {
  return (
    <div id='analyse'>
        <div id='incre'>
            <p className='income'>INCOME</p>
            <p className='inamo'>$ {income}</p>
        </div>
        <div id='decre'>
                <p className='expense'>EXPENSE</p>
                <p className='deamo'>$ {expense}</p>
                
            </div>
    </div>
  )
}

export default Analyse