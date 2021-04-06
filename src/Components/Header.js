import React from "react"
//https://www.npmjs.com/package/react-moment-> Is it necessary?
import Moment from "react-moment"
import symb from "./Slice-2-3-e1602342563858.png"
import developer from "./Capture.PNG"
import "./Header.css"
const Header = () => {
  const datetimes = new Date()
  let date = datetimes.getDate()
  return (
    <>
      <div className="header_items">
        <div className="logo-det">
          {
            //<img src={symb} onClick={tohomepage} width={100}></img>
          }
          <img src={symb} width={100}></img>
        </div>
        <div className="datetime">
          <Moment date={datetimes} format="YYYY/MM/DD HH:MM" />
        </div>
        <div className="logo-dev">
          <img src={developer} width={60}></img>
        </div>
        <div className="User-info">
          <p>Hi</p>
          <p>Srikant</p>
        </div>
      </div>
    </>
  )
}

export default Header
