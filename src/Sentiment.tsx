import React, { useState, useEffect, useContext } from 'react';
import { Grid, Paper, Switch, makeStyles } from '@material-ui/core';
import { Information } from './Information';
import { CustomizedTimeline } from './Timeline';
import { PMData } from './types/PMData';
import { FirebaseContext } from './firebase/firebase';

import 'firebase/firestore'

const useStyles = makeStyles(() => ({
    switchGrid: {
        alignSelf: 'center',
        padding: '8px',
        width: 'max-content',
        marginTop: '12px',
        backgroundColor: '#424242',
        color: '#ffffff'
    }
}));

export const Sentiment = () => {
    const classes = useStyles();
    const firebase = useContext(FirebaseContext);
    const doc = firebase.firestore().collection(`pm`).doc('events');

    const [sentiments, setSentiments] = useState([] as PMData[]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isSpeechesOnly, setIsSpeechesOnly] = useState(false);

    const [allSentiments, setAllSentiments] = useState([] as PMData[])
    const [events, setEvents] = useState([])
    useEffect(() => {
        doc.get().then((item) => {
            const data = item.data();

            setIsLoaded(true)
            setAllSentiments(data!.items)
            setEvents(data!.items.filter((i: any) => i.type && i.type === "event"))
            setSentiments(data!.items.filter((item: PMData) => item.name && item.name.includes('speech')))

        }).catch((err) => console.error(err));
    }, []);

    if (!isLoaded) {
        return (<div>Loading</div>)
    }

    const toggleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.checked) {
            setSentiments(allSentiments.filter((item: PMData) => item.name && item.name.includes('speech')));
        } else {
            setSentiments(allSentiments.filter((item: PMData) => item.name && !item.name.includes('speech')));
        }
        setIsSpeechesOnly(event.target.checked)
    }
    return (
        <Grid container>
            <Grid item xs={4}>
                <Information />
            </Grid>
            <Grid item xs={8} style={{ display: 'flex', flexDirection: 'column' }}>
                <Paper elevation={3} className={classes.switchGrid}>
                    Speeches
              <Switch
                        checked={isSpeechesOnly}
                        color="default"
                        onChange={toggleSwitch}
                    />
              All Transcripts
            </Paper>
                <CustomizedTimeline data={sentiments} events={events} />
            </Grid>
        </Grid>
    );
}