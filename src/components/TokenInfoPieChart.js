import React from 'react';
import { Box } from '@mui/material';
import PieChart, { Series, Label, Margin, Legend, Animation } from 'devextreme-react/pie-chart';
import { makeStyles } from '@mui/styles';
import { PSY_TOKEN_SUPPLY } from '../constants';
import {theme} from "../styles/theme"

const dataSource = [
    {
      country: "DAO Treasury",
      medals: 60
    },
    {
      country: "Contributor Fund",
      medals: 10
    },
    {
      country: "PSY Liquidity Provisions",
      medals: 60
    },
    {
      country: "Initial Exchange Offering",
      medals: 49
    },
    {
      country: "Private Round 2",
      medals: 46
    },
    {
      country: "Private Round 1",
      medals: 43
    },
    {
      country: "Core Team & Advisors",
      medals: 41
    }
  ];
  

const useStyles = makeStyles(() => ({
  heading: {
    fontFamily: 'Goldman',
    fontWeight: '400',
    marginLeft: '7px',
    color: 'white',
    margin: '30px 0',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      fontSize: '40px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '30px',
    },
  },
}));

const customizePoint = (pointInfo) => {
  switch (pointInfo.argument) {
    case 'DAO Treasury':
      return { color: '#ff3ceb' };
    case 'Contributor Fund':
      return { color: '#560BAD' };
    case 'PSY Liquidity Provisions':
      return { color: '#F100AE' };
    case 'Initial Exchange Offering':
      return { color: '#FF3CEB' };
    case 'Private Round 2':
      return { color: '#B600F1' };
    case 'Private Round 1':
      return { color: '#FF3CEB' };
    case `Core Team & Advisors`:
      return { color: '#EAA9FF' };
    default:
      return {};
  }
};

const TokenInfoPieChart = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box sx={{ marginBottom: { sm: '20px', md: '50px' } }}>
        <Box className={classes.heading}>{PSY_TOKEN_SUPPLY}</Box>
        <PieChart type="doughnut" innerRadius={0.7} dataSource={dataSource} customizePoint={customizePoint}>
          <Series argumentField="country" valueField="medals">
            <Label backgroundColor="black" visible={true} customizeText={formatText} />
          </Series>
          <Margin bottom={20} />
          <Legend visible={false} />
          <Animation enabled={false} />
        </PieChart>
      </Box>
    </React.Fragment>
  );
};

function formatText(arg) {
  return `${arg.argumentText} (${arg.percentText})`;
}

export default TokenInfoPieChart;
