import React from 'react';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

import MainCarousel from './MainCarousel';
import PostsCards from './PostsCards';

const carouselHeight = 800;

const styles = {
  transparency:{
    background: 'rgba(0, 0, 0, 0.8)',
    width: '100%',
    height: carouselHeight,
    margin: 0,
    position: 'relative',
  },
  topMargin: {
    marginTop: 25,
  }
}

class Home extends React.Component{
    render(){
        const {classes} = this.props;
        return(
            <>
                <div className={classes.transparency} key={1}>
                    <MainCarousel carouselHeight={carouselHeight}/>
                    <Grid container style={{height: '100%'}} justify="center" alignItems="center" direction="column">
                        <Typography color="secondary" variant="h1" style={{fontFamily:'Titrbold', marginBottom: 20}}><b>پوشیدنی های تِم</b></Typography>
                        <Typography variant="h6" style={{color: 'rgba(255, 255, 255, 0.5)'}}>تمتو عوض کن</Typography>
                    </Grid>
                </div>
                <Container maxWidth="md" className={classes.topMargin} key={2}>
                    <PostsCards />
                </Container>
            </>
        );
    }
}

export default withStyles(styles)(Home);