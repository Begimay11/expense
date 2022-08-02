import ExpenseDate from "./ExpenseDate"
import './ExpensesList.css'

function ExpensesList(props){
    return <div className="expenses">
        <h1>{props.title}</h1>
        <div className="price">{props.price}</div>
        <ExpenseDate date={props.date}/>
    </div>
}
export default ExpensesList