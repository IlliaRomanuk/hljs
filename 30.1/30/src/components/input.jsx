import TextField from '@mui/material/TextField';
import { forwardRef } from "react";
const Input = forwardRef(({ field, form, ...props }, ref) => {
  return (
    <div>
      <TextField
        {...field}
        {...props}
        inputRef={ref}
        fullWidth
        error={Boolean(form.touched[field.name] && form.errors[field.name])}
        helperText={form.touched[field.name] && form.errors[field.name]}
      />
    </div>
  );
})

export default Input;
