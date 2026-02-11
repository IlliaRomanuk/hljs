import { Formik } from "formik";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/slice";
function AddForm() {
const dispatch = useDispatch();

    return (
        <Formik
        initialValues={{ Quantity: "", name: "", Category: "", Price: "", Photo: "", Description: "",}}
        validate={(values) => {
          const errors = {};
          if (!values.Category) {
            errors.Category = "Required";
          } else if(!values.Quantity) {
            errors.Quantity = "Required";
          } else if(!values.name) {
            errors.name = "Required";
          } else if(!values.Price) {
            errors.Price = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
            dispatch(addProduct(values)); 
            setSubmitting(false);
            resetForm(); 
          }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Box
            sx={{
              p: 2,
              pl: 4,
              mt: "151px",
              maxWidth: 500,
              mx: "auto",
              borderRadius: 2,
              bgcolor: "background.default",
              display: "grid",
              gridTemplateColumns: { md: "1fr" },
              gap: 2,
            }}
          >
            <form className="formLog" onSubmit={handleSubmit}>
              <TextField
                autoComplete="current-password"
                id="outlined-basic"
                label="Category"
                variant="outlined"
                type="string"
                name="Category"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Category}
              />
              {errors.Category && touched.Category && errors.Category}
              <TextField
                autoComplete="current-password"
                id="outlined-basic"
                label="name"
                variant="outlined"
                type="string"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && errors.name}
              <TextField
                autoComplete="current-password"
                id="outlined-basic"
                label="Quantity"
                variant="outlined"
                type="string"
                name="Quantity"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Quantity}
              />
              {errors.Quantity && touched.Quantity && errors.Quantity}
              <TextField
                autoComplete="current-password"
                id="outlined-basic"
                label="Price"
                variant="outlined"
                type="string"
                name="Price"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Price}
              />
              {errors.Price && touched.Price && errors.Price}
              <TextField
                autoComplete="current-password"
                id="outlined-basic"
                label="Photo"
                variant="outlined"
                type="string"
                name="Photo"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Photo}
              />
              {errors.Photo && touched.Photo && errors.Photo}
              <TextField
                autoComplete="current-password"
                id="outlined-basic"
                label="Description"
                variant="outlined"
                type="string"
                name="Description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Description}
              />
              {errors.Description && touched.Description && errors.Description}
              <Button variant="outlined" type="button">
                Cancel
              </Button>
              <Button variant="outlined" type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </form>
          </Box>
        )}
      </Formik>
    )
  }
  
  export default AddForm;  