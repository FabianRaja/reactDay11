import React, { useContext, useEffect } from "react";
import { AppCtx } from "../Context/AppContext";
import { useFormik } from "formik";
import { addAuthorSchema } from "../Helpers/Schema";

export default function AddAuthor(){
    
    //states imported from context
    const {info,setInfo,navigate}=useContext(AppCtx);
    //use context and app ctx is imported

    //formik validation
    const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
        //initial values to be empty
        initialValues:{
            bookAuthor:"",
            authorBio:"",
            authorDoy:""
        },
        //addAuthorSchema is imported 
        validationSchema:addAuthorSchema,
        //onSubmit all the values will be stored in newObj
        onSubmit:(newObj)=>{
            //newObj is passed as an argument to addNewAuthor function
            addNewAuthor(newObj);
        }
    })
   //async function to wait and execute setInfo object
   async function addNewAuthor(newObj){
       await setInfo(info.concat(newObj));
       //after submitting it will navigate to the author page
       navigate("/author");
    }

    return(
        <div className="add-author form-section">
            {/* necessary steps for using formik validation is followed */}
            <form className="form-content" onSubmit={handleSubmit}>
                    <input value={values.bookAuthor} onBlur={handleBlur} name="bookAuthor" type="text" placeholder="Author Name" className="input input-bordered w-full m-2 max-w-xs sm:m-0" onChange={handleChange} /><br/>
                    {touched.bookAuthor && errors.bookAuthor?(<div className="text-red-400">{errors.bookAuthor}</div>):("")}
                    <input value={values.authorBio} onBlur={handleBlur} name="authorBio" type="text" placeholder="Bio" className="input input-bordered w-full m-2 max-w-xs sm:m-0" onChange={handleChange} /><br/>
                    {touched.authorBio && errors.authorBio?(<div className="text-red-400">{errors.authorBio}</div>):("")}
                    <input value={values.authorDoy} onBlur={handleBlur} name="authorDoy" type="number" placeholder="Birth Year" className="input input-bordered w-full m-2 max-w-xs sm:m-0" onChange={handleChange}/><br/>
                    {touched.authorDoy && errors.authorDoy?(<div className="text-red-400">{errors.authorDoy}</div>):("")}
                    <button type="submit" className="btn btn-active ml-20 mt-2 sm:ml-10">Add Book</button>
            </form>    
        </div>
    )
}