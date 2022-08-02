
import './App.css';
import ExpenseForm from './components/Expenses/ExpenseForm';
import ExpensesList from './components/List/ExpensesList'

function App() {

const list = [{
  title: 'Begimay',
  id: 1,
  price: 234,
  date: new Date(4,1,202)
},
{
  title: 'New TV',
  id: 2,
  price: 235,
  date: new Date(2,7,2021)
},
{
  title: 'Car Insuransse',
  id: 3,
  price: 235,
  date: new Date(3,7,2022)
},
{
  title: 'New Desk',
  id: 4,
  price: 235,
  date: new Date(14,7,2023)
}
]
  return (
    <div className="App">
     <ExpenseForm/>
     {list.map((el)=> {
       return <ExpensesList key={el.id} title = {el.title} price = {el.price} date={el.date}/>
     })}
    </div>
  );
}
export default App;
