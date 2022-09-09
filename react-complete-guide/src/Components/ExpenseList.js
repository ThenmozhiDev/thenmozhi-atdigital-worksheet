import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

const ExpenseList = (props) => {
    
  let expenseContent = <p>No expense Found.</p>;

  if(props.item.length === 0) {
   return <h2 className="expenses-list__fallback">Found no expenses</h2>
  }
    return (
        <ul className="expenses-list">
{props.item.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.Amount}
          Date={expense.Date}
        />
      ))}

        </ul>
    )
}

export default ExpenseList;