import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option) => option.title,
});

export default function Filter(props) {
  const [getAssetTags, setAssetTags] = React.useState("");

  function handleChange(inputVal, inputName) {
    // console.log(inputVal, inputName);
    // Here, we invoke the callback with the new value
    props.onChange(inputVal, inputName);
  }
  return (
    <Autocomplete
      id="filter-demo"
      name={props.names}
      options={props.options}
      getOptionLabel={(option) => option.title}
      filterOptions={filterOptions}
      onChange={(event, value, name) => {
        handleChange(value.title, props.names);
      }}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={props.placeHolder}
          name={props.names}
          value={props.value}
        />
      )}
    />
  );
}
