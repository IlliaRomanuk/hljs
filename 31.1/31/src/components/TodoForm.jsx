import { Form } from "react-final-form";
import { useState } from "react";
import { Field } from "react-final-form";
import { Button } from "@mui/material";
import { require } from "../helpers/validators";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdd } from "../redux/slices/todoSlice";
import Input from "./Input";

const TodoForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const isLoading = useSelector((state) => state.todos.isLoading);
  const dispatch = useDispatch();

  const onSubmit = async (values) => dispatch(fetchAdd(values.name));

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form }) => {
        const onFormSubmit = (event) => {
          handleSubmit(event);
          setSubmitted(true);
          form.reset();
        };

        return (
          <form onSubmit={onFormSubmit}>
            <Field
              label="Name"
              name="name"
              submitted={submitted}
              setSubmitted={setSubmitted}
              component={Input}
              validate={require}
            />
            <Button
              variant="outlined"
              type="submit"
              style={{ height: "56px" }}
              disabled={isLoading}
            >
              Add
            </Button>
          </form>
        );
      }}
    />
  );
};

export default TodoForm;
