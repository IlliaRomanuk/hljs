import TextField from '@mui/material/TextField';
const Input = ({ field, form, ...props }) => {
  return (
    <div>
      <TextField
      name='inputText'
        {...field}
        {...props}
        fullWidth
        error={Boolean(form.touched[field.name] && form.errors[field.name])}
        helperText={form.touched[field.name] && form.errors[field.name]}
      />
    </div>
  );
}

export default Input;
