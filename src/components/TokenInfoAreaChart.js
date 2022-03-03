import React from 'react';
import { Chart, Series, ArgumentAxis, CommonSeriesSettings, Legend, Margin } from 'devextreme-react/chart';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import {ECONOMICS_LOCKUPS} from '../constants'
import {theme} from "../styles/theme"


const dataSource = [
    {
      year: "April 2022",
      DAOTreasury: 300000000,
      CoreTeamAdvisors: 310000000,
      PrivateRound1: 320000000,
      PrivateRound2: 222,
      ContributorFund:111,
      IEO:121,
      PSYLiquidityProvisions:321
    },
    {
      year: "April 2023",
      DAOTreasury: 500000000,
      CoreTeamAdvisors: 510000000,
      PrivateRound1: 520000000,
      PrivateRound2: 122,
      ContributorFund:191,
      IEO:129,
      PSYLiquidityProvisions:221
    },
    {
      year: "April 2024",
      DAOTreasury: 3000000000,
      CoreTeamAdvisors: 3100000000,
      PrivateRound1: 3200000000,
      PrivateRound2: 282,
      ContributorFund:311,
      IEO:169,
      PSYLiquidityProvisions:121
    },
    {
      year: "April 2025",
      DAOTreasury: 4000000000,
      CoreTeamAdvisors: 4100000000,
      PrivateRound1: 4200000000,
      PrivateRound2: 122,
      ContributorFund:211,
      IEO:161,
      PSYLiquidityProvisions:371
    },
    {
      year: "April 2026",
      DAOTreasury: 5000000000,
      CoreTeamAdvisors: 5100000000,
      PrivateRound1: 5200000000,
      PrivateRound2: 222,
      ContributorFund:111,
      IEO:121,
      PSYLiquidityProvisions:321
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
        <Series color="#E48DFF" valueField="CoreTeamAdvisors" name="Core Team & Advisors"></Series>
        <Series color="#AA24B3" valueField="PrivateRound1" name="Private Round 1"></Series>

        {/* <Series color='#DB2FFA'  valueField="PrivateRound2" name="Private Round 2"></Series>
          <Series color='#FE06C3' valueField="ContributorFund" name="Contributor Fund"></Series>
          <Series color='#8B24C9' valueField="IEO" name="IEO"></Series>
          <Series color='#D167EB' valueField="PSYLiquidityProvisions" name="PSY Liquidity Provisions"></Series> */}

        <Margin bottom={20} />
        <ArgumentAxis valueMarginsEnabled={false} />
        <Legend verticalAlignment={isDesktop ? "top" : 'bottom' } horizontalAlignment={isDesktop? "right" : 'center' } />
      </Chart>
    </Box>
  );
};

export default DevAreChart;
