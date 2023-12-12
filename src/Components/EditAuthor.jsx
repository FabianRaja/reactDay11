import React, { useContext, useEffect, useState } from "react";  
import { AppCtx } from "../Context/AppContext";
import { useFormik } from "formik";
import { editAuthorSchema } from "../Helpers/Schema";

export default function EditAuthor(){
    //useful states is imported from the context
    const{useIndex,remaining,setRemaining,info,setInfo,navigate}=useContext(AppCtx);
    //useContext and AppCtx is imported
    
    //used useEffect to perfrom certain operation when the page is loaded while mouting
    useEffect(()=>{
        //filteredAuthorEditData to filter data's and get the author to be edited by comparing the index values
        const filteredAuthorEditData=info.filter((value,idx)=>idx===useIndex);
        //remainingData to filter the remaining data's in the data without the edited data by comparing the index values
        const remainingData=info.filter((value,idx)=>idx!=useIndex);
        //remainingData is setted as the remaining state
        setRemaining(remainingData);
    },[])
  
    //formik validation
    const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
        //initial values to remain as empty for editing
        initialValues:{
            bookAuthor:"",
            authorBio:"",
            authorDoy:""
        },
        //editAuthorSchema is imported from Schema in the Helpers Folder
        validationSchema:editAuthorSchema,
        //while on submit all the values will be stored in the editedAuthor Object
        onSubmit:(editedAuthor)=>{
            //editedAuthor is passed as an argument to the editAuthor function
            editAuthor(editedAuthor);
        }
    })
    //async function to wait and execute the setInfo state 
    async function editAuthor(editedAuthor){
         await setInfo(remaining.concat(editedAuthor));
         //after submitting the page will navigate to the author page
         navigate("/author");
    }
    return(
        <div className="edit-book form-section">
            {/* necessary steps for using formik validation is followed */}
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