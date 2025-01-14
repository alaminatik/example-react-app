import logo from './logo.svg';
import './App.css';

import AboutPage from './components/AboutPage';

import List from './components/List';
import MyButton from './components/MyButton';
import React, { useState } from 'react';

const user = {
  name: 'Alamin Mia',
  imageUrl: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?semt=ais_hybrid',
  imageSize: 90,
};

let content;
let isLoggedIn;

if (isLoggedIn) {
  content = <AboutPage />;
} else {
  content = <List />;
}

const products = [
  { title: 'Banana', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

const listItems = products.map(product =>
  <li
    key={product.id}
    style={{
      color: product.isFruit ? 'magenta' : 'darkgreen'
    }}
  >
    {product.title}
  </li>
);


export default function MyApp() {

  const [count, setCount] = useState(0);

  const test = 'This test text';
  const num = 15;
  const name = 'Alamin';

  function handleClick() {
    setCount(count + 1);
  }
  return (
    // <div className='app-container'>
    //   <h1>Welcome to my app</h1>
    //   <h1>{user.name}</h1>
    //   <AboutPage />
    //   <List />
    //   {/* <MyButton /> */}
    // </div>
  //   <div>
  //   {content}
  // </div>

  // <ul>{listItems}
  // <MyButton /> 
  // </ul>

  

  <div>
      <h1>Example React</h1>
      <MyButton numberprops = {num} name={name}/>
      <div>{test} {num + num}</div>
  </div>

  );
}

// function MyButton({ count, onClick }) {
//   return (
//     <button onClick={onClick}>
//       Clicked {count} times
//     </button>
//   );
// }
