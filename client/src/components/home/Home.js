import React from 'react';
import { withStyles, Grid, Typography } from '@material-ui/core';

import MainCarousel from './MainCarousel';

const carouselHeight = 800;

const styles = {    
  transparency:{
    background: 'rgba(0, 0, 0, 0.8)',
    width: '100%',
    height: carouselHeight,
    margin: 0,
    position: 'relative',
  },

}

class Home extends React.Component{
    render(){
        const {classes} = this.props;
        return(
            <>
                <div className={classes.transparency}>
                    <MainCarousel carouselHeight={carouselHeight}/>
                    <Grid container style={{height: '100%'}} justify="center" alignItems="center" direction="column">
                        <Typography color="secondary" variant="h1" style={{fontFamily:'Titrbold', marginBottom: 20}}><b>پوشیدنی های تِم</b></Typography>
                        <Typography variant="h6" style={{color: 'rgba(255, 255, 255, 0.5)'}}>تمتو عوض کن</Typography>
                    </Grid>
                </div>
                <h1>Hi</h1>
            </>
        );
    }
}

export default withStyles(styles)(Home);