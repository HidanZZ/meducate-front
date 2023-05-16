import { Box, Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

const Timer = () => {
    const targetDate = '2023-10-31';
    const targetTime = '23:59:59';

    const calculateTimeRemaining = () => {
        const targetDateTime = new Date(`${targetDate}T${targetTime}`);
        const currentTime = new Date().getTime();
        const timeDiff = targetDateTime - currentTime;

        if (timeDiff <= 0) {
        // Timer has reached or passed the target date and time
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
        }

        const seconds = Math.floor(timeDiff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        return {
        days: days,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60,
        };
    };

    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    useEffect(() => {
        const timer = setInterval(() => {
        setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => {
        clearInterval(timer);
        };
    }, []);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid
                container
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
                width="80%"
                sx={{
                    border: '3px solid white',
                    borderRadius: '4px',
                    padding: '8px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                >
                <Grid item xs={2}>
                    <Typography variant="h5" align="center" color='white'>
                    {timeRemaining.days}
                    </Typography>
                    <Typography variant="h6" align="center" color='white'>
                    {timeRemaining.days === 1 ? ' day' : ' days'}
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography variant="h5" align="center" color='white'>
                    :
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="h5" align="center" color='white'>
                    {timeRemaining.hours}
                    </Typography>
                    <Typography variant="h6" align="center" color='white'>
                    {timeRemaining.hours === 1 ? ' hour' : ' hours'}
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography variant="h5" align="center" color='white'>
                    :
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="h5" align="center" color='white'>
                    {timeRemaining.minutes}
                    </Typography>
                    <Typography variant="h6" align="center" color='white'>
                    {timeRemaining.minutes === 1 ? ' minute' : ' minutes'}
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography variant="h5" align="center" color='white'>
                    :
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="h5" align="center" color='white'>
                    {timeRemaining.seconds}
                    </Typography>
                    <Typography variant="h6" align="center" color='white'>
                    {timeRemaining.seconds === 1 ? ' second' : ' seconds'}
                    </Typography>
                </Grid>
            </Grid>
        </Box>

    
  );
};


export default Timer;