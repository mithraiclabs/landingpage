import React from "react"
import { Box } from "@mui/material"
import PieChart, {
  Series,
  Label,
  Margin,
  Legend,
  Animation,
} from "devextreme-react/pie-chart"
import { makeStyles } from "@mui/styles"
import { PSY_TOKEN_SUPPLY } from "../constants"
import { theme } from "../styles/theme"

const dataSource = [
  {
    group: "DAO Treasury",
    allocation: 60,
  },
  {
    group: "Contributor Fund",
    allocation: 8,
  },
  {
    group: "PSY Liquidity Provisions",
    allocation: 2,
  },
  {
    group: "Initial Exchange Offering",
    allocation: 3,
  },
  {
    group: "Private Round 2",
    allocation: 7,
  },
  {
    group: "Private Round 1",
    allocation: 5,
  },
  {
    group: "Core Team & Advisors",
    allocation: 15,
  },
]

const useStyles = makeStyles(() => ({
  heading: {
    fontFamily: "Goldman",
    fontWeight: "400",
    marginLeft: "7px",
    color: "white",
    margin: "30px 0",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      fontSize: "40px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
    },
  },
}))

const customizePoint = pointInfo => {
  switch (pointInfo.argument) {
    case "DAO Treasury":
      return { color: "#ff3ceb" }
    case "Contributor Fund":
      return { color: "#560BAD" }
    case "PSY Liquidity Provisions":
      return { color: "#F100AE" }
    case "Initial Exchange Offering":
      return { color: "#FF3CEB" }
    case "Private Round 2":
      return { color: "#B600F1" }
    case "Private Round 1":
      return { color: "#FF3CEB" }
    case `Core Team & Advisors`:
      return { color: "#EAA9FF" }
    default:
      return {}
  }
}

const TokenInfoPieChart = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Box sx={{ marginBottom: { sm: "20px", md: "50px" } }}>
        <Box className={classes.heading}>{PSY_TOKEN_SUPPLY}</Box>
        <PieChart
          type="doughnut"
          innerRadius={0.7}
          dataSource={dataSource}
          customizePoint={customizePoint}
          resolveLabelOverlapping="shift"
        >
          <Series argumentField="group" valueField="allocation">
            <Label
              backgroundColor="black"
              visible={true}
              customizeText={formatText}
              font={{ size: 16 }}
            />
          </Series>
          <Margin bottom={20} />
          <Legend visible={false} />
          <Animation enabled={false} />
        </PieChart>
      </Box>
    </React.Fragment>
  )
}

function formatText(arg) {
  return `${arg.argumentText} (${arg.percentText})`
}

export default TokenInfoPieChart
