import React, { useContext, useEffect, useState } from "react";  
import { AppCtx } from "../Context/AppContext";
import { useFormik } from "formik";
import { editAuthorSchema } from "../Helpers/Schema";

export default function EditAuthor(){

    const{useIndex,setToEdit,remaining,setRemaining,data,setData,info,setInfo,authorName, setAuthorName, authorBio, setAuthorBio, setAuthorDoy,authorDoy,navigate}=useContext(AppCtx);

    
    useEffect(()=>{
        const filteredAuthorEditData=info.filter((value,idx)=>idx===useIndex);
        console.log(filteredAuthorEditData);
        const remainingData=info.filter((value,idx)=>idx!=useIndex);
        setRemaining(remainingData);
    },[])
  
    const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
        initialValues:{
            bookAuthor:"",
            authorBio:"",
            authorDoy:""
        },
        validationSchema:editAuthorSchema,
        onSubmit:(editedAuthor)=>{
            editAuthor(editedAuthor);
        }
    })

    async function editAuthor(editedAuthor){
         await setInfo(remaining.concat(editedAuthor));
         navigate("/author");
    }
    return(
        <div className="edit-book form-section">
            <form onSubmit={handleSubmit} className="form-content">
                    <input value={values.bookAuthor} onBlur={handleBlur} type="text" name="bookAuthor" placeholder="Author Name" className="input input-bordered w-full m-2 max-w-xs sm:m-0" onChange={handleChange} /><br/>
                    {touched.bookAuthor && errors.bookAuthor?(<div className="text-red-400">{errors.bookAuthor}</div>):("")}
                    <input value={values.authorDoy} onBlur={handleBlur} type="number" name="authorDoy" placeholder="Birth Year" className="input input-bordered w-full m-2 max-w-xs sm:m-0" onChange={handleChange}/><br/>
                    {touched.authorDoy && errors.authorDoy?(<div className="text-red-400">{errors.authorDoy}</div>):("")}
                    <input value={values.authorBio} onBlur={handleBlur} type="text" name="authorBio" placeholder="Bio" className="input input-bordered w-full m-2 max-w-xs sm:m-0" onChange={handleChange} /><br/>
                    {touched.authorBio && errors.authorBio?(<div className="text-red-400">{errors.authorBio}</div>):("")}
                    <button type="submit" className="btn btn-active ml-20 mt-2 sm:ml-10">Update Author</button>
            </form>
          
        </div>
    )
}