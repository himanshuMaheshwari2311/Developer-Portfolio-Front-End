import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        footer: {
            zIndex: theme.zIndex.drawer - 1,
            textAlign: "right",
            position: "absolute",
            bottom: "0",
            width: "100%",
            background: theme.palette.primary.main,
            height: "4%"
        },
        spanText: {
            margin: "6",
            fontSize: "16",
        },
    })
)

const Footer: React.FC = () => {
    const classes = useStyles();
    return(
        <div className={classes.footer} >
            <span className={classes.spanText}>
                Developer Portfolio, 2020 
            </span>
        </div>
    );
}

export default Footer;