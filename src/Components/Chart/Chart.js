import React, { useState, useEffect } from 'react'
import {fetchDailyData, fetchByCountry} from '../../Api'
import './Chart.css'
import { Line, Bar } from 'react-chartjs-2';

const Chart = (props) =>{
    // console.log(props)
    const [dailyData, setDailyData] = useState([])
   
    useEffect(()=>{

        const fetchChartData = async() =>{
            setDailyData(await fetchDailyData())
        }
        fetchChartData();
    },[])

    let lineChart = (dailyData.length) ? 
    <Line 
       data={{
           labels:dailyData.map(elem=>elem.reportDate),
           datasets: [{
               label:'Confirmed',
               data: dailyData.map(elem=>elem.confirmed.total),
               borderColor:'blue',
               backgroundColor:'rgba(0,0,255, 0.2)'
           }, {
               label:'Deaths',
               data: dailyData.map(elem=>elem.deaths.total),
               borderColor:'red',
               backgroundColor:'rgba(255,0,0, 0.2)'
           }]
       }} 
    /> : null;

    let barChart = (props.data.confirmed)? <Bar 
        data={{
            labels:['Infected', 'Recovered', 'Deaths'],
            datasets: [{
                // label:'confirmed',
                data:[`${props.data.confirmed.value}`,`${props.data.recovered.value}`,`${props.data.deaths.value}`],
                backgroundColor:['rgba(112, 224, 255)', 'rgba(112, 255, 169)', 'red']
            }]
        }}

        options = {{
            legend:{display:false}
        }}
    /> : null

    

    return(
        <>
        <div className='container'>

        {props.data.confirmed ? ((props.data.confirmed.value>20000000) ? lineChart : barChart) : null}

        
        </div>
        </>
    )
}

export default Chart