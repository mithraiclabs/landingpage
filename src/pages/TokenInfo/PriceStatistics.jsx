import React, { memo } from 'react';
import { Box, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import {PRICE_STATISTICS, PSY_INITIAL_LAUNCH_PRICE, TOTAL_SUPPLY, CIRCULATING_SUPPLY} from "../../constants"
import {theme} from "../../styles/theme"
import logo from "../../images/logo copy.png"

const useStyles = makeStyles(() => ({
  titleContainer: {
    fontFamily: 'Goldman',
    fontWeight: '400',
    marginBottom: '20px',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      fontSize: '50px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '30px',
    },
  },
  heading: {
    fontFamily: 'Goldman',
    fontWeight: '400',
    fontSize: '25px',
    marginBottom: '20px',
  },
  title: {
    lineHeight: '20px',
    color: '#A39090',
  },
}));



const PriceStatistics= memo(() => {
  const classes = useStyles();

  return (
    <Box>
      <Box component="img" src={logo} loading="lazy" height="60px" mb={2} />
      <Box className={classes.heading}>{PRICE_STATISTICS}</Box>

      <Box py={2} textAlign="left">
        <Typography className={classes.title}>
          {PSY_INITIAL_LAUNCH_PRICE}
        </Typography>
        <Typography>$0.12</Typography>
      </Box>

      <Box py={2} textAlign="left">
        <Typography className={classes.title}>
          {TOTAL_SUPPLY}
        </Typography>
        <Typography>1,000,000,000 PSY</Typography>
      </Box>

      <Box py={2} textAlign="left">
        <Typography className={classes.title}>
          {CIRCULATING_SUPPLY}
        </Typography>
        <Typography>62,000,000 PSY</Typography>
      </Box>
    </Box>
  );
});

export default PriceStatistics;
