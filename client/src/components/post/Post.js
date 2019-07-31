import React from 'react';
import {withStyles} from '@material-ui/core';

const styles = {
    topMargin: {
        marginTop: 100,
    },
};

class Post extends React.Component{
    render(){
        const { classes } = this.props;
        return(
            <h1 className={classes.topMargin}>Post {this.props.match.params.id}</h1>
        );
    }
}

export default withStyles(styles)(Post);