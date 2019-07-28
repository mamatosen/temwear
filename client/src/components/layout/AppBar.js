import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/styles';
import { Grid, AppBar, Toolbar, Button, Typography, Menu, MenuItem, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import InboxIcon from '@material-ui/icons/MoveToInbox';

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
    activeLink: {

    }
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
                        <Button key={link.index + 100} color={pageIndex===index?"default":"secondary"} variant={pageIndex===index?"outlined":"text"} onClick={() => this.handleLinkClick(index, setPageIndex)} key={link.index}><Typography>{name}</Typography></Button>
                    );
                }
                else{
                    return(
                        <>
                            <Button key={link.index + 100} color={pageIndex===index?"default":"secondary"} variant={pageIndex===index?"outlined":"text"} onClick={this.handleClick.bind(this)} key={link.index}><Typography>{name}</Typography></Button>
                            <StyledMenu
                                key={link.index + 200}
                                id="customized-menu"
                                anchorEl={this.state.anchorEl}
                                keepMounted
                                open={Boolean(this.state.anchorEl)}
                                onClose={this.handleClose.bind(this)}
                            >
                                {link.inside.map((item, index) => {
                                    return(
                                        <Link to={item.path} style={{textDecoration: 'none'}} key={index}>
                                            <StyledMenuItem>
                                                <Typography color="secondary">{item.name}</Typography>
                                            </StyledMenuItem>
                                        </Link>
                                    );
                                })}
                            </StyledMenu>
                        </>
                    );
                }
            }).reverse()
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
                setPageIndex(link.index);
            }
        });

        return(
            <AppBar position="fixed" color="primary" style={{background: 'rgba(0, 0, 0, 0.8)'}}>
                <Toolbar>
                    <Grid container style={{width: '100%'}} alignItems="center" direction="row-reverse">
                        <Link to="/"><div className={classes.logoDiv}/></Link>
                        <Typography variant="h6" style={{marginLeft: 25, fontFamily:'Titrbold'}}>تِم</Typography>
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