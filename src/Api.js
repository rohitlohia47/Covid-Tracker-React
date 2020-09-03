import React from 'react'


export const fetchData = async () =>{
let data = await fetch('https://covid19.mathdro.id/api')
let newData = await data.json()


// console.log(newData)
return {
    confirmed:newData.confirmed,
    recovered:newData.recovered,
    deaths:newData.deaths,
    lastUpdate:newData.lastUpdate
}
}

export const fetchCountries = async () =>{
    let countries = await fetch('https://covid19.mathdro.id/api/countries')
    let countriesJSON = await countries.json();
    

    return countriesJSON
}

export const fetchByCountry = async (countryName) =>{
    // console.log(countryName)

    if(countryName=='global'){
        let data = await fetch('https://covid19.mathdro.id/api')
        let newData = await data.json()
        return newData
    }
 let data = await fetch(`https://covid19.mathdro.id/api/countries/${countryName}`)
 let modifiedData = await data.json();

 return modifiedData
}


export const fetchDailyData = async() =>{

    let data= await fetch('https://covid19.mathdro.id/api/daily')
    let modifiedData = await data.json();

    return modifiedData

} 
