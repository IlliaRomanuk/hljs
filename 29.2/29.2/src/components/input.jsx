import TextField from '@mui/material/TextField';

function Input({ field, form, ...props}){
    return(
        <TextField id="outlined-basic"
         label="Outlined"
          variant="outlined"
          {...field}
      {...props}
      fullWidth
      error={Boolean(form.touched[field.name] && form.errors[field.name])}
      helperText={form.touched[field.name] && form.errors[field.name]}
           />
    )
}
export default Input