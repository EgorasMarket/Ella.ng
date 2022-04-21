import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import "./TextField.css";
export const TxtFieldInputTxt = (props) => {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <TextField
        fullWidth
        label={props.label}
        // id="fullWidth"
        className="txtField"
        type={props.type}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
      />
    </Box>
  );
};
export const TxtFieldInputNumber = (props) => {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <TextField
        fullWidth
        label={props.label}
        id="fullWidth"
        className="txtField"
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}

      />
    </Box>
  );
};
export const TxtFieldInputDate = (props) => {
  const [value, setValue] = React.useState(new Date("mm/dd/yyyy"));

  function handleChange(inputVal, inputName) {
    console.log(inputVal, inputName);
    // Here, we invoke the callback with the new value
    props.onChange(inputVal, inputName);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label={props.label}
          type={props.type}
          inputFormat="MM/dd/yyyy"
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          // onChange={(event, value, name) => {handleChange(props.value, props.name)}}
          renderInput={(params) => <TextField {...params} />}
          className="txtField"
        />
      </Stack>
    </LocalizationProvider>
  );
};
// =============
// =============
// =============
// =============
// =============
// =============
// =============
// =============
export const BasicSelect = (props) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.labelId}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.value}
          name={props.name}
          onChange={props.onChange}
          label={props.label}
        >
          {props.menuItem.map((data) => (
            <MenuItem value={data.value}>{data.value}</MenuItem>
          ))}
          {/* <MenuItem value={>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  );
};
// =============
// =============
// =============
// =============
// =============
// =============
// =============
// =============
export const BasicSelectState = (props) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.state}
          name={props.name}
          onChange={props.onChange}
          label={props.label}
        >
          {props.menuItem.map((data) => (
            <MenuItem value={data.state}>{data.state}</MenuItem>
          ))}
          {/* <MenuItem value={>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  );
};
