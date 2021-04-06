import React from "react"
import "./Home.css"
import Maps from "./../Components/Maps"
import Header from "./../Components/Header"
///////////////////////////Material-UI/////////////////
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import { Grid } from "@material-ui/core"
const useStyles = makeStyles({
  root: {
    minWidth: 200
  },
  rootcap: {
    width: 375,
    height: 60,
    marginTop: 10
  },
  bigtables: {
    width: 375,
    height: 205,
    marginTop: 10
  },
  smalltables: {
    width: 375,
    height: 150,
    marginTop: 10
  },
  rootrev: {
    width: 360
  },
  table: {
    minWidth: 275,
    boxShadow: 0,
    borderBottom: 0
  },
  othertable: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  capacitytable: {
    borderBottom: 0,
    fontSize: 14
  }
})

/*
function createDatastatus(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

*/
function createDatastatus(name, no) {
  return { name, no }
}

function createDataindicators(name, value) {
  return { name, value }
}

function createDatayield(name, yields) {
  return { name, yields }
}

function createDataenergy(name, energy) {
  return { name, energy }
}

function createsecondTable(name, dc, ac, cp, ce, rp, ee, aa, ia, tr, pr, cuf) {
  return { name, dc, ac, cp, ce, rp, ee, aa, ia, tr, pr, cuf }
}

const rowsstatus = [createDatastatus("Total Sites", 8), createDatastatus("Active Sites", 5), createDatastatus("Inactive Sites", 3)]

const rowsindicators = [createDataindicators("CO2 saved", 491), createDataindicators("Trees Planted", 2454), createDataindicators("Households Powered", 1353)]

const rowsyield = [createDatayield("Average Yield", 3.64), createDatayield("Site 1", 3.62), createDatayield("Site 2", 3.88), createDatayield("Site 3", 3.42)]

const rowsenergy = [createDataenergy("Total Energy", 244000), createDataenergy("Site 1", 100000), createDataenergy("Site 2", 72000), createDataenergy("Site 3", 72000)]

const rowssecondtable = [createsecondTable("Site 1", 7.24, 7, 5.3, 0.1, 75.73, 0.39, 0, 851, "151.88k", 0.24, "NA"), createsecondTable("Site 2", 20, 20, 12.34, 1.5, 61.67, 1.64, 0, 556, "377.58k", 3.04, "NA"), createsecondTable("Site 3", 10, 10, 0.1, 52.4, 1, 73.99, 0, 187, "241.64k", 0.0, "NA"), createsecondTable("Site 4", 5, 5, 2.56, 11.1, 51.1, 99.3, 0, 865, "101.52k", 99, "NA")]
function Home() {
  const classes = useStyles()

  return (
    <>
      <Header />
      <div className="Home-Top">
        <div className="Cards-Table">
          <Grid container>
            <Grid item xs={6}>
              <Card className={classes.rootcap}>
                <CardContent>
                  <TableContainer>
                    <Table className={classes.table} aria-label="simple table" borderBottom={0}>
                      <TableHead>
                        <TableRow className={classes.capacitytable}>
                          <TableCell> Total Installed Capacity</TableCell>
                          <TableCell align="right"> 477</TableCell>
                        </TableRow>
                      </TableHead>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card className={classes.rootcap}>
                <CardContent>
                  <TableContainer>
                    <Table className={classes.table} aria-label="simple table">
                      <TableHead>
                        <TableRow className={classes.capacitytable}>
                          <TableCell> Total revenue Generated (Rs)</TableCell>
                          <TableCell align="right"> 214875</TableCell>
                        </TableRow>
                      </TableHead>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card className={classes.smalltables}>
                <CardContent>
                  <Typography align="left" style={{ fontWeight: 600, fontSize: 15 }}>
                    Site Status
                  </Typography>
                  <TableContainer>
                    <Table className={classes.table} size="small" aria-label="a dense table" borderBottom={0}>
                      <TableBody>
                        {rowsstatus.map(row => (
                          <TableRow key={rowsstatus.name} style={{ height: 5 }}>
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right">{row.no}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card className={classes.smalltables}>
                <CardContent>
                  <Typography align="left" style={{ fontWeight: 600, fontSize: 15 }}>
                    Environmental Indicators
                  </Typography>
                  <TableContainer>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                      <TableBody>
                        {rowsindicators.map(row => (
                          <TableRow key={rowsindicators.name}>
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right">{row.value}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card className={classes.bigtables}>
                <CardContent>
                  <Typography align="left" style={{ fontWeight: 600, fontSize: 15 }}>
                    Yield (KWh/KWp)
                  </Typography>
                  <TableContainer>
                    <Table className={classes.table} size="small" aria-label="a dense table" borderBottom={0}>
                      <TableBody>
                        {rowsyield.map(row => (
                          <TableRow key={rowsyield.name}>
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right">{row.yields}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card className={classes.bigtables}>
                <CardContent>
                  <Typography align="left" style={{ fontWeight: 600, fontSize: 15 }}>
                    Energy (KWh)
                  </Typography>
                  <TableContainer>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                      <TableBody>
                        {rowsenergy.map(row => (
                          <TableRow key={rowsenergy.name}>
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right">{row.energy}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
        <div className="Home-Map2">
          <Maps />
        </div>
      </div>
      <div className="Home-Bottom">
        <TableContainer>
          <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow style={{ color: "#FFFFFF", fontSize: 12 }}>
                <TableCell>Site Name</TableCell>
                <TableCell align="centre">Site Rating</TableCell>
                <TableCell align="centre">Current Generation Profile</TableCell>
                <TableCell align="centre">Operating Profile</TableCell>
                <TableCell align="centre">Active Alarms</TableCell>
                <TableCell align="centre">Inactive Alarms</TableCell>
                <TableCell align="centre">Total Revenue</TableCell>
                <TableCell align="centre">PR(%)</TableCell>
                <TableCell align="centre">CUF(%)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowssecondtable.map(row => (
                <TableRow key={rowssecondtable.name} align="centre">
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <TableRow align="center" style={{ fontWeight: 600, fontSize: 13 }}>
                      DC Rating
                    </TableRow>
                    <TableRow align="center" style={{ fontSize: 13, borderBottomStyle: "solid" }}>
                      {row.dc}
                    </TableRow>
                    <TableRow align="center" style={{ fontWeight: 600, fontSize: 13 }}>
                      AC Rating
                    </TableRow>
                    <TableRow align="center" style={{ fontSize: 13 }}>
                      {row.ac}
                    </TableRow>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <TableRow align="center" style={{ fontWeight: 600, fontSize: 13 }}>
                      Current Power
                    </TableRow>
                    <TableRow align="center" style={{ fontSize: 13, borderBottomStyle: "solid" }}>
                      {row.cp}
                    </TableRow>
                    <TableRow align="center" style={{ fontWeight: 600, fontSize: 13 }}>
                      Current Energy
                    </TableRow>
                    <TableRow align="center" style={{ fontSize: 13 }}>
                      {row.ce}
                    </TableRow>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <TableRow align="center" style={{ fontWeight: 600, fontSize: 13 }}>
                      Rated Power
                    </TableRow>
                    <TableRow align="center" style={{ fontSize: 13, borderBottomStyle: "solid" }}>
                      {row.rp}
                    </TableRow>
                    <TableRow align="center" style={{ fontWeight: 600, fontSize: 13 }}>
                      Expected Energy
                    </TableRow>
                    <TableRow align="center" style={{ fontSize: 13 }}>
                      {row.ee}
                    </TableRow>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.aa}
                  </TableCell>
                  <TableCell component="th" scope="row" align="centre">
                    {row.ia}
                  </TableCell>
                  <TableCell component="th" scope="row" align="centre">
                    {row.tr}
                  </TableCell>
                  <TableCell component="th" scope="row" align="centre">
                    {row.pr}
                  </TableCell>
                  <TableCell component="th" scope="row" align="centre">
                    {row.cuf}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}

export default Home
