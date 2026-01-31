import { Formik, Form, Field } from "formik";
import ButtonClick from "./button";
import Input from "./forminput";
import Info from "./information";
import Footer from "./foter"
import { useDispatch } from "react-redux";
import { getInfo } from "../redux/swapi/slice";
function Forms() {
  const dispatch = useDispatch();
  const onChange =(event) =>{
    event.preventDefault();
    const value = event.target.elements.http.value;
    console.log(value);
    dispatch(getInfo(value));
  }
  return (
    <div>
      <Formik
        initialValues={{ http: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.http) {
            errors.http = "Reqire";
          } else if (values.http.length < 5) {
            errors.http = "the word must contain 5 letters";
          }
          return errors;
        }}
        onSubmit={(values) => {
          console.log(values.http);
          dispatch(getInfo(values.http));
        }}
        
      >
        <div>
          <Form >
            <Field
              name="http"
              component={Input}
              label="URL"
              variant="outlined"
            />
            <ButtonClick/>
          </Form>
          <Info />
          <Footer/>
        </div>
      </Formik>
    </div>
  );
}

export default Forms;
