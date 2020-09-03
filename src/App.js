import React, { useEffect, useState } from 'react';
import Cards from './Components/Card/Cards.js'
import CountryPicker from './Components/CountryPicker/CountryPicker.js'
import Chart from './Components/Chart/Chart.js'
import {fetchData, fetchByCountry} from './Api'
import logo from './Logo/logo.png'
import './App.css';
import { render } from '@testing-library/react';

const App = () =>{
  
 const [cardData, changeCardData] = useState({})
 const [selectedCountry, chnageSelectedCountry] = useState('')


 const setCountry =  (countryName) =>{
  chnageSelectedCountry(countryName)
 

 }

 if (selectedCountry!==''){
  const loadCountryData = async(country) =>{
   const data = await fetchByCountry(country)
   changeCardData(data)
   
   }
   loadCountryData(selectedCountry)

 }

 



useEffect(async ()=>{
  const data = await fetchData()
  changeCardData(data)
}, [])





  // console.log(this.state)
  return (
   
    <div className="App">
      <img className='logo' src={logo} />
      <h1>Selected Country : {(selectedCountry==''? 'Global' : selectedCountry)}</h1>
      <Cards fetchedData={cardData}/>
      <CountryPicker setcountry={setCountry}/>
      <Chart data={cardData}/>
    </div>
  );


}



export default App;
