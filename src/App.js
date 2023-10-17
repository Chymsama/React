// import logo from './logo.svg';
import './App.css';
// import  Menu from './Components/Menu';
import React from 'react';
import { useState } from "react";
import { DISHES } from './shared/dishes';
import Menu from './Components/MenuComponent';
import AboutMe from './Components/Name';

// function App() {
//   return (
//     <div className='App'>
//       <Menu />
//     </div>

//   );
// }
// const Button = () => {
//   const [message, setMessage] = useState('');

//   const handleClick = () => {
//     setMessage('Hello Quang ne`');
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//       <p>{message}</p>
//     </div>
//   );

// };

// function ListDemo() {
//   const items = [
//     { id: 1, name: 'Item 1' },
//     { id: 2, name: 'Item 2' },
//     { id: 3, name: 'Item 3' },
//   ];

//   return (
//     <div>
//       <h2>Item: </h2>
//       <ul>
//         {items.map(item => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function Menutest() {
//   const [dishes] = useState(DISHES);

//   return (
//     <div className='AppQuang'>
//       <Menu dishes={dishes} />
//     </div>
//   );
// }

// function testtt() {
//   return (
//     <div>
//       <AboutMe />
//     </div>
//   )
// }

// const companies = [
//   { name: "Company One", category: "Finance", start: 1981, end: 2004 },
//   { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
//   { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
//   { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
//   { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
//   { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
//   { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
//   { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
//   { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
// ];

// function App() {
//   const [query, setQuery] = useState("");
//   const [items, setItems] = useState([
//     { name: "React" },
//     { name: "MongoDB" },
//     { name: "NodeJS" },
//     { name: "Express" },
//     { name: "Angular" },
//     { name: "VueJS" }
//   ]);

//   const filteredItems = items.filter(item =>
//     item.name.toLowerCase().includes(query.toLowerCase())
//   );

//   return (
//     <div>
//       Search: <input
//         type="text"
//         value={query}
//         onChange={e => setQuery(e.target.value)}
//       />

//       {filteredItems.map(item => (
//         <div key={item.name}>
//           {item.name}
//         </div>
//       ))}
//     </div>
//   );
// }

// function AboutMe() {
//   return (
//     <div>
//       <h1>Quang Ne</h1>
//       <p>HEHEHEHEHEHEHEHEHEHEHEHEHEH</p>
//     </div>
//   );
// }

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo('');
  }

  function handleDelete(index) {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <div>
        <h2>List of items</h2>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(0);

  function compute() {
    switch (operator) {
      case '+':
        setResult(num1 + num2);
        break;
      case '-':
        setResult(num1 - num2);
        break;
      case '*':
        setResult(num1 * num2);
        break;
      case '/':
        setResult(num1 / num2);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <div>
        First: <input value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
      </div>
      <div>
        Second: <input value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
      </div>
      <div>
        Operator:
        <select value={operator} onChange={(e) => setOperator(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </div>
      <button onClick={compute}>Compute</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default Calculator;
// export default ToDoList;
//export default AboutMe;
// export default App;

// export default testtt;
