import React, { memo } from 'react';
import { Box, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import makeStyles from '@mui/styles/makeStyles';
import {theme} from "../../styles/theme"


const useStyles = makeStyles(() => ({
  root: {
    textDecoration: 'none',
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    color: '#A39090',
  },
  logoContainer: {
    backgroundColor: theme.palette.background.fadeBlack,
    display: 'flex',
    padding: '8px 12px',
    width: '170px',
    height: '60px',
    flexWrap: 'nowrap',
    borderRadius:'15px'
  },

}));



const PsyList = memo(({ logo, routeLink }) => {
  const classes = useStyles();
  return (
      <Box className={classes.root}>
        <Typography className={classes.logoContainer}>
          <Box component="img" src={logo} width="100%" style={{ margin: 'auto' }} />
        </Typography>
        <Box color="white" mt={1} ml={5}>
          <ArrowForwardIosIcon fontSize="medium" />
        </Box>
      </Box>
  );
});

export default PsyList;