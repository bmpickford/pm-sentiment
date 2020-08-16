import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { PMData } from './types/PMData';
import { Events } from './types/Events';
import { BaseData } from './types/BaseData';

const useStyles = makeStyles((theme: any) => ({
  paper: {
    display: 'flex',
    padding: '12px 16px',
    backgroundColor: '#424242',
    color: '#ffffff',
    border: '1px solid'
  },
  dateText: {
    color: '#bdbdbd'
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  imageItem: {
    maxHeight: '70px',
    margin: '0 20px 0 20px'
  },
  imageContainer: {
    flex: 1
  },
  dot: {
    height: '12px',
    width: '12px'
  }
}));

interface TimelineProps {
  data: PMData[],
  events: Events[],
}

export const CustomizedTimeline = ({ data, events }: TimelineProps) => {
  const classes = useStyles();

  let eventsAndData = (data as BaseData[]).concat(events as BaseData[]) as Array<PMData | Events>;
  eventsAndData = eventsAndData.sort((a: BaseData, b: BaseData) => a.yearFrom - b.yearFrom);

  const transformName = (name: string) => {
    const split = name.split('-');
    return `${split[1].charAt(0).toUpperCase() + split[1].slice(1)} ${split[0].charAt(0).toUpperCase() + split[0].slice(1)}`
  }

  const determineClassificationColour = (c: string) => {
    switch (c) {
      case "Positive":
        return "primary";
      case "Negative":
        return "secondary";
      default:
        return "grey";
    }
  }

  return (
    <Timeline align="alternate">
      {eventsAndData.map((item: PMData | Events, i: number) => {
        // if ( {
        //   return
        // }
        return (
          <TimelineItem key={i}>
            <TimelineOppositeContent className={classes.dateText}>
              <Typography variant="body2">
                {item.yearFrom}
              </Typography>
            </TimelineOppositeContent>
            {(item as PMData).name &&
              <TimelineSeparator>
                <TimelineDot variant="outlined" color={determineClassificationColour((item as PMData).class)} className={classes.dot} />
                <TimelineConnector />
              </TimelineSeparator>
            }
            {(item as Events).type &&
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
            }
            {(item as PMData).name &&
              <TimelineContent>
                {i % 2 === 0 ?
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6">
                      {transformName((item as PMData).name).toUpperCase()}
                    </Typography>
                    <div className={classes.imageContainer}>
                      <img src={`${(item as PMData).party.toLowerCase()}.png`} alt='political party' className={classes.imageItem} />
                    </div>
                  </Paper> :
                  <Paper elevation={3} className={classes.paper} style={{textAlign: 'right'}}>
                    <div className={classes.imageContainer}>
                      <img src={`${(item as PMData).party.toLowerCase()}.png`} alt='political party' className={classes.imageItem} />
                    </div>
                    <Typography variant="h6">
                      {transformName((item as PMData).name).toUpperCase()}
                    </Typography>
                  </Paper>
                }
              </TimelineContent>
          }
          {(item as Events).type &&
              <TimelineContent>
                {i % 2 === 0 ?
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6">
                      {(item as Events).desc}
                    </Typography>
                  </Paper> :
                  <Paper elevation={3} className={classes.paper} style={{textAlign: 'right'}}>
                   <Typography variant="h6">
                      {(item as Events).desc}
                    </Typography>
                  </Paper>
                }
              </TimelineContent>
          }
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
