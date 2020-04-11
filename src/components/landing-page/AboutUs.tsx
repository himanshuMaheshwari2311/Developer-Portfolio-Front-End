import React from 'react';
import { makeStyles, Container, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    aboutUsContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
      width: '100%',
    },
    typographyStyleHeader: {
        fontFamily: 'monospace',
        margin: '0 auto',
    }
  }));

const AboutUs: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.aboutUsContent}>
          <Container maxWidth="sm">
            <Typography component="h3" variant="h3" align="center" color="textPrimary" className={classes.typographyStyleHeader} gutterBottom>
              About Us
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" className={classes.typographyStyleHeader} paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
          </Container>
        </div>
    );
}

export default AboutUs;