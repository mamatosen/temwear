import React from 'react';
import Slideshow from 'react-slidez';

import { withStyles } from '@material-ui/core';

const styles = {
    slideShowImg:{
        height: '100%',
        width: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'absolute',
        zIndex: -1,
        background: 'url("https://i.ibb.co/BfDcZ2X/1.jpg")',
    }
};

const imgLinks = [
    "https://i.ibb.co/BfDcZ2X/1.jpg",
    "https://i.ibb.co/YTHCdxG/2.jpg",
    "https://i.ibb.co/kD630y4/3.jpg",
    "https://i.ibb.co/kDZcKPM/4.jpg",
    "https://i.ibb.co/Rzzyxh7/5.jpg",
];

class MainCrousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            index: 0,
        };
    }

    tick(){
        this.setState({index: this.state.index === imgLinks.length - 1 ? 0 : this.state.index + 1})
    }

    componentDidMount(){
        setInterval(this.tick.bind(this), 10000);
    }

    render(){
        const {classes, carouselHeight} = this.props;
        return (
            <div className={classes.slideShowImg} style={{background: 'url("' + imgLinks[this.state.index] + '")'}}/>
        );
    }
}

export default withStyles(styles)(MainCrousel);