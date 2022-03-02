import React from 'react';
import { Chart, Series, ArgumentAxis, CommonSeriesSettings, Legend, Margin } from 'devextreme-react/chart';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import {ECONOMICS_LOCKUPS} from '../constants'
import {theme} from "../styles/theme"


const dataSource = [
    {
      year: "April 2022",
      DAOTreasury: 186,
      CoreTeamAdvisors: 209,
      PrivateRound1: 257,
      PrivateRound2: 222,
      ContributorFund:111,
      IEO:121,
      PSYLiquidityProvisions:321
    },
    {
      year: "April 2023",
      DAOTreasury: 146,
      CoreTeamAdvisors: 109,
      PrivateRound1: 297,
      PrivateRound2: 122,
      ContributorFund:191,
      IEO:129,
      PSYLiquidityProvisions:221
    },
    {
      year: "April 2024",
      DAOTreasury: 126,
      CoreTeamAdvisors: 259,
      PrivateRound1: 217,
      PrivateRound2: 282,
      ContributorFund:311,
      IEO:169,
      PSYLiquidityProvisions:121
    },
    {
      year: "April 2025",
      DAOTreasury: 386,
      CoreTeamAdvisors: 109,
      PrivateRound1: 207,
      PrivateRound2: 122,
      ContributorFund:211,
      IEO:161,
      PSYLiquidityProvisions:371
    },
    {
      year: "April 2026",
      DAOTreasury: 186,
      CoreTeamAdvisors: 209,
      PrivateRound1: 257,
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

function useWidth() {
    const theme = useTheme();
    const keys = [...theme.breakpoints.keys].reverse();
    return (
      keys.reduce((output, key) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const matches = useMediaQuery(theme.breakpoints.up(key));
        return !output && matches ? key : output;
      }, null) || 'xs'
    );
  }

const DevAreChart = () => {
  const classes = useStyles();
  const isDesktop = useWidth();


  return (
    <Box>
      <Box
        className={classes.heading}
      >
        {ECONOMICS_LOCKUPS}
      </Box>
      <Chart palette="Harmony Light" dataSource={dataSource}>
        <CommonSeriesSettings argumentField="year" type="area" valueField="DAOTreasury" />
        <Series color="#677BDB" valueField="DAOTreasury" name="DAO Treasury"></Series>
        <Series color="#E48DFF" valueField="CoreTeamAdvisors" name="Core Team & Advisors"></Series>
        <Series color="#AA24B3" valueField="PrivateRound1" name="Private Round 1"></Series>

        {/* <Series color='#DB2FFA'  valueField="PrivateRound2" name="Private Round 2"></Series>
          <Series color='#FE06C3' valueField="ContributorFund" name="Contributor Fund"></Series>
          <Series color='#8B24C9' valueField="IEO" name="IEO"></Series>
          <Series color='#D167EB' valueField="PSYLiquidityProvisions" name="PSY Liquidity Provisions"></Series> */}

        <Margin bottom={20} />
        <ArgumentAxis valueMarginsEnabled={false} />
        <Legend  verticalAlignment={isDesktop === 'md' || 'lg' || 'xl' ? "top" : 'bottom' } horizontalAlignment={isDesktop === 'md' || 'lg' || 'xl'? "right" : 'center' } />
      </Chart>
    </Box>
  );
};

export default DevAreChart;
