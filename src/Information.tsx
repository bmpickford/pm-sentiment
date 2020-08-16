import React from 'react';
import { Typography, makeStyles, Paper } from '@material-ui/core';
import TimelineDot from '@material-ui/lab/TimelineDot';

const useStyles = makeStyles((theme:any) => ({
    container: {
        padding: '26px',
        color: '#f6f6f6',
        marginTop: '40vh'
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
    paperOne: {
        padding: '12px 16px',
        backgroundColor: '#424242',
        color: '#f6f6f6',
        marginTop: '32vh'
    },
    paperTwo: {
        padding: '12px 16px',
        backgroundColor: '#424242',
        color: '#f6f6f6',
        marginTop: '32vh'
    },
    timelineDot: {
        width: '12px',
        height: '12px',
        display: 'inline-table',
        margin: '0 6px',
    },
    bodyText: {
        lineHeight: '40px',
    }
}));
  

export const Information = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography variant="h5" color="inherit">
                An anlysis of Australian Prime Minister's Sentiments
            </Typography>
            <Paper elevation={3} className={classes.paperOne}>
                <Typography variant="body1" color="inherit" className={classes.bodyText}>
                    The timeline on the right references a sentiment analysis done on our Prime Ministers speeches since 1939 where there is data readily available. A red dot
                    <TimelineDot variant="outlined" color="secondary" className={classes.timelineDot} />
                    indicates a negative sentiment throughout the speeches given by this Prime Minister, and
                    <TimelineDot variant="outlined" color="primary" className={classes.timelineDot} /> indicates an overall positive tone in their speeches
                </Typography>
            </Paper>
            <Paper elevation={3} className={classes.paperTwo}>
                <Typography variant="body1" color="inherit" className={classes.bodyText}>
                    This timeline includes some major events in Australian history to try and represent the events that shaped the country throughout the Prime Ministers
                    years in office.
                </Typography>
            </Paper>
            <Paper elevation={3} className={classes.paperTwo}>
                <Typography variant="body1" color="inherit" className={classes.bodyText}>
                    The switch at the top to toggle between the sentiment of the Prime Ministers speeches, and their overall sentiment including interviews.
                    A difference between the two indicates a difference between interviews and live appearances versus speeches given in a more formal setting
                </Typography>
            </Paper>
            <Paper elevation={3} className={classes.paperTwo}>
                <Typography variant="body1" color="inherit" className={classes.bodyText}>
                    When using the toggle, it can be noticed that there is an introduction of a new Prime Minister who took term in 1967 (John McEwen).
                    It should be noted he was an interim Prime Minister after the dissapearance of Harold Holt, and because of his short term there is no speech data on
                    record
                </Typography>
            </Paper>
        </div>
    );
}