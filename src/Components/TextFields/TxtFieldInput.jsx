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
      />
    </Box>
  );
};
export const TxtFieldInputDate = (props) => {
  const [value, setValue] = React.useState(new Date("mm/dd/yyyy"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label={props.label}
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
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
