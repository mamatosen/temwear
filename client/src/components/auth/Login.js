import React from 'react';

import { Container, Card, CardHeader, CardContent, Typography, Grid, TextField, Button } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/styles';

const styles = {
    mainGrid: {
        width: '100%',
    }
};

class Login extends React.Component{
    render(){
        const { classes } = this.props;
        return(
            <Container maxWidth="sm" style={{marginTop: 75}}>
                <Card>
                    <CardContent>
                        <Grid container justify="center" alignItems="center" direction="column" className={classes.mainGrid}>
                            <AccountCircle fontSize="large"/>
                            <TextField margin="normal" variant="outlined" label="نام کاربری"/>
                            <TextField margin="normal" variant="outlined" label="رمز عبور"/>
                            <Button variant="contained">ورود</Button>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        );
    }
}

export default withStyles(styles)(Login);