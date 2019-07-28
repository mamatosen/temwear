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
    constructor(props){
        super(props);
        this.state = {
            appbarLinks: [
                {
                    index: 0,
                    name: "خانه",
                    inside: null,
                    path: '/',
                },
                {
                    index: 1,
                    name: "درباره ما",        
                    inside: null,
                    path: '/about',
                },
                {
                    index: 2,
                    name: "دسته بندی ها",
                    inside: [],
                    path: '/categories',
                }
            ]
        };
    }

    makeMenu(appbarLinks, setPageIndex, pageIndex){
        return(
            appbarLinks.map((link) => {
                const {index, name} = link;
                return(
                    <Button color={pageIndex===index?"default":"secondary"} variant={pageIndex===index?"outlined":"text"} onClick={() => this.linkHandler(index, setPageIndex)} key={link.index}><Typography>{name}</Typography></Button>
                );
            }).reverse()
        );
    }

    linkHandler(index, setPageIndex){
        let p = '/';
        this.state.appbarLinks.forEach((link) => {
            if(link.index === index){
                p = link.path;
                return;
            }
        })
        this.props.history.push(p);
        setPageIndex(index);
    }
    
    render(){
        const { classes, pageIndex, setPageIndex, history } = this.props;
        this.state.appbarLinks.forEach((link) => {
            if(link.path === history.location.pathname){
                setPageIndex(link.index);
            }
        });
        return(
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <Grid container style={{width: '100%'}} alignItems="center" direction="row-reverse">
                        <div className={classes.logoDiv}/>
                        <Grid>
                            {this.makeMenu(this.state.appbarLinks, setPageIndex, pageIndex)}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withRouter(withStyles(styles)(Appbar));