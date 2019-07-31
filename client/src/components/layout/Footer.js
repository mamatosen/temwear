import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
    topMargin: {
        marginTop: 50,
    },
    marginated: {
        margin: 25,
    }
};

class Footer extends Component{
    render(){
        const { classes } = this.props;
        return(
            <AppBar position="static" color="primary" className={classes.topMargin}>
                <Container maxWidth="md">
                    <Grid container direction="column" alignItems="center" className={classes.marginated}>
                        <Typography>
                            تمامی حقوق مادی و معنوی وبسایت و مطالب داخل آن مربوط به برند تِم می باشد.
                        </Typography>
                        <Typography style={{fontFamily: 'Nunito'}}>
                            programmed by mamatosen
                        </Typography>
                    </Grid>
                </Container>
            </AppBar>
        );
    }
}

export default withStyles(styles)(Footer);