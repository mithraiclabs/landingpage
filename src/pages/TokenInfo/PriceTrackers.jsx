import React, {memo} from 'react';
import { Box} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const PriceTrackers= memo(({ iconLink, title, routeLink }) => {
  return (
    <a href={routeLink} target="_blank">
      <Box
      sx={{
        textDecoration: 'none',
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        color: '#A39090',
        fontSize: '16px',
      }}
    >
      <Box display="flex">
        <Box component="img" src={iconLink} width="20px" />
        <Box ml={1}>{title}</Box>
      </Box>
      <Box color="white" mt={1}>
        <ArrowForwardIosIcon fontSize="medium" />
      </Box>
    </Box>
    </a>
  );
});

export default PriceTrackers;
