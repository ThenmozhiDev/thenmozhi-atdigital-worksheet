import "./ExpenseItem.css";
import Card from './Card';
import { useState } from 'react';

function ExpenseItem(props) {
   //const expenseDate = new Date(2022, 8, 30);
    //const expenseTitle = "Car Insurance";
    //const expenseAmount = "$243.87";
    
    //const month = props.Date.toLocaleString('en-US', { month: 'long'});

    const day = props.Date.toLocaleString('en-US', { day: '2-digit'});
    const year = props.Date.getFullYear();



  return (
    <li>
    <Card className="expense-item">
        <div className="expense-date">
            <div className="expense-date__month">{props.Date.toLocaleString('en-US', { month: 'long'})}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
      {/*<div>{props.Date.toISOString()}</div>*/}
      <div className="expense-item__description ">
        <h2 className="expense-item h2">{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      
      </div>
    </Card>
    </li>
  );
}
export default ExpenseItem;
