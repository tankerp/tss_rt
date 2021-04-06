import React, { useState } from "react"
import { string, func, element, oneOfType } from "prop-types"
import Header from "./../Components/Header"
//import { CSVReader, parse,  } from "papaparse"
import PapaParse from "papaparse"
import * as XLSX from "xlsx"
//https://codesandbox.io/s/5wz3oqp8rx?from-embed=&file=/src/index.js:566-611
import DataTable from "react-data-table-component"
//const buttonRef = React.createRef()
const Formstwo = ({ cssClass = "csv-reader-input", label, onError, inputId = null, inputStyle = {}, parserOptions = { header: true } }) => {
  const [columns, setColumns] = useState([])
  const [data, setData] = useState([])
  let [parsedCSV, setParsedCSV] = useState([])

  let fileContent = undefined

  const handleChangeFile = e => {
    let reader = new FileReader()
    const filename = e.target.files[0].name

    reader.onload = event => {
      const csvData = PapaParse.parse(event.target.result, Object.assign(parserOptions))
      //onFileLoaded(csvData.data, filename)
      setData(filename)
    }
    console.log(data)

    reader.readAsText(e.target.files[0])
  }

  /*
  const onDragOver = e => {
    e.preventDefault()
  }

  const onDrop = e => {
    e.preventDefault()
    console.log(e.dataTransfer.files)
    Array.from(e.dataTransfer.files).filter((file: any) => file.type === "text/csv")
    console.log(file)
  }*/

  const handleFileUpload = e => {
    console.log(e)
  }
  return (
    <>
      <Header />

      <div>
        <input type="file" accept=".csv,.xlsx,.xls,.txt" onChange={e => handleChangeFile(e)}></input>
      </div>
    </>
  )
}
/*Formstwo.propTypes = {
  cssClass: string,
  label: oneOfType([string, element]),
  onFileLoaded: func,
  onError: func,
  inputId: string
}*/
export default Formstwo

/*
<h1 className="text-center text-4xl"> Import Contacts Here </h1>
        <div
          className={`p-6 my-5 mx-auto max-w-md border-2`}
          onDragOver={e => {
            e.preventDefault()
          }}
          onDrop={e => {
            e.preventDefault()
            console.log(e)
          }}
        >
          DROP HERE
        </div>
        */
