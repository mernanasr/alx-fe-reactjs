import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: "" }}
      validationSchema={Yup.object({
        username: Yup.string().required("Username is required"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <div>
          <label>Username:</label>
          <Field type="text" name="username" />
          <ErrorMessage name="username" component="p" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
