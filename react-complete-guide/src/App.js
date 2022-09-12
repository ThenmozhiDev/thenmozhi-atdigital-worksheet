import logo from './logo.svg';
import './App.css';
import ExpenseItem from './Components/ExpenseItem';
import NewExpense from './Components/NewExpense';
import Expense from './Components/Expense';
import { useState } from 'react';


  const Dummy_Expense = [
    { 
      id: 1,
      title: "Car Insurance",
      Amount: "234.65",
      Date: new Date(2022, 5, 6)
    },
    { 
      id: 2,
      title: "Bike Insurance",
      Amount: "100.35",
      Date: new Date(2022, 2, 25)
    },
    { 
      id: 3,
      title: "Auto Insurance",
      Amount: "125.10",
      Date: new Date(2022, 3, 27)
    },
    { 
      id: 4,
      title: "Van Insurance",
      Amount: "320.40",
      Date: new Date(2020, 6, 12)
    }
  ];

  function App() {
  const [expenses, setExpenses] = useState(Dummy_Expense);

  const addExpenseHandler =(expenses) => {
  
   setExpenses(preExpenses => {
    return [expenses, ...preExpenses];
   });
  }
console.log(expenses)
  return (
    <div >
     <h1 className='text'> Let's Get Started!</h1>
     <Expense onAddExpense={addExpenseHandler}/>
     <NewExpense item={expenses}/>
    </div>
  );
}

export default App;
