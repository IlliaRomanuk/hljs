import { TextField } from "@mui/material";

const Input = (props) => {
  const { label, meta, input, setSubmitted, submitted } = props;

  return (
    <TextField
      label={label}
      error={(meta.submitFailed || meta.touched) && !!meta.error}
      helperText={(meta.submitFailed || meta.touched )&& meta.error}
      {...input}
      onChange={(props) => {
        setSubmitted(false);
        input.onChange(props);
      }}
    />
  );
};

export default Input;
