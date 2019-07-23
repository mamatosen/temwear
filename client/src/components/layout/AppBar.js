import React from 'react';
import App from '../../App';

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
    }
}

class Appbar extends React.Component{

    constructor(props){
        super(props);
        
    }

    render(){
        const {classes} = this.props;
        return(
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Grid container style={{width: '100%'}} alignItems="center" direction="row-reverse">
                        <div className={classes.logoDiv}>
                        </div>
                        <Grid>
                            <Button color="secondary"><Typography>درباره ما</Typography></Button>
                            <Button color="secondary"><Typography>خانه</Typography></Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(Appbar);