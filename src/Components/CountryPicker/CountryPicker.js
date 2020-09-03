import React, { useEffect, useState } from 'react'
import {fetchCountries} from '../../Api'
import './CountryPicker.css'

const CountryPicker = (props) =>{

    const [countryName, changeCountryName] = useState([])
    const [hValue, changeHvalue] = useState('') 

    const changeHandle = (e) =>{
        props.setcountry(e.target.value)
    }

    useEffect(()=>{
        const fetchAPI = async () =>{

            let countriesobj= await fetchCountries();
           changeCountryName(countriesobj.countries)
        }

        fetchAPI()
    }, [])

    
    // console.log(hValue)


    return(
        <>
        
        <select onChange={changeHandle} className='selectcountry'>
            <option   value="global">Global</option>
            {countryName.map((elem)=> <option value={elem.name}>{elem.name}</option>)}
           
        </select>
        {/* <h1>{hValue}</h1> */}
        </>
    )
}

export default CountryPicker