import React from 'react'
import { useFormik } from 'formik';

function UseFormik() {
    const {handleChange, handleSubmit, values} = useFormik( {
        initialValues: {firstname: "", lastname: "", email: "" ,gender:"male", hobies:[], country: "Turkey" },
        onSubmit: (values) => {
          console.log(values);
        },
     });
  return (
    <div>
      
      <h1>useFormik</h1>

       <form onSubmit={handleSubmit}>
          <label htmlFor="firstname" >First name </label>
          <input name="firstname" placeholder="Rumeysa" onChange={handleChange} />
          <br>
          </br>
          <label htmlFor="lastname" >Last name </label>
          <input name="lastname" placeholder="Kayrak" onChange={handleChange} />
          <br>
          </br>
          <label htmlFor="email" >Email </label>
          <input name="email" placeholder="rumeysa@gmail.com" onChange={handleChange} />
          <br>
          </br>
          <span>Male</span>
          <input type="radio" name="gender" value="male" onChange={handleChange} checked={values.gender === "male"} />
          
          <span>Female</span>
          <input type="radio" name="gender" value="Female" onChange={handleChange} checked={values.gender === "female"} />
          <br>
          </br>

          <div>
            Football
            <input type="checkbox" name="hobies" value="Footbal" onChange={handleChange} />
           </div>

           <div>
            Cinema
            <input type="checkbox" name="hobies" value="Cinema" onChange={handleChange} />
           </div>

           <div>
            Photography
            <input type="checkbox" name="hobies" value="Photography" onChange={handleChange} />
           </div>

           <select name="country" checked={values.country === "Turkey"} onChange={handleChange} >
            <option value="Turkey">Turkey</option>
            <option value="England">England</option>
            <option value="USA">USA</option>
           </select>
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

export default UseFormik
