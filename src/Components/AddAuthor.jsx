import React, { useContext, useEffect } from "react";
import { AppCtx } from "../Context/AppContext";
import { useFormik } from "formik";
import { addAuthorSchema } from "../Helpers/Schema";

export default function AddAuthor(){

    const {info,setInfo,navigate}=useContext(AppCtx);

    const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
        initialValues:{
            bookAuthor:"",
            authorBio:"",
            authorDoy:""
        },
        validationSchema:addAuthorSchema,
        onSubmit:(newObj)=>{
            addNewAuthor(newObj);
        }
    })
   
   async function addNewAuthor(newObj){
       await setInfo(info.concat(newObj));
       navigate("/author");
    }

    return(
        <div className="add-author form-section">
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