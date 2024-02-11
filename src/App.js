
import './App.css';
import Header from './Components/Header';
import AddTransaction from './Components/AddTransaction';
import Balance from './Components/Balance';
import History from './Components/History';
import Analyse from './Components/Analyse';
import { useEffect, useState } from "react";

function App() {
  // const arrlocal=localStorage.getItem("arr")?JSON.parse(localStorage.getItem("arr")):[];
  const [sum,setSum] = useState(0);
  const [arr,setArr] = useState([]);
  const [income,setIncome] = useState(0);
  const [expense,setExpense] = useState(0);

  useEffect(() => {
    const storedArrayString = localStorage.getItem('arr');
    if (storedArrayString) {
      const parsedArray = JSON.parse(storedArrayString);
      setArr(parsedArray);
    }

    const sumloc = localStorage.getItem('sum');
    if (sumloc) {
      const parsedsum = JSON.parse(sumloc);
      setSum(parsedsum);
    }


  }, []);

  if(income===110){
    setIncome(99);
  }
  if(expense===110){
    setExpense(99);
  }
  // if(income===100000){
  //   setState(...arr,{"ram":7})
  // }
 


  return (
    <div id='main'>


    <div id='App1' className="App">
          <Header />
          <Balance sum={sum} setSum={setSum}/>
          <Analyse income={income} expense={expense}/>
          <AddTransaction setIncome={setIncome} income={income} setExpense={setExpense} expense={expense} setSum={setSum} sum={sum} arr={arr} setArr={setArr}/> 
          <History arr={arr} />
      </div>
    </div>
  );
}

export default App;
