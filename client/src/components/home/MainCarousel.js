import React from 'react';
import Slideshow from 'react-slidez';

import { withStyles } from '@material-ui/core';

const styles = {
    slideShowImg:{
        height: 'auto',
        width: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
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
    render(){
        const {classes, carouselHeight} = this.props;

        return (
            <Slideshow
                showIndex={false}
                showArrows={false}
                slideInterval={10 * 1000}
                height={carouselHeight}
            >
                {
                    imgLinks.map((link, index) => {
                        return(
                            <img src={link} alt={index} className={classes.slideShowImg} key={index}/> 
                        );
                    })
                }
            </Slideshow>
        );
    }
}

const TestComp = (propss) => {
    return(
        <h1>{propss.input}</h1>
    );
}

export default withStyles(styles)(MainCrousel);