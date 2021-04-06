import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import Header from "./../Components/Header"
import MainFormContainer from "./../Components/MainFormContainer"
import Form from "./../Components/Form"
import Input from "./../Components/Input"
import PrimaryButtons from "./../Components/PrimaryButtons"
import Typography from "@material-ui/core/Typography"
import * as yup from "yup"
import { Checkbox, FormControlLabel } from "@material-ui/core"
import { parsePhoneNumberFromString } from "libphonenumber-js"
//////////////////////////////////////////////////////////////////
import * as XLSX from "xlsx"

const normalizePhoneNumber = value => {
  const phoneNumber = parsePhoneNumberFromString(value)
  if (!phoneNumber) {
    return value
  }
  return phoneNumber.formatInternational()
}
const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First Name should not contain numbers")
    .required("First name is a required field"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last Name should not contain numbers")
    .required("Last name is a required field"),
  email: yup.string().email("Email should have a correct format").required("Email is a required field"),
  company: yup.string().required("Required field"),
  role: yup.string().required("Required field")
})

function App_Forms() {
  //onBlur- validation is trigerred when the field is on focus
  //defaultValues: { firstName: data.firstName, lastName: data.lastName },
  const { register, handleSubmit, watch, errors, setValue } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema)
  })

  const history = useHistory()
  /*const onSubmit = data => {
    console.log(JSON.stringify(data))
  }*/
  const onSubmit = data => {
    console.log(data)
  }

  const hasPhone = watch("hasPhone")

  /////////////////////////////////////////////////////////////////////
  //https://www.cluemediator.com/read-csv-file-in-react
  const [columns, setColumns] = useState([])
  const [data, setData] = useState({ firstName: "", lastName: "", email: "", company: "", role: "" })

  useEffect(() => {
    if (data) {
      //https://stackoverflow.com/questions/65388682/how-to-prefill-react-hook-form-with-setvalue
      setValue("firstName", data.firstName)
      setValue("lastName", data.lastName)
      setValue("email", data.email)
      setValue("company", data.company)
      setValue("role", data.role)
      console.log(data.firstName)
    } else {
      console.log(data)
    }
  }, [data])

  const processData = dataString => {
    const dataStringLines = dataString.split(/\r\n|\n/)
    const headers = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/)

    const list = []
    for (let i = 1; i < dataStringLines.length; i++) {
      const row = dataStringLines[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/)
      if (headers && row.length == headers.length) {
        const obj = {}
        for (let j = 0; j < headers.length; j++) {
          let d = row[j]
          if (d.length > 0) {
            if (d[0] == '"') d = d.substring(1, d.length - 1)
            if (d[d.length - 1] == '"') d = d.substring(d.length - 2, 1)
          }
          if (headers[j]) {
            obj[headers[j]] = d
          }
        }

        // remove the blank rows
        if (Object.values(obj).filter(x => x).length > 0) {
          list.push(obj)
        }
      }
    }

    // prepare columns list from headers
    const columns = headers.map(c => ({
      name: c,
      selector: c
    }))

    setData(list[0])
    setColumns(columns)
  }
  console.log(data.firstName)
  //setFirstName(data[0].name)
  //setLastName(data[0].lastname)
  //setEmail(data[0].email)
  //setCompany(data[0].company)
  //setRole(data[0].role)
  // handle file upload
  const handleFileUpload = e => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onload = evt => {
      /* Parse data */
      const bstr = evt.target.result
      const wb = XLSX.read(bstr, { type: "binary" })
      /* Get first worksheet */
      const wsname = wb.SheetNames[0]
      const ws = wb.Sheets[wsname]
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 })
      processData(data)
    }
    reader.readAsBinaryString(file)
  }

  //////////////////////////////////////////////////////////////////////

  return (
    <>
      <Header />
      <MainFormContainer>
        <Typography>Add User Info</Typography>
        {/*
        <form onSubmit={handleSubmit(onSubmit)}>
        <input ref={register} type="file" name="csv-file" />
        <button>Submit</button>
      </form>
      */}
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input ref={register} name="firstName" type="text" placeholder="First Name" error={!!errors.firstName} helperText={errors?.firstName?.message} />
          <Input ref={register} name="lastName" type="text" placeholder="Last Name" error={!!errors.lastName} helperText={errors?.lastName?.message} />
          <Input ref={register} name="email" type="email" placeholder="Email" required error={!!errors.email} helperText={errors?.email?.message} />
          <Input ref={register} name="company" type="text" placeholder="Company" required error={!!errors.company} helperText={errors?.company?.message} />
          <Input ref={register} name="role" type="text" placeholder="Role" required error={!!errors.role} helperText={errors?.role?.message} />
          <FormControlLabel control={<Checkbox defaultValue={hasPhone} defaultChecked={hasPhone} color="primary" inputRef={register} name="hasPhone" />} label="Do you want to add a phone number?" />
          {hasPhone && (
            <Input
              ref={register}
              id="phoneNumber"
              type="tel"
              label="Phone Number"
              onChange={event => {
                event.target.value = normalizePhoneNumber(event.target.value)
              }}
            />
          )}

          <PrimaryButtons>Submit</PrimaryButtons>
          <input type="file" accept=".csv,.xlsx,.xls,.txt" onChange={handleFileUpload}></input>
        </Form>
      </MainFormContainer>
    </>
  )
}

export default App_Forms
