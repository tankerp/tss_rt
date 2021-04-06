import React, { useState } from "react"
import Header from "./../Components/Header"
//import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
//import "react-tabs/style/react-tabs.css"
/////////////////Material UI///////////////////////////////
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
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import TabPanel from "@material-ui/core/Tabs"
//import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
///////////////////////////////////////////////////////////
function createsites(name, compname, location, commisiondate, sim_no, Ac_rating, sub_end) {
  return { name, compname, location, commisiondate, sim_no, Ac_rating, sub_end }
}
const rowssites = [createsites("Site 1", "Livint", "Pune", "03-03-2021", "90004512345", "100kW", "03-03-2024"), createsites("Site 2", "Livint", "Kochi", "03-03-2021", "90004512344", "200kW", "03-03-2024"), createsites("Site 3", "Livint", "Chennai", "03-03-2021", "90004512343", "350kW", "03-03-2022"), createsites("Site 4", "Livint", "Bengaluru", "03-03-2021", "90004512342", "450kW", "03-03-2023")]

function createdevices(name, id, rtu_id, site, status, action) {
  return { name, id, rtu_id, site, status, action }
}
const rowsdevices = [createdevices("Solis Inverter", "Device 1", "Site 1", "ON", "None"), createdevices("Pyranometer", "Device 2", "Site 1", "ON", "None"), createdevices("Huawei Inverter", "Device 1", "Site 2", "ON", "None"), createdevices("Delta Inverter", "Device 1", "Site 3", "ON", "None"), createdevices("ABB Inverter", "Device 1", "Site 4", "ON", "None")]

function createusers(name, assigned_sites, email, user_type, status, action) {
  return { name, assigned_sites, email, user_type, status, action }
}
const rowsusers = [createusers("Srikant", "Site 1, Site 2, Site 3", "srikant@livint.in", "Site Admin", "None"), createusers("Raghu", "Site 1, Site 2, Site 3, Site 4", "raghu@livint.in", "Site Admin", "None"), createusers("Ramesh", "Site 3", "ramesh@livint.in", "Site User", "None")]

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  }
}

const useStyles = makeStyles({
  root: {
    minWidth: 200
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

  table: {
    minWidth: 275,
    boxShadow: 0,
    borderBottom: 0
  }
})

function Configuration() {
  const classes = useStyles()
  const [selectedTab, setSelectedTab] = useState(0)
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue)
  }
  return (
    <>
      <Header />
      <div>
        <Tabs value={selectedTab} onChange={handleChange}>
          <Tab label="Sites" />
          <Tab label="Devices" />
          <Tab label="Users" />
        </Tabs>
        {selectedTab === 0 && (
          <TabPanel value={selectedTab} index={0}>
            <TableContainer>
              {
                //name, compname, location, commisiondate, sim_no, Ac_rating, sub_end
              }
              <Table className={classes.table} size="small" aria-label="a dense table" borderBottom={0}>
                <TableHead>
                  <TableRow style={{ color: "#FFFFFF", fontSize: 12 }}>
                    <TableCell align="centre" style={{ color: "Blue", fontSize: 14 }}>
                      Site Name
                    </TableCell>
                    <TableCell align="centre" style={{ color: "Blue", fontSize: 14 }}>
                      Company
                    </TableCell>
                    <TableCell align="centre" style={{ color: "Blue", fontSize: 14 }}>
                      Location
                    </TableCell>
                    <TableCell align="centre" style={{ color: "Blue", fontSize: 14 }}>
                      Subscription Start
                    </TableCell>
                    <TableCell align="centre" style={{ color: "Blue", fontSize: 14 }}>
                      Sim no
                    </TableCell>
                    <TableCell align="centre" style={{ color: "Blue", fontSize: 14 }}>
                      AC Rating
                    </TableCell>
                    <TableCell align="centre" style={{ color: "Blue", fontSize: 14 }}>
                      Subscription End
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowssites.map(row => (
                    <TableRow key={rowssites.name} style={{ height: 5 }}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="centre">{row.compname}</TableCell>
                      <TableCell align="centre">{row.location}</TableCell>
                      <TableCell align="centre">{row.commisiondate}</TableCell>
                      <TableCell align="centre">{row.sim_no}</TableCell>
                      <TableCell align="centre">{row.Ac_rating}</TableCell>
                      <TableCell align="centre">{row.sub_end}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
        )}

        {selectedTab === 1 && (
          <TabPanel value={selectedTab} index={1}>
            <TableContainer>
              <Table className={classes.table} size="small" aria-label="a dense table" borderBottom={0}>
                <TableHead>
                  <TableRow>
                    <TableCell align="centre" style={{ color: "Blue", fontSize: 14 }}>
                      Inverter Name
                    </TableCell>
                    <TableCell align="centre" style={{ color: "Blue", fontSize: 14 }}>
                      Device name
                    </TableCell>
                    <TableCell align="centre" style={{ color: "Blue", fontSize: 14 }}>
                      Site Name
                    </TableCell>
                    <TableCell align="centre" style={{ color: "Blue", fontSize: 14 }}>
                      Status
                    </TableCell>
                    <TableCell align="centre" style={{ color: "Blue", fontSize: 14 }}>
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowsdevices.map(row => (
                    <TableRow key={rowsdevices.name} style={{ height: 5 }}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="centre">{row.id}</TableCell>
                      <TableCell align="centre">{row.rtu_id}</TableCell>
                      <TableCell align="centre">{row.site}</TableCell>
                      <TableCell align="centre">{row.status}</TableCell>
                      <TableCell align="centre">{row.action}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
        )}

        {selectedTab === 2 && (
          <TabPanel value={selectedTab} index={2}>
            <TableContainer>
              <Table className={classes.table} size="small" aria-label="a dense table" borderBottom={0}>
                <TableHead>
                  <TableRow>
                    <TableCell align="centre" style={{ color: "Blue", fontSize: 14 }}>
                      User Name
                    </TableCell>
                    <TableCell align="centre" style={{ color: "Blue", fontSize: 14 }}>
                      Sites Incharge
                    </TableCell>
                    <TableCell align="centre" style={{ color: "Blue", fontSize: 14 }}>
                      email ID
                    </TableCell>
                    <TableCell align="centre" style={{ color: "Blue", fontSize: 14 }}>
                      Role
                    </TableCell>
                    <TableCell align="centre" style={{ color: "Blue", fontSize: 14 }}>
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowsusers.map(row => (
                    <TableRow key={rowsusers.name} style={{ height: 5 }}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="centre">{row.assigned_sites}</TableCell>
                      <TableCell align="centre">{row.email}</TableCell>
                      <TableCell align="centre">{row.user_type}</TableCell>
                      <TableCell align="centre">{row.status}</TableCell>
                      <TableCell align="centre">{row.action}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
        )}
      </div>
    </>
  )
}

export default Configuration
/*
<Tabs>
        <TabList>
          <Tab>Sites</Tab>
          <Tab>Devices</Tab>
          <Tab>Users</Tab>
        </TabList>

        <TabPanel className="Sites">
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel className="Devices">
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel className="Users">
          <div>
            <button>Add Users</button>
            {
              //name, assigned_sites, email, user_type, status, action
            }
            <TableContainer>
              <Table className={classes.table} size="small" aria-label="a dense table" borderBottom={0}>
                <TableBody>
                  {rowsusers.map(row => (
                    <TableRow key={rowsusers.name} style={{ height: 5 }}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.assigned_sites}</TableCell>
                      <TableCell align="right">{row.email}</TableCell>
                      <TableCell align="right">{row.user_type}</TableCell>
                      <TableCell align="right">{row.status}</TableCell>
                      <TableCell align="right">{row.action}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </TabPanel>
      </Tabs>
*/
