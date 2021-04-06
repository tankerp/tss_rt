import React, { useState, useEffect } from "react"
import Header from "./../Components/Header"
import "./SitePage.css"
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
///////////////////////////////////////////////////////
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
    height: 305,
    marginTop: 10
  },
  biggertables: {
    width: 700,
    height: 305,
    marginTop: 10
  },
  smalltables: {
    width: 375,
    height: 125,
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

function SitePage() {
  const classes = useStyles()
  /*
  useEffect(() => {
    const fetchData_site = async () => {
      //setIsLoading_chart(true)
      const results_site = await ComponentFinder.get(`/site/${component_id}`)
      setSiteData(results_site.data.data.rows)
      console.log(results_site.data.data.rows)
      //setIsLoading_chart(false)
    }
    fetchData_site()
  }, [])
  */

  var siteinfo = {
    sitename: "Site 1",
    dc: 7,
    ac: 7,
    com_d: "03-Mar-2021",
    inve: "Solis_inv",
    pv_m: "23x315Wp",
    pow: 75.73,
    ener_t: 75.9,
    cur_p: 5.3,
    exp_p: 35.34,
    cur_temp: 23,
    amb_t: 1.6,
    sol_r: 12,
    ener_t: 34,
    ener_tt: 18986,
    pr_t: 80.4,
    pr_tt: 79.7,
    trtu_d: "1/2",
    artu_d: "2/2",
    co2: 2.59,
    trees_p: 38,
    rev_t: 1900,
    rev_tt: 151888,
    y_t: 0.4,
    y_tt: 3.82,
    ins_pend: 0,
    zero_gen: 0,
    com_loss: 0,
    tot_f: 0,
    act_f: 0,
    iact_f: 0
  }
  let fir = 5
  let dictkeys = Object.keys(siteinfo)
  let dictvals = Object.values(siteinfo)
  console.log(dictkeys)
  console.log(dictvals)

  return (
    <>
      <Header />
      <div className="page-width">
        <Grid item xs={6}>
          <Card className={classes.bigtables}>
            <CardContent>
              <Typography align="left" style={{ fontWeight: 600, fontSize: 15 }}>
                Site 1
              </Typography>
              <TableContainer>
                <Table className={classes.table} size="small" aria-label="a dense table" borderBottom={0}>
                  <TableBody>
                    <TableRow>
                      <TableCell align="left" style={{ fontWeight: 600, fontSize: 10, borderBottom: 0 }}>
                        DC RATING
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left" style={{ fontSize: 10, borderBottom: 0 }}>
                        {siteinfo.dc.toString() + " KW"}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left" style={{ fontWeight: 600, fontSize: 10, borderBottom: 0 }}>
                        AC RATING
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left" style={{ fontSize: 10, borderBottom: 0 }}>
                        {siteinfo.ac.toString() + " KW"}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left" style={{ fontWeight: 600, fontSize: 10, borderBottom: 0 }}>
                        COMMISIONING DATE
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left" style={{ fontSize: 10, borderBottom: 0 }}>
                        {siteinfo.com_d}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left" style={{ fontWeight: 600, fontSize: 10, borderBottom: 0 }}>
                        INVERTER
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left" style={{ fontSize: 10, borderBottom: 0 }}>
                        {siteinfo.inve}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left" style={{ fontWeight: 600, fontSize: 10, borderBottom: 0 }}>
                        PV MODULES
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left" style={{ fontSize: 10, borderBottom: 0 }}>
                        {siteinfo.pv_m}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card className={classes.biggertables}>
            <CardContent>
              <Typography align="center" style={{ fontWeight: 600, fontSize: 15 }}>
                Power Data
              </Typography>
              <TableContainer>
                <Table className={classes.table} size="small" aria-label="a dense table" borderBottom={0}>
                  <TableBody>
                    <TableRow>
                      <TableCell align="left" style={{ fontWeight: 600, fontSize: 10, borderBottom: 0 }}>
                        POWER
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left" style={{ fontSize: 10, borderBottom: 0 }}>
                        {siteinfo.pow.toString() + " %"}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left" style={{ fontWeight: 600, fontSize: 10, borderBottom: 0 }}>
                        ENERGY TODAY
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left" style={{ fontSize: 10, borderBottom: 0 }}>
                        {siteinfo.ener_t.toString() + " %"}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left" style={{ fontWeight: 600, fontSize: 10, borderBottom: 0 }}>
                        CURRENT
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left" style={{ fontSize: 10, borderBottom: 0 }}>
                        {siteinfo.cur_p.toString() + " KW"}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left" style={{ fontWeight: 600, fontSize: 10, borderBottom: 0 }}>
                        EXPECTED
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left" style={{ fontSize: 10, borderBottom: 0 }}>
                        {siteinfo.exp_p.toString() + " KWh"}
                      </TableCell>
                    </TableRow>
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
                Weather
              </Typography>
              <TableContainer>
                <Table className={classes.table} size="small" aria-label="a dense table" borderBottom={0}>
                  <TableBody>
                    <TableRow>
                      <TableCell align="left" style={{ fontWeight: 600, fontSize: 10, borderBottom: 0 }}>
                        TEMPERATURE
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left" style={{ fontSize: 10, borderBottom: 0 }}>
                        {siteinfo.cur_temp.toString() + " C"}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left" style={{ fontWeight: 600, fontSize: 10, borderBottom: 0 }}>
                        SOLAR RADIATION
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left" style={{ fontSize: 10, borderBottom: 0 }}>
                        {siteinfo.sol_r.toString() + " W/m2"}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left" style={{ fontWeight: 600, fontSize: 10, borderBottom: 0, borderBottom: 0 }}>
                        AMBIENT TEMPERATURE
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left" style={{ fontSize: 10, borderBottom: 0 }}>
                        {siteinfo.amb_t.toString() + " C"}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </div>
      <div className="page-width_two">
        <Grid item xs={12}>
          <Card className={classes.smalltables}>
            <CardContent>
              <Typography align="left" style={{ fontWeight: 600, fontSize: 15 }}>
                Energy Profile
              </Typography>
              <TableContainer>
                <Table className={classes.table} size="small" aria-label="a dense table" borderBottom={0}>
                  <TableBody>
                    <TableRow>
                      <TableCell align="left" style={{ fontWeight: 600, fontSize: 10, borderBottom: 0 }}>
                        ENERGY TODAY
                      </TableCell>
                      <TableCell align="left" style={{ fontSize: 10, borderBottom: 0 }}>
                        {siteinfo.ener_t.toString() + " KW"}
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell align="left" style={{ fontWeight: 600, fontSize: 10, borderBottom: 0 }}>
                        ENERGY TILL DATE
                      </TableCell>
                      <TableCell align="left" style={{ fontSize: 10, borderBottom: 0 }}>
                        {siteinfo.ener_tt.toString() + " KWh"}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card className={classes.smalltables}>
            <CardContent>
              <Typography align="left" style={{ fontWeight: 600, fontSize: 15 }}>
                PERFORMANCE RATIO
              </Typography>
              <TableContainer>
                <Table className={classes.table} size="small" aria-label="a dense table" borderBottom={0}>
                  <TableBody>
                    <TableRow>
                      <TableCell align="left" style={{ fontWeight: 600, fontSize: 10, borderBottom: 0 }}>
                        P/R TODAY
                      </TableCell>
                      <TableCell align="left" style={{ fontSize: 10, borderBottom: 0 }}>
                        {siteinfo.pr_t.toString()}
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell align="left" style={{ fontWeight: 600, fontSize: 10, borderBottom: 0 }}>
                        P/R TILL DATE
                      </TableCell>
                      <TableCell align="left" style={{ fontSize: 10, borderBottom: 0 }}>
                        {siteinfo.pr_tt}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card className={classes.smalltables}>
            <CardContent>
              <Typography align="left" style={{ fontWeight: 600, fontSize: 15 }}>
                SYSTEM AVAILABILITY
              </Typography>
              <TableContainer>
                <Table className={classes.table} size="small" aria-label="a dense table" borderBottom={0}>
                  <TableBody>
                    <TableRow>
                      <TableCell align="left" style={{ fontWeight: 600, fontSize: 10, borderBottom: 0 }}>
                        TOTAL RTU/DEVICES
                      </TableCell>
                      <TableCell align="left" style={{ fontSize: 10, borderBottom: 0 }}>
                        {siteinfo.trtu_d.toString()}
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell align="left" style={{ fontWeight: 600, fontSize: 10, borderBottom: 0 }}>
                        ACTIVE RTU/DEVICES
                      </TableCell>
                      <TableCell align="left" style={{ fontSize: 10, borderBottom: 0 }}>
                        {siteinfo.artu_d}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card className={classes.smalltables}>
            <CardContent>
              <Typography align="left" style={{ fontWeight: 600, fontSize: 15 }}>
                ENVIRONMENTAL INDICATORS
              </Typography>
              <TableContainer>
                <Table className={classes.table} size="small" aria-label="a dense table" borderBottom={0}>
                  <TableBody>
                    <TableRow>
                      <TableCell align="left" style={{ fontWeight: 600, fontSize: 10, borderBottom: 0 }}>
                        CO2 SAVED
                      </TableCell>
                      <TableCell align="left" style={{ fontSize: 10, borderBottom: 0 }}>
                        {siteinfo.co2.toString() + " tons"}
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell align="left" style={{ fontWeight: 600, fontSize: 10, borderBottom: 0 }}>
                        TREES PLANTED
                      </TableCell>
                      <TableCell align="left" style={{ fontSize: 10, borderBottom: 0 }}>
                        {siteinfo.trees_p.toString()}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </div>

      <div className="page-width_thr">
        <Grid item xs={12}>
          <Card className={classes.smalltables}>
            <CardContent>
              <Typography align="left" style={{ fontWeight: 600, fontSize: 15 }}>
                REVENUE GENERATED
              </Typography>
              <TableContainer>
                <Table className={classes.table} size="small" aria-label="a dense table" borderBottom={0}>
                  <TableBody>
                    <TableRow>
                      <TableCell align="left" style={{ fontWeight: 600, fontSize: 10, borderBottom: 0 }}>
                        REVENUE TODAY
                      </TableCell>
                      <TableCell align="left" style={{ fontSize: 10, borderBottom: 0 }}>
                        {"Rs " + siteinfo.rev_t.toString()}
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell align="left" style={{ fontWeight: 600, fontSize: 10, borderBottom: 0 }}>
                        REVENUE TILL DATE
                      </TableCell>
                      <TableCell align="left" style={{ fontSize: 10, borderBottom: 0 }}>
                        {"Rs " + siteinfo.rev_tt.toString()}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card className={classes.smalltables}>
            <CardContent>
              <Typography align="left" style={{ fontWeight: 600, fontSize: 15 }}>
                SPECIFIC YIELD
              </Typography>
              <TableContainer>
                <Table className={classes.table} size="small" aria-label="a dense table" borderBottom={0}>
                  <TableBody>
                    <TableRow>
                      <TableCell align="left" style={{ fontWeight: 600, fontSize: 10, borderBottom: 0 }}>
                        YIELD TODAY
                      </TableCell>
                      <TableCell align="left" style={{ fontSize: 10, borderBottom: 0 }}>
                        {siteinfo.y_t.toString() + " KWh/KWdc"}
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell align="left" style={{ fontWeight: 600, fontSize: 10, borderBottom: 0 }}>
                        YIELD TILL DATE
                      </TableCell>
                      <TableCell align="left" style={{ fontSize: 10, borderBottom: 0 }}>
                        {siteinfo.y_tt.toString() + " KWh/KWdc"}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card className={classes.smalltables}>
            <CardContent>
              <Typography align="left" style={{ fontWeight: 600, fontSize: 15 }}>
                INACTIVE UNITS
              </Typography>
              <TableContainer>
                <Table className={classes.table} size="small" aria-label="a dense table" borderBottom={0}>
                  <TableBody>
                    <TableRow>
                      <TableCell align="left" style={{ fontWeight: 600, fontSize: 10, borderBottom: 0 }}>
                        INSTALLATION PENDING
                      </TableCell>
                      <TableCell align="left" style={{ fontSize: 10, borderBottom: 0 }}>
                        {siteinfo.ins_pend.toString()}
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell align="left" style={{ fontWeight: 600, fontSize: 10, borderBottom: 0 }}>
                        ZERO GENERATION
                      </TableCell>
                      <TableCell align="left" style={{ fontSize: 10, borderBottom: 0 }}>
                        {siteinfo.zero_gen}
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell align="left" style={{ fontWeight: 600, fontSize: 10, borderBottom: 0 }}>
                        COMMUNICATION LOSS
                      </TableCell>
                      <TableCell align="left" style={{ fontSize: 10, borderBottom: 0 }}>
                        {siteinfo.com_loss}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card className={classes.smalltables}>
            <CardContent>
              <Typography align="left" style={{ fontWeight: 600, fontSize: 15 }}>
                TODAY'S FAULTS
              </Typography>
              <TableContainer>
                <Table className={classes.table} size="small" aria-label="a dense table" borderBottom={0}>
                  <TableBody>
                    <TableRow>
                      <TableCell align="left" style={{ fontWeight: 600, fontSize: 10, borderBottom: 0 }}>
                        TOTAL
                      </TableCell>
                      <TableCell align="left" style={{ fontSize: 10, borderBottom: 0 }}>
                        {siteinfo.tot_f.toString()}
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell align="left" style={{ fontWeight: 600, fontSize: 10, borderBottom: 0 }}>
                        ACTIVE FAULTS
                      </TableCell>
                      <TableCell align="left" style={{ fontSize: 10, borderBottom: 0 }}>
                        {siteinfo.act_f.toString()}
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell align="left" style={{ fontWeight: 600, fontSize: 10, borderBottom: 0 }}>
                        INACTIVE FAULTS
                      </TableCell>
                      <TableCell align="left" style={{ fontSize: 10, borderBottom: 0 }}>
                        {siteinfo.iact_f.toString()}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </div>
    </>
  )
}

export default SitePage
