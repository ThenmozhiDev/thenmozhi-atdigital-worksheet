import ExpenseItem from "./ExpenseItem";
import "./ExpenseItem.css";
import Card from "./Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpenseChart";

function NewExpense(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  const filterExpense = props.item.filter(expense => {
    return expense.Date.getFullYear().toString() === filteredYear; 
  });



  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filterExpense} />
   <ExpenseList item = {filterExpense} />
    </Card>
  );
}

export default NewExpense;
