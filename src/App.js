import { Fragment, useState, useEffect } from 'react';
import './App.css';
import Form from './components/expense/Form';
import ItemList from './components/expense/ItemList';
import Summary from './components/expense/Summary';
import Loading from './components/ui/Loading';

function App() {
  const [items, setItems] = useState();
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(
        'https://testproject-f7f9a.firebaseio.com/expenses.json'
      );
      const data = await response.json();

      if (!response.ok) return;
      if (!data) return;
      const expArry = [];
      for (const key in data) {
        expArry.push({
          id: key,
          description: data[key].description,
          amount: +data[key].amount,
          // ...data[key],
        });
      }
      setIsLoading(false);
      setItems(expArry);
    };
    fetchData();
  }, [count]);

  const submitHandler = formData => {
    fetch('https://testproject-f7f9a.firebaseio.com/expenses.json', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => {
        console.log(res);
      })
      .then(data => {
        setCount(count + 1);
      });
  };

  return (
    <Fragment>
      <div className="header">Expense Tracker</div>
      <main>
        <Summary items={items} />
        {isLoading && (
          <div className="centered">
            <Loading />
          </div>
        )}

        {items && <ItemList items={items} />}
        <Form onSubmit={submitHandler} />
      </main>
    </Fragment>
  );
}

export default App;
