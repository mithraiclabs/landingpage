import React, { memo } from 'react';
import { Box, Paper, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import {
  PSY_DESIGN,
  GOVERNANCE,
  GOVERNANCE_DESCRIPTION,
  TOKENS,
  PSYOPTIONS_PSY,
  PSY_DESIGN_CARD_TOKENS_DESCRIPTION,
  TRUSTLESS,
  PSY_OPTIONS,
  PSY_DESIGN_CARD_PSY_OPTIONS_DESCRIPTION,
  UTILITY,
  PSY,
  PSY_DESIGN_CARD_UTILITY_DESCRIPTION,
  STAKING,
  PSY_DESIGN_CARD_STAKING_DESCRIPTION,
} from '../../constants';
import {theme} from "../../styles/theme"


const useStyles = makeStyles(() => ({
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
    color: 'white',
  },
  heading: {
    fontFamily: 'Goldman',
    fontWeight: '400',
    fontSize: '25px',
    marginBottom: '20px',
  },
  title: {
    lineHeight: '20px',
    color: '#A39090',
  },
  description: {
    color: '#A39090',
  },
  gridContainer: {
    height: 'auto',
    position: 'relative',
    top: '10',
  },
}));

const PsyDesignCard = styled(Paper)(() => ({
  backgroundColor: "transparent",
  backgroundImage: 'none',
  color: 'white',
  borderRadius: '20px',
  height: 'auto',
  margin: '0 0 20px 0',
  padding: '30px  50px 50px 30px',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderImage: 'linear-gradient(\n      to bottom, \n      #B600F1, \n      rgba(0, 0, 0, 0)\n    ) 1 100%',
}));



const psyDesignCardData = [
  {
    icon: '/images/psyDesign_tokens_icon.png',
    title: `${TOKENS}`,
    subTitle: `${PSYOPTIONS_PSY}`,
    description: `${PSY_DESIGN_CARD_TOKENS_DESCRIPTION}`,
  },
  {
    icon: '/images/psyDesign_trustless_icon.png',
    title: `${TRUSTLESS}`,
    subTitle: `${PSY_OPTIONS}`,
    description: `${PSY_DESIGN_CARD_PSY_OPTIONS_DESCRIPTION}`,
  },
  {
    icon: '/images/psyDesign_utility_icon.png',
    title: `${UTILITY}`,
    subTitle: `${PSY}`,
    description: `${PSY_DESIGN_CARD_UTILITY_DESCRIPTION}`,
  },
  {
    icon: '/images/psyDesign_staking_icon.png',
    title: `${STAKING}`,
    subTitle: '',
    description: `${PSY_DESIGN_CARD_STAKING_DESCRIPTION}`,
  },
];

const PsyDesign= memo(() => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.titleContainer}>{PSY_DESIGN}</Box>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={12} md={8} className={classes.gridContainer}>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {psyDesignCardData.map((item, index) => (
              <Grid key={index} item xs={12} sm={12} md={6} className={classes.gridContainer}>
                <Box
                  sx={{
                    borderTop: '2px solid #B600F1',
                  }}
                >
                  <PsyDesignCard>
                    <Box component="img" src={item.icon} loading="lazy" height="60px" mb={2} />
                    <Box className={classes.heading}>{item.title}</Box>
                    <Typography className={classes.description}>
                      <span style={{ color: 'white' }}>{item.subTitle} </span>
                      {item.description}
                    </Typography>
                  </PsyDesignCard>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={4} className={classes.gridContainer}>
          <Box
            sx={{
              borderTop: '2px solid #B600F1',
            }}
          >
            <PsyDesignCard>
              <Box component="img" src="/images/psyDesign_governance_icon.png" loading="lazy" height="60px" mb={2} />
              <Box className={classes.heading}>{GOVERNANCE}</Box>
              <Typography className={classes.description}>
                <span style={{ color: 'white' }}>{PSY} </span>
                {GOVERNANCE_DESCRIPTION}
              </Typography>
            </PsyDesignCard>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
});

export default PsyDesign;
