import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import { TOKEN_INFO_PAGE_HEADING, TOKEN_INFO_PAGE_SUB_HEADING } from '../../constants';
import {theme} from "../../styles/theme"

const SummaryCard = styled(Paper)(() => ({
  backgroundColor: 'transparent',
  backgroundImage: 'none',
  color: 'white',
}));

const principles = [
  {
    image: '/images/currency.png',
    principle: 'Accrue value through utility, not hyperinflation.',
  },
  {
    image: '/images/governance.png',
    principle: 'PSY gives specialized governance power over PsyOptions.',
  },
  {
    image: '/images/lock.png',
    principle:
      ' The majority of PSY tokens are locked up for 4 years which leads to well-aligned incentives for the team, investors, our community, and governance participants.',
  },
  {
    image: '/images/stats.png',
    principle:
      ' Holders of PSY have the power to upgrade the protocol as they see fit. Anyone with the PSY token can propose a governance action.',
  },
  {
    image: '/images/coins.png',
    principle: 'PSY holders can create incentives to reward participation and drive usage of the protocol.',
  },
  {
    image: '/images/lock.png',
    principle: 'All seed sales have long-term lockups; they are meant for long-term supporters of the PSY ecosystem, not quick profit.',
  },
];

const useStyles = makeStyles(() => ({
  root: {
    color: 'white',
    width: '100%',
    marginTop: '80px',
    marginBottom: '40px',
    textAlign: 'center',
  },
  titleContainer: {
    [theme.breakpoints.down('md')]: {
      marginBottom: '30px',
    },
    [theme.breakpoints.up('md')]: {
      marginBottom: '100px',
    },
  },
  heading: {
    fontFamily: 'Goldman',
    fontWeight: '400',
    [theme.breakpoints.down('md')]: {
      lineHeight: '',
      fontSize: '35px',
    },
    [theme.breakpoints.up('md')]: {
      lineHeight: '72px',
      fontSize: '50px',
    },
  },
  subHeading: {
    fontSize: '18px',
    [theme.breakpoints.down('md')]: {
      lineHeight: '24px',
    },
    [theme.breakpoints.up('md')]: {
      lineHeight: '34px',
    },
  },
  cardDescription: {
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
    },
    letterSpacing: '.1px',
    fontWeight:'500 !important',
    fontSize: '17px !important',

  }
 
}));

const TokenInfo = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.titleContainer}>
        <Box className={classes.heading}>{TOKEN_INFO_PAGE_HEADING}</Box>
        <Box className={classes.subHeading}>{TOKEN_INFO_PAGE_SUB_HEADING}</Box>
      </Box>
      <Grid container rowSpacing={9} columnSpacing={{ xs: 1, sm: 2, md: 30 }}>
        {principles.map((card, index) => (
          <Grid key={index} item xs={12} sm={12} md={6}>
            <SummaryCard>
              <Box sx={{ textAlign: 'center' }}>
                <Box component='img' src={card.image} loading="lazy" height='50px' mb={1}/>
                <Box className={classes.cardDescription}>{card.principle}</Box>
              </Box>
            </SummaryCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TokenInfo;
