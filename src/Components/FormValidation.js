import React from 'react'
import { useFormik } from 'formik';
import validations from './Validations';

function FormValidation() {
    const {handleChange, handleSubmit, values, errors, touched, handleBlur} = useFormik( {
        initialValues: {email: "" ,password:"", passwordConfirm: "" },
        onSubmit: (values) => {
          console.log(values);
        },
        validationSchema:validations,
     });
  return (
    <div>
      
      <h1>Validation</h1>

       <form onSubmit={handleSubmit}>
          <label >Email </label>
          <input name="email" placeholder="rumeysa@gmail.com" onChange={handleChange} onBlur={handleBlur} />
          {errors.email && touched.email && <div>{errors.email}</div> }
          <br>
          </br>
          <label >Password </label>
          <input name="password"  onChange={handleChange} onBlur={handleBlur} />
          {errors.password && touched.password && <div>{errors.password}</div> }
          <br>
          </br>
          <label  >Confirm password </label>
          <input name="passwordConfirm" onChange={handleChange} onBlur={handleBlur} />
          {errors.passwordConfirm && touched.passwordConfirm && <div>{errors.passwordConfirm}</div> }
          <br>
          </br>

          <button type="submit">Submit</button>
          <br>
          </br>
          <code>
            {JSON.stringify(values)}
          </code>
        </form>
        
    </div>
  )
}

export default FormValidation
