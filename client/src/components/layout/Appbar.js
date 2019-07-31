import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Toc from '@material-ui/icons/Toc';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import Drawer from '@material-ui/core/Drawer';

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
            openDrawer: false,
        };
    }

    toggleDrawer(event, open) {
        this.setState({
            openDrawer: open
        });
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

    makeSideBar(appbarLinks){
        return(
            <div
                role="presentation"
                onClick={(e) => this.toggleDrawer(e, false)}
                onKeyDown={(e) => this.toggleDrawer(e, false)}
            >
                <List>
                    {appbarLinks.map((link, index) => (
                        <ListItem button key={link.index}>
                            <Link to={link.path}>
                                <ListItemText primary={link.name} />
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </div>
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
                                <Hidden smUp>
                                    <IconButton size="small" onClick={(e)=>{this.toggleDrawer(e, true)}}>
                                        <Toc />
                                    </IconButton>
                                    <Drawer open={this.state.openDrawer} onClose={(e) => {this.toggleDrawer(e, false)}}>
                                        {this.makeMenu(this.state.appbarLinks, setPageIndex, pageIndex)}
                                    </Drawer>
                                </Hidden>
                                <Link to="/"><div className={classes.logoDiv}/></Link>
                                <Hidden smDown>
                                    <Typography variant="h6" style={{marginLeft: 25, fontFamily:'Titrbold'}}>تِم</Typography>
                                </Hidden>
                                <Hidden only={'xs'}>
                                    {this.makeMenu(this.state.appbarLinks, setPageIndex, pageIndex)}                                    
                                </Hidden>
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid container justify="flex-end">
                                <Button className={classes.loginButton}><ShoppingCart /></Button>
                                <Link to="/auth">
                                    <Button className={classes.loginButton}><AccountCircle /></Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withRouter(withStyles(styles)(Appbar));