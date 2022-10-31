import React, {useState} from 'react'
import Product from '../Product';
import './App.css';

const products = [
  { name: "Bolo de aniversário", icon: "🎂", price: 20.9 },
  { name: "Balão", icon: "🎈", price: 5.6 },
  { name: "Confete", icon: "🎉", price: 2.9 },
  { name: "Suco de caixinha", icon: "🧃", price: 1.9 },
  { name: "Doces diversos", icon: "🍬", price: 12.3 }
];


function App() {
  const [total, setTotal] = useState(0)
  return (
    <div>
      <div className="App">
        <b>Total da compra: </b>
        R$<span> {total.toFixed(2)} </span>
      </div>
      {products.map((product) => {
          const { name, icon, price } = product;
          return (
            <Product
              name={name}
              icon={icon}
              price={price}
              total={total}
              setTotal={setTotal}
            />
          )
        })}

    </div>
  )
}

export default App
