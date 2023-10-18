import React from 'react'
import { Formik, Field, Form } from "formik";


function FormField() {
  return (
    <div>

      <h1>Contact Us</h1>
      <Formik
        initialValues={{ firstname: "", lastname: "", email: "" }}

        onSubmit={(values) => {
          console.log("values: ",values);
        }}
      >
        <Form>
          <label htmlFor="firstname" >First name </label>
          <Field name="firstname" placeholder="Rumeysa" />
          <br>
          </br>
          <label htmlFor="lastname" >Last name </label>
          <Field name="lastname" placeholder="Kayrak" />
          <br>
          </br>
          <label htmlFor="email" >Email </label>
          <Field name="email" placeholder="rumeysa@gmail.com" />
          <br>
          </br>
          <button type="submit">Submit</button>
        </Form>
      </Formik>

    </div>
  )
}

export default FormField
