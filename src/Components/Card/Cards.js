import React from 'react'
import "./Card.css"
import CountUp from 'react-countup';

import { Card, Grid, CardContent, Typography } from '@material-ui/core';

const Cards = (props) =>{
   const {confirmed, recovered, deaths, lastUpdate} = props.fetchedData

   if(!confirmed){
        return 'Loading.....'
   }
    
    return(
        <>
        <Grid container>
            <Grid item lg={2} md={1} sm={1} xs={1}>
            
            </Grid>
            <Grid container lg={8} md={10} xs={10} spacing={2}>
                <Grid item lg={4} md={4} xs={12}>
                <Card className="confirmedCard">
                    <CardContent>
                        <Typography  color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5" component="h2"><CountUp start={0} end={confirmed.value} duration={2} separator=',' /></Typography>
                        <Typography  color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" component="p">Number Active Cases</Typography>
                    </CardContent>
      
                 </Card>
               
            </Grid>
                <Grid item lg={4} md={4} xs={12}>
                <Card className="recoveryCard">
                    <CardContent>
                        <Typography  color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5" component="h2"><CountUp start={0} end={recovered.value} duration={2} separator=',' /></Typography>
                        <Typography  color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" component="p">Number Of Recoveries</Typography>
                    </CardContent>
      
                 </Card>
                </Grid>
                <Grid item lg={4} md={4} xs={12}>
                <Card className="deathCard">
                    <CardContent>
                        <Typography  color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5" component="h2"><CountUp start={0} end={deaths.value} duration={2} separator=',' /></Typography>
                        <Typography  color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" component="p">Number Of Deaths</Typography>
                    </CardContent>
      
                 </Card>
                </Grid>
            </Grid>
            <Grid item lg={2} md={1} sm={2} xs={1}>

            </Grid>

        </Grid>
        </>
    )

    
}

export default Cards