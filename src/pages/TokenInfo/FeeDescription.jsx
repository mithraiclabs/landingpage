import React from 'react';
import { Box, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import { FEES, UNLOCKED_TOKEN_DESCRIPTION, FEES_DESCRIPTION_1, FEES_DESCRIPTION_2 } from '../../constants';
import {theme} from "../../styles/theme"
import logo from "../../images/logo copy.png"
import serumLogo from "../../images/image 4.png"
import vaadinMoneyDeposit from "../../images/vaadin_money-deposit.png"
import localPostOffice from "../../images/local-post-office.png"
import frame from "../../images/Frame 112.png"


const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    color: 'white',
    textAlign: 'center',
  },
  heading: {
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
  image: {
    width: '150px',
    height: '150px',
    margin: '40px 0',
  },
  frameImage: {
    [theme.breakpoints.up('md')]: {
      width: '400px',
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    margin: '40px 0',
  },
  lineStyleLeft: {
    borderLeft: '3px solid #1D4DC9',
    height: '20px',
    borderBottom: '3px solid #1D4DC9',
    width: '50px',
    borderBottomLeftRadius: '22px',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  lineStyleRight: {
    borderRight: '3px solid #1D4DC9',
    height: '40px',
    borderTop: '3px solid #1D4DC9',
    width: '50px',
    marginLeft: '50px',
    marginTop: '-3px',
    borderTopRightRadius: '22px',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  listIcon: {
    marginLeft: '-8px',
    marginTop: '2px',
    height: '15px',
    width: '15px',
    borderRadius: '50%',
    background: 'radial-gradient(#FF3CEB, #1D4DC9)',
  },
  stepperContainer: {
    listStyle: 'none',
    display: 'flex',
    paddingTop: '0',
    paddingBottom: '0',
    [theme.breakpoints.up('md')]: {
      marginLeft: '78px !important',
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '0',
    },
    textAlign: 'left',
  },
  borderLine: {
    borderLeft: '3px solid #1D4DC9',
    height: '100%',
    backgroundColor: '#1D4DC9',
    marginLeft: '99px',
    [theme.breakpoints.down('md')]: {
      marginLeft: '0',
    },
  },
  feeDescriptionContainer: {
    [theme.breakpoints.up('md')]: {
      width: '560px',
    },
    [theme.breakpoints.down('md')]: {
      width: '',
    },
    margin: '0 auto !important',
    fontWeight: '500',
  },
}));

const descriptions = [
  {
    text: 'A circulating supply of 62,000,000 tokens (6.2%)',
  },
  {
    text: 'A total supply of 1,000,000,000 tokens.',
  },
  {
    text: '4 year lock up of tokens leading to well asigned incentives for our team, investors, the community and governance participants.',
  },
];

const FeeDescription = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.heading}>{FEES}</Box>
      <Typography className={classes.feeDescriptionContainer}>{FEES_DESCRIPTION_1}</Typography>
      <Box
        sx={{
          m: '0 auto',
        }}
      >
        <Box mr={1} component="img" src={logo} className={classes.image} />
        <Box component="img" src={serumLogo} className={classes.image} />
      </Box>
      <Typography className={classes.feeDescriptionContainer}>{FEES_DESCRIPTION_2}</Typography>
      <Box
        sx={{
          m: '0 auto',
        }}
      >
        <List style={{ listStyle: 'none' }}>
          <List>
            <Box component="img" src={vaadinMoneyDeposit} className={classes.image} />
          </List>
          <List style={{ margin: '-100px 0' }}>
            <Box component="img" src={localPostOffice} className={classes.image} />
          </List>
          <List>
            <Box component="img" src={frame} className={classes.frameImage} />
          </List>
        </List>
      </Box>
      <Box
        className={classes.heading}
        sx={{
          textAlign: 'left',
        }}
      >
        {UNLOCKED_TOKEN_DESCRIPTION}
      </Box>
      <Grid container>
        <Grid item md={12} sx={{ marginLeft: { sm: '0', md: '37px' } }}>
          <List>
            <List>
              <Box ml={10}>
                <Box className={classes.lineStyleLeft} />
                <Box className={classes.lineStyleRight} />
              </Box>
              {descriptions.map((description, index) => (
                <List disablePadding key={index} className={classes.stepperContainer}>
                  <List disablePadding>
                    <Box className={classes.borderLine} />
                  </List>
                  <List style={{ display: 'flex', marginTop: '22px' }}>
                    <Box className={classes.listIcon} />
                    <Box marginLeft={5} sx={{width:{sm:'100%', md:'500px'}}}>
                      {description.text}
                    </Box>
                  </List>
                </List>
              ))}
            </List>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeeDescription;
