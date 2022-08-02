import './ExpenseForm.css'

function ExpenseForm(){
    return <form className='expense-form'>
        <div className='expense-title'>
            <label>Title</label>
            <input type="text" />
        </div>
        <div>
            <label>Amount</label>
            <input type="number"/>
        </div>
        <div>
            <label>Date</label>
            <input type="date" />
        </div>
        <button>Add Expense</button> 
    </form>
}
export default ExpenseForm