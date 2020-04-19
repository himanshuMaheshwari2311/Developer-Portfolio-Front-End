import React from 'react';
import { makeStyles, Container, Grid, Card, CardContent, CardMedia, CardActions, Typography, Button, Grow } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    cardGrid: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        justifyContent: 'center',
        width: '100%',
    },
    card: {
        height: '100%',
        // width: `calc((100v + 200px)/4)`,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    typographyStyleHeader: {
        fontFamily: 'monospace',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        margin: '0 auto',
        letterSpacing: '.15em',
    }
}));


const cards = [{ 'key': 1, 'heading': 'Github', 'content': 'This is a media card. You can use this section to describe the content.' },
{ 'key': 2, 'heading': 'Stackoverflow', 'content': 'This is a media card. You can use this section to describe the content.' },
{ 'key': 3, 'heading': 'LinkedIn', 'content': 'This is a media card. You can use this section to describe the content.' },
]

const Feature: React.FC = () => {
    const classes = useStyles();
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={3}>
                <Grow in={true} timeout={1000}>
                    <Grid item xs={12} md={12} sm={12} lg={12}>
                        <Typography component="h3" variant="h3" align="center" color="textPrimary" className={classes.typographyStyleHeader} gutterBottom>
                            Features
                        </Typography>
                    </Grid>
                </Grow>
                {cards.map((card) => (
                    <Grid item key={card['key']} xs={6} sm={6} md={4} lg={4}>
                        <Grow in={true} timeout={1000 * card['key']}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://source.unsplash.com/random"
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {card['heading']}
                                    </Typography>
                                    <Typography>
                                        {card['content']}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        View
                                </Button>
                                </CardActions>
                            </Card>
                        </Grow>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Feature;