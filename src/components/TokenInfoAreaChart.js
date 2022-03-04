import React from 'react';
import { Chart, Series, ArgumentAxis, CommonSeriesSettings, Legend, Margin } from 'devextreme-react/chart';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import {ECONOMICS_LOCKUPS} from '../constants'
import {theme} from "../styles/theme"


const dataSource = [
    {
      year: "January 2022",
      PrivateRound1: 5_000_000,
      PrivateRound2: 7_000_000,
      IEO: 30_000_000,
      PSYLiquidityProvisions: 20_000_000,
      DAOTreasury: 600_000_000,
    },
    {
      year: "January 2023",
      CoreTeamAdvisors: 37_500_000,
      PrivateRound1: 16_250_000,
      PrivateRound2: 22_750_000,
      ContributorFund: 20_000_000,
      IEO: 30_000_000,
      PSYLiquidityProvisions: 20_000_000,
      DAOTreasury: 600_000_000,
    },
    {
      year: "January 2024",
      CoreTeamAdvisors: 75_000_000,
      PrivateRound1: 27_500_000,
      PrivateRound2: 38_500_000,
      ContributorFund: 40_000_000,
      IEO: 30_000_000,
      PSYLiquidityProvisions: 20_000_000,
      DAOTreasury: 600_000_000,
    },
    {
      year: "January 2025",
      CoreTeamAdvisors: 112_000_000,
      PrivateRound1: 38_750_000,
      PrivateRound2: 54_250_000,
      ContributorFund: 60_000_000,
      IEO: 30_000_000,
      PSYLiquidityProvisions: 20_000_000,
      DAOTreasury: 600_000_000,
    },
    {
      year: "January 2026",
      CoreTeamAdvisors: 150_000_000,
      PrivateRound1: 50_000_000,
      PrivateRound2: 70_000_000,
      ContributorFund: 80_000_000,
      IEO: 30_000_000,
      PSYLiquidityProvisions: 20_000_000,
      DAOTreasury: 600_000_000,
    },

  ];

const useStyles = makeStyles(() => ({
  heading: {
    fontFamily: 'Goldman',
    fontWeight: '400',
    marginLeft: '7px',
    color: 'white',
    margin: '30px 0',
    [theme.breakpoints.up('md')]:{
      fontSize: '40px',
    },
    [theme.breakpoints.down('md')]:{
      fontSize: '30px',
    }
  },
}));


const DevAreChart = () => {
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width:1200px)');

  return (
    <Box sx={{color:'white !important'}}>
      <Box
        className={classes.heading}
      >
        {ECONOMICS_LOCKUPS}
      </Box>
      <Chart axis color='white' commonAxisSettings={{grid:{visible:false}, label:{font:{color:'white'}}}} palette="dark" dataSource={dataSource}>
        <CommonSeriesSettings color='white' argumentField="year" type="stackedarea" valueField="DAOTreasury" />
        <Series  CommonSeriesSettings={{}} color="#677BDB" valueField="DAOTreasury" name="DAO Treasury"></Series>
        <Series color='#8B24C9' valueField="IEO" name="IEO"></Series>
        <Series color='#D167EB' valueField="PSYLiquidityProvisions" name="PSY Liquidity Provisions"></Series>
        <Series color="#AA24B3" valueField="PrivateRound1" name="Private Round 1"></Series>
        <Series color='#DB2FFA'  valueField="PrivateRound2" name="Private Round 2"></Series>
        <Series color='#FE06C3' valueField="ContributorFund" name="Contributor Fund"></Series>
        <Series color="#E48DFF" valueField="CoreTeamAdvisors" name="Core Team & Advisors"></Series>

        <Margin bottom={20} />
        <ArgumentAxis valueMarginsEnabled={false} />
        <Legend verticalAlignment={isDesktop ? "top" : 'bottom' } horizontalAlignment={isDesktop? "right" : 'center' } />
      </Chart>
    </Box>
  );
};

export default DevAreChart;
