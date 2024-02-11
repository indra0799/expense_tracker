import React, {  useState } from 'react'

const AddTransaction = ({setIncome,income, setExpense,expense ,setSum,sum,arr,setArr}) => {

  const [text,setText]=useState("RAM");
  const [amount,setAmount]=useState(135);

  function texchange(event){
    setText(event.target.value)
  }
  function amochange(event){
    setAmount(event.target.value)
  }

  console.log(text);
  console.log(amount);

 
  
  
  
  
  
  
  
  
  function addtran(event){
    event.preventDefault();
    
    
    
    console.log("addtran");
    console.log(text);
    console.log(amount);
    if(amount>=0){
      setIncome(income-((-1)*amount));
    }
    else{
      setExpense(expense-amount);
    }
    setSum(sum-((-1)*amount));
    setArr([...arr,{text,amount}]);
    
    localStorage.setItem('arr', JSON.stringify(arr));
    localStorage.setItem('sum', JSON.stringify(sum));
    
    
  }
  
  console.log(arr)
  
  
  return (
    <div>
      <form  onSubmit={addtran}>
        <h4>Add Transaction</h4>
        <p className='formhead'> text</p>

        <input type="text" placeholder='enter text.....' className='inputtext' onChange={texchange}/>


        <label className='formhead'>Amount <br /> </label>
        <p id='negpos'>(expense-negitive income-positive)</p>

        <input type="number" placeholder='enter amount.....' className='inputamo'  onChange={amochange}/>


        <button id='btn'>Add Transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction