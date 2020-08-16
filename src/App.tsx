import React from 'react';
import { Sentiment } from './Sentiment';

import './App.css';
import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  boxOutline: {
    height: '60vh',
    display: 'block',
    textAlign: 'center',
    color: '#f6f6f6'
  },
  boxOutlineTwo: {
    marginTop: '20vh',
    display: 'block',
    textAlign: 'center',
    color: '#f6f6f6'
  },
  boxOutlineThree: {
    marginTop: '10vh',
    marginBottom: '10vh',
    display: 'block',
    textAlign: 'center',
    color: '#f6f6f6',
    padding: '70pt'
  },
  headingTextOne: {
    paddingTop: '30vh'
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Box className={classes.boxOutline}>
        <Typography variant="h4" className={classes.headingTextOne}>An Analysis of Sentiment in Australian Prime Ministers</Typography>
      </Box>
      <Box className={classes.boxOutlineTwo}>
        <Typography variant="h6">A Govhack 2020 Project created by Benjamin Pickford</Typography>
      </Box>
      <Box className={classes.boxOutlineThree}>
        <Typography variant="h6">Prime Ministers throughout Australian history are there to lead us through difficult and prosperous times. This is usually done by being a source of positive action, or by going on the attack and trying to mitigate weaknesses by being a source of power</Typography>
      </Box>
      <Box className={classes.boxOutlineThree}>
        <Typography variant="h6">
        Using data from https://github.com/wragge/pm-transcripts and MonkeyLearns Sentiment Analysis API, a timeline view has been constructed to gives us an idea of how each Prime Minister went about their term, and can be linked to major events in Australian history (e.g. wars, recession, terrorism etc.).
        Events can then be correlated to each sentiment, or get an idea of how the Prime Minister at the time went about their leadership.
        As well as this, comparing speeches with all available data including live interviews, we can see if there's a difference in how each Prime Minister went about scripted speeches versus his demeanor on more ad hoc and casual appearances
        </Typography>
      </Box>
      <Box className={classes.boxOutlineThree}>
        <Typography variant="h4">Viewing the Data</Typography>
      </Box>
      <Sentiment />
    </div>
  );
}

export default App;
