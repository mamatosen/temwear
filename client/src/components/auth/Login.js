import React from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/styles';

const styles = {
    mainGrid: {
        width: '100%',
    }
};

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            tabValue: 0,
        };
    }

    handleTabChange(event, newVal){
        console.log(newVal);
        this.setState({
            tabValue: newVal
        });
    }

    render(){
        const { classes } = this.props;
        return(
            <Container maxWidth="sm" style={{marginTop: 75}}>
                <Card>
                    <CardContent>
                        <Grid container justify="center" alignItems="center" direction="column" className={classes.mainGrid}>
                            <AccountCircle fontSize="large"/>
                            <Tabs
                                value={this.state.tabValue}
                                onChange={this.handleTabChange.bind(this)}
                                indicatorColor="primary"
                                textColor="primary"
                                centered
                            >
                                <Tab label="ورود" />
                                <Tab label="ثبت نام" />
                            </Tabs>
                            {   
                                this.state.tabValue === 0 &&
                                <>
                                    <TextField margin="normal" variant="outlined" label="نام کاربری" key={1}/>
                                    <TextField margin="normal" variant="outlined" label="رمز عبور" key={2}/>
                                    <Button variant="contained" key={3}>ورود</Button>
                                </>
                            }
                            {   
                                this.state.tabValue === 1 &&
                                <>
                                    <TextField margin="normal" variant="outlined" label="نام کاربری" key={1}/>
                                    <TextField margin="normal" variant="outlined" label="رمز عبور" key={2}/>
                                    <TextField margin="normal" variant="outlined" label="استان" key={3}/>
                                    <TextField margin="normal" variant="outlined" label="شهر" key={4}/>
                                    <TextField margin="normal" variant="outlined" label="آدرس دقیق" key={5}/>
                                    <TextField margin="normal" variant="outlined" label="کد پستی" key={6}/>
                                    <TextField margin="normal" variant="outlined" label="شماره تلفن همراه" key={7}/>
                                    <Button variant="contained" key={8}>ثبت نام</Button>
                                </>
                            }
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        );
    }
}

export default withStyles(styles)(Login);