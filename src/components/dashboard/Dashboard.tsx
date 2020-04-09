import { Grid, Card, CardHeader, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMedium, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import HighChartPie from './charts/HighChartPie'
import HighChartComponent from './charts/HighChartComponent';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexGrow: 1,
    },
    iconStyle: {
        fontSize: "36px",
    },
    gridContainer: {
        margin: "5px",
    },
    cardStyle: {
        background: "#fff",
    },
    cardCategory: { 
        color: theme.palette.primary.main,
        margin: "0",
        fontSize: "12px",
        marginTop: "0",
        paddingTop: "10px",
        marginBottom: "0"
    },
}));


const Dashboard: React.FC = () => {
    const classes = useStyles(); 
    
    return (
        <div className={classes.root}>
            <Grid container justify="center" alignContent="center" spacing={3} className={classes.gridContainer}>
                <Grid item xs={12} sm={6} md={3}>
                    <Card className={classes.cardStyle}>
                        <CardHeader action={
                            <IconButton>
                                <FontAwesomeIcon icon={faGithub} className={classes.iconStyle} style={{ color: "#000000" }} />
                            </IconButton>
                        }
                            title="Github">
                        </CardHeader>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card className={classes.cardStyle}>
                        <CardHeader action={
                            <IconButton>
                                <FontAwesomeIcon icon={faStackOverflow} className={classes.iconStyle} style={{ color: "#f48024" }} />
                            </IconButton>
                        }
                            title="Stackoverflow">
                        </CardHeader>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card className={classes.cardStyle}>
                        <CardHeader action={
                            <IconButton>
                                <FontAwesomeIcon icon={faLinkedin} className={classes.iconStyle} style={{ color: "#0077b5" }} />
                            </IconButton>
                        }
                            title="LinkedIn">
                        </CardHeader>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card className={classes.cardStyle}>
                        <CardHeader action={
                            <IconButton>
                                <FontAwesomeIcon icon={faMedium} className={classes.iconStyle} style={{ color: "#000000" }} />
                            </IconButton>
                        }
                            title="Medium">
                        </CardHeader>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Card>
                        <HighChartPie />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Card>
                        <HighChartComponent />
                    </Card>
                </Grid>
            </Grid>
        </div>
    )

}

export default withRouter(Dashboard);