import Expenses from "./components/expenses/Expenses";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      date: new Date(2020, 7, 13),
      amount: 94.12
    }, {
      id: 'e2',
      title: 'New TV',
      date: new Date(2021, 3, 11),
      amount: 799.49
    }, {
      id: 'e3',
      title: 'Car Insurance',
      date: new Date(2021, 3, 27),
      amount: 294.67
    }, {
      id: 'e4',
      title: 'New Wooden Desk',
      date: new Date(2021, 6, 11),
      amount: 450
    }];


  return (
    <div>
      <h2>Hi, I am here to track and record your expenses</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
