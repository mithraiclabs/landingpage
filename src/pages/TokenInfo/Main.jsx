import React from 'react'
import Container from '@mui/material/Container';
import SummaryCard from './SummaryCard';
import TokenInfoPieChart from '../../components/TokenInfoPieChart';
import AreaChart from '../../components/TokenInfoAreaChart';
import FeeDescription from './FeeDescription';
import MarketInfo from './MarketInfo';
import PsyDesign from "./PsyDesign";

const TokenInfo = () => (
    <Container color='white'>
    <SummaryCard />
    <AreaChart/>
    <TokenInfoPieChart/>
    <FeeDescription/>
    <MarketInfo/>
    <PsyDesign/>
    </Container>
  
);
export default TokenInfo;
