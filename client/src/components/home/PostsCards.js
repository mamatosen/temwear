import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { classes } from 'istanbul-lib-coverage';

const images = [
    {
        image: 'https://ae01.alicdn.com/kf/HTB19wHTX_jxK1Rjy0Fnq6yBaFXak/Classic-Anime-Ronin-Warriors-T-Shirt-Man-Vintage-Cartoon-3d-Print-Custom-T-shirt.jpg',
        title: 'تیشرت خوشگل'
    },
    {
        image: 'https://sc02.alicdn.com/kf/UTB86xC3hgnJXKJkSael760UzXXaC/Screen-Printed-Custom-labelled-cotton-t-shirt.png',
        title: 'تیشرت با طرح گوریل',
    },
    {
        image: 'https://www.ambromanufacturing.com/wp-content/uploads/2018/01/Custom-T-Shirt-Printing.jpg',
        title: 'تیشرت با طرح بی دندون'
    },
    {
        image: 'https://ae01.alicdn.com/kf/HTB19wHTX_jxK1Rjy0Fnq6yBaFXak/Classic-Anime-Ronin-Warriors-T-Shirt-Man-Vintage-Cartoon-3d-Print-Custom-T-shirt.jpg',
        title: 'تیشرت خوشگل'
    },
    {
        image: 'https://sc02.alicdn.com/kf/UTB86xC3hgnJXKJkSael760UzXXaC/Screen-Printed-Custom-labelled-cotton-t-shirt.png',
        title: 'تیشرت با طرح گوریل',
    },
    {
        image: 'https://www.ambromanufacturing.com/wp-content/uploads/2018/01/Custom-T-Shirt-Printing.jpg',
        title: 'تیشرت با طرح بی دندون'
    },    
]

const useStyles = makeStyles(theme => ({
    topMargin:{
        marginTop: 25,
    },
}));

export default function PostsCards() {
    const classes = useStyles();

    return(
        <Grid container>
            <Grid container justify="space-between" className={classes.topMargin}>
                <Grid md={3} xs={5}>
                    <TheCard />
                </Grid>
                <Grid md={3} xs={5}>
                    <TheCard />
                </Grid>
                <Grid md={3} xs={5}>
                    <TheCard />
                </Grid>
            </Grid>
        </Grid>
    );
}

function TheCard() {
    return(
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={images[0].image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        تیشرت زیبا
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        این یک تیشرت بسیار سکسی است که شما حتما باید آن را خریداری و پول خود را به ما واگذار نمایید چون ما بهتر بلدیم چی دداش؟ خرجش کنیم.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <CardActions>
                    <Button size="small" color="primary">
                        خرید
                    </Button>
                    <Button size="small" color="primary">
                        اطلاعات بیشتر
                    </Button>
                </CardActions>
            </CardActions>
        </Card>
    );
}