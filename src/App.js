import "./App.css"
import { Switch, Route, useLocation } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./routes/Home"
import Configuration from "./routes/Configuration"
import SitePage from "./routes/SitePage"
import App_Forms from "./routes/App_Forms"
import Formstwo from "./routes/Formstwo"
import Formsthree from "./routes/Formsthree"
import UserForm from "./Components/UserForm"
import Users from "./Components/Users"
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/Configuration" component={Configuration}></Route>
        <Route path="/SitePage" component={SitePage}></Route>
        <Route path="/Forms" component={App_Forms}></Route>
        <Route path="/Forms2" component={Formsthree}></Route>
        <Route path="/UserForm" component={Users}></Route>
      </Switch>
    </div>
  )
}

export default App
