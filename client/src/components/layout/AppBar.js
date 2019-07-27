import React from 'react';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/styles';
import { Grid, AppBar, Toolbar, Button, Typography } from '@material-ui/core';

const styles = {
    logoDiv: {
        background: 'url("https://i.ibb.co/T01RkwC/logowhite.png")',
        height: 50,
        width: 50,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }, 
    activeLink: {

    }
}

class Appbar extends React.Component{
    linkHandler(index, setPageIndex){
        this.props.history.push(index===0?'/':'shop');
        setPageIndex(index);
    }
    
    render(){
        const { classes, pageIndex, setPageIndex } = this.props;
        return(
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <Grid container style={{width: '100%'}} alignItems="center" direction="row-reverse">
                        <div className={classes.logoDiv}/>
                        <Grid>
                            <Button color={pageIndex===1?"default":"secondary"} variant={pageIndex===1?"outlined":"text"} onClick={() => this.linkHandler(1, setPageIndex)}><Typography>درباره ما</Typography></Button>
                            <Button color={pageIndex===0?"default":"secondary"} variant={pageIndex===0?"outlined":"text"} onClick={() => this.linkHandler(0, setPageIndex)}><Typography>خانه</Typography></Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withRouter(withStyles(styles)(Appbar));