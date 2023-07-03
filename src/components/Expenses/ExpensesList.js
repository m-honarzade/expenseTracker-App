import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  let expenseContent = <p>No expenses found.</p>;
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expense</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expenseItem) => (
        <ExpenseItem
          id={expenseItem.id}
          title={expenseItem.title}
          amount={expenseItem.amount}
          date={expenseItem.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
