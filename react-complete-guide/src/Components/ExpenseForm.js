import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

    const [enterTitle, setEnterTitle] = useState("");
    const [enterAmount, setEnterAmount] = useState("");
    const [enterDate, setEnterDate] = useState("");

    //const [userInput, setUserInput] = useState({
       // enterTitle: "",
       // enterAmount: "",
      //  enterDate: ""
   // });

    const inputTitleHandler = (event) => {
        setEnterTitle(event.target.value)
       // setUserInput({
          //  enterTitle: event.target.value
        //})
    }
    const inputAmountHandler = (event) => {
        setEnterAmount(event.target.value)
      // setUserInput({
       // enterAmount: event.target.value
      // })
    }

    const inputDateHandler = (event) => {
        setEnterDate(event.target.value)
       //setUserInput({
       // enterDate: event.target.value
       //})
    }
const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
        title: enterTitle,
        Amount: enterAmount,
        Date: new Date(enterDate)
    };
    console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
}


 

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control label">
          <label>Title</label>
          <input type="text" onChange={inputTitleHandler} value={enterTitle}/>
        </div>
        <div className="new-expense__control label">
          <label>Amount</label>
          <input type="number"  min="0.01" step="0.01" value={enterAmount} onChange={inputAmountHandler}/>
        </div>
        <div className="new-expense__control label">
          <label>Date</label>
          <input type="date"  min="2022/09/1" max="2022/12/31" value={enterDate} onChange={inputDateHandler}/>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
