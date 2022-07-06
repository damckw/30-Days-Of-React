import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// importing data
// eslint-disable-next-line
import { countriesData } from './data/countries'
// eslint-disable-next-line
import { tenMostHighestPopulations } from './data/ten_most_highest_populations'

const countries = [
  { name: 'Finland', city: 'Helsinki' },
  { name: 'Sweden', city: 'Stockholm' },
  { name: 'Denmark', city: 'Copenhagen' },
  { name: 'Norway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavík' },
]

// Country component
const Country = ({ country: { name, city } }) => {
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  )
}

// countries component
const Countries = ({ countries }) => {
  const countryList = countries.map((country) => (
    <Country key={country.name} country={country} />
  ))
  return <div>{countryList}</div>
}

function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

const Number = ({number}) => {
  return (
    <div style={{backgroundColor: number % 2 === 0 ? "green" : (isPrime(number) ? "red" : "yellow")}}>
      <h1>{number}</h1>
    </div>
  )
}

const numberContainer = {
  display: "grid"
}

const Numbers = ({ numbers }) => {
  const numberList = numbers.map((number) => (
    <Number key={number} number={number} />
  ))

  return <div className='numberContainer'>{numberList}</div>
}

const numbers = [...Array(32).keys()]


// The App, or the parent or the container component
// Functional Component
const App = () => {
  return (
    <div className='app'>
      <div style={{textAlign: "center"}}>
        <h1>30 Days of React</h1>
        <h2>Number Generator</h2>
        <Numbers numbers={numbers}></Numbers>
        {/* <Countries countries={countries} /> */}
      </div>
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
