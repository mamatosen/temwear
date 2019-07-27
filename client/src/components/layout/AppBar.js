import React from 'react';

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
    render(){
        const { classes, pageIndex } = this.props;
        return(
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <Grid container style={{width: '100%'}} alignItems="center" direction="row-reverse">
                        <div className={classes.logoDiv}>
                        </div>
                        <Grid>
                            <Button color="secondary"><Typography>درباره ما</Typography></Button>
                            <Button color={pageIndex==0?"#000":"secondary"} variant={pageIndex==0?"outlined":"text"}><Typography>خانه</Typography></Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(Appbar);