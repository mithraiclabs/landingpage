import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import makeStyles from '@mui/styles/makeStyles';
import PriceStatistics from './PriceStatistics';
import PriceTrackers from './PriceTrackers';
import PsyList from './PsyList';
import {MARKET_INFORMATION, PRICE_TRACKERS, BLOCK_EXPLORERS, PSY_IS_LISTED_ON} from '../../constants'
import {theme} from "../../styles/theme"


const MarketInfoCard = styled(Paper)(() => ({
  backgroundColor: 'transparent',
  backgroundImage: 'none',
  color: 'white',
  border: '2px solid white',
  borderRadius: '20px',
  minHeight: '700px',
  margin: '0 0 20px 0',
  padding: '30px 50px',
}));

const useStyles = makeStyles(() => ({
  root: {
    color: 'white',
    width: '100%',
    marginTop: '40px',
    marginBottom: '40px',
  },
  titleContainer: {
    fontFamily: 'Goldman',
    fontWeight: '400',
    margin: '30px 0',
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
}));

const PsyListData = [
  {
    logo:"/images/image 10.png",
    routeLink:"/"
  },
  {
    logo:"/images/image 10.png",
    routeLink:"/"
  },
  {
    logo:"/images/image 10.png",
    routeLink:"/"
  },
  {
    logo:"/images/image 10.png",
    routeLink:"/"
  },
]

const MarketInfo = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.titleContainer}>{MARKET_INFORMATION}</Box>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={12} md={4}>
          <MarketInfoCard>
            <PriceStatistics />
          </MarketInfoCard>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <MarketInfoCard>
            <Box className={classes.heading} mt={5}>
             {PRICE_TRACKERS}
            </Box>
            <PriceTrackers iconLink="/images/image 6.png" title="CoinMarketCap" routeLink="/" />
            <PriceTrackers iconLink="/images/image 6.png" title="CoinGecko" routeLink="/" />
            <Box className={classes.heading} mt={3}>
              {BLOCK_EXPLORERS}
            </Box>
            <PriceTrackers iconLink="/images/image 6.png" title="PSY SPL" routeLink="/" />
          </MarketInfoCard>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <MarketInfoCard>
            <Box className={classes.heading} mt={5}>
              {PSY_IS_LISTED_ON}
            </Box>
            {PsyListData.map((item, index)=>(
                 <PsyList key={index} logo={item.logo} routeLink={item.routeLink} />
            ))}
           
          </MarketInfoCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MarketInfo;
