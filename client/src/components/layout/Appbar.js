import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItem from '@material-ui/core/ListItem';
import Hidden from '@material-ui/core/Hidden';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { relative } from 'path';
import { AccountCircle, ShoppingCart } from '@material-ui/icons';

const styles = {
    logoDiv: {
        background: 'url("https://i.ibb.co/T01RkwC/logowhite.png")',
        height: 50,
        width: 50,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginLeft: 10,
    },
    loginButton: {
        position: 'relative',
        left: 0
    },
}

const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })(props => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));

  const StyledMenuItem = withStyles(theme => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);

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
                    inside: [
                        {
                            name: 'سریال',
                            path: '/shop/categories/serial',
                        },
                        {
                            name: 'موزیک',
                            path: '/shop/categories/music',
                        },
                        {
                            name: 'گیم',
                            path: '/shop/categories/game',
                        },
                    ],
                    path: '/shop/categories',
                }
            ],
            anchorEl: null,
        };
    }

    makeMenu(appbarLinks, setPageIndex, pageIndex){
        return(
            appbarLinks.map((link) => {
                const {index, name} = link;
                if(!link.inside)
                {
                    return(
                        <Button key={index + 100} color={pageIndex===index?"secondary":"default"} variant={pageIndex===index?"outlined":"text"} onClick={() => this.handleLinkClick(index, setPageIndex)} key={link.index}><Typography>{name}</Typography></Button>
                    );
                }
                else{
                    return(
                        <>
                            <Button key={index + 100} color={pageIndex===index?"secondary":"default"} variant={pageIndex===index?"outlined":"text"} onClick={this.handleClick.bind(this)} key={link.index}><Typography>{name}</Typography></Button>
                            <StyledMenu
                                key={index + 200}
                                id="customized-menu"
                                anchorEl={this.state.anchorEl}
                                keepMounted
                                open={Boolean(this.state.anchorEl)}
                                onClose={this.handleClose.bind(this)}
                            >
                                {link.inside.map((item, index) => {
                                    return(
                                        <Link to={item.path} style={{textDecoration: 'none'}} key={index}>
                                            <StyledMenuItem onClick={this.handleClose.bind(this)}>
                                                <Typography color="secondary">{item.name}</Typography>
                                            </StyledMenuItem>
                                        </Link>
                                    );
                                })}
                            </StyledMenu>
                        </>
                    );
                }
            })
        );
    }

    handleLinkClick(index, setPageIndex){
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

    handleClick(event) {
        this.setState({
            anchorEl: event.currentTarget,
        });
    }

    handleClose() {
        this.setState({
            anchorEl: null,
        });
    }
    render(){
        const { classes, pageIndex, setPageIndex, history } = this.props;
        let pathname = String(history.location.pathname);
        this.state.appbarLinks.forEach((link) => {
            if(pathname.includes(link.path)){
                if(!(link.path === '/' && link.path != pathname))
                    setPageIndex(link.index);
            }
        });

        return(
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <Grid container style={{width: '100%'}} alignItems="center">
                        <Grid item xs={8}>
                            <Grid container alignItems="center">
                                <Link to="/"><div className={classes.logoDiv}/></Link>
                                <Hidden smDown>
                                    <Typography variant="h6" style={{marginLeft: 25, fontFamily:'Titrbold'}}>تِم</Typography>
                                </Hidden>
                                {this.makeMenu(this.state.appbarLinks, setPageIndex, pageIndex)}
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid container justify="flex-end">
                                <Link to="/auth">
                                    <Button className={classes.loginButton}><AccountCircle /></Button>
                                </Link>
                                <Button className={classes.loginButton}><ShoppingCart /></Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withRouter(withStyles(styles)(Appbar));