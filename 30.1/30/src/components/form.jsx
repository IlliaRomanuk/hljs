import React, { useRef } from "react";
import { Formik, Form, Field } from "formik";
import ButtonClick from "./button";
import Input from "./input";
import Info from "./information";

function Forms() {
  const inputRef = useRef(null);
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
      >
        <div>
          <Form>
            <Field
              name="http"
              component={Input}
              label="URL"
              variant="outlined"
              ref={inputRef} 
            />
            <ButtonClick inputRef={inputRef}/>
          </Form>
          <Info />
        </div>
      </Formik>
    </div>
  );
}

export default Forms;
