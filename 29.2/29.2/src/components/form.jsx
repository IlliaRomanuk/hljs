import Input from "./input";
import Button from "@mui/material/Button";
import PinnedSubheaderList from "./list";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch} from "react-redux";
// import  todos from "../redux/slice"
import { add } from "../redux/slice";
import Footer from "./footer"
function Forme() {
    const dispatch = useDispatch();
    return(
    <div>
      <Formik
        initialValues={{ do: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.do) {
            errors.do = "Reqire";
          } else if (values.do.length < 5) {
            errors.do = "the word must contain 5 letters";
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          dispatch(add(values.do));
          resetForm();
        }}
      >
        <Form>
          <Field name="do"   component={Input}  label="do" variant="outlined" />
          <ErrorMessage name="do" component="div" />
          <Button type="submit" variant="outlined">Submit</Button>
          <PinnedSubheaderList/>
          <Footer/>
        </Form>
      </Formik>
    </div>
    )
}
export default Forme;