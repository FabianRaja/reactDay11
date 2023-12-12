import React, { useContext, useEffect, useState } from "react";  
import { AppCtx } from "../Context/AppContext";
import { useFormik } from "formik";
import { editBookSchema } from "../Helpers/Schema";

export default function EditBook(){

    const{useIndex,remaining,setRemaining,data,setData,navigate}=useContext(AppCtx);    
    const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
       initialValues:{
            bookName:"",
            bookAuthor:"",
            bookNumber:"",
            bookDate:"",
        },
        validationSchema:editBookSchema,
        onSubmit:(editedObj)=>{
            editBook(editedObj);
        },        
       });

       useEffect(()=>{
        const filteredBookEditData=data.filter((value,idx)=>idx===useIndex);
        console.log(filteredBookEditData);
        const remainingData=data.filter((value,idx)=>idx!=useIndex);
        setRemaining(remainingData);
    
    },[])

    async function editBook(editedObj){ 
       await setData(remaining.concat(editedObj));
       navigate("/books");
    }
    return(
        <div className="edit-book form-section">
            <form className="form-content" onSubmit={handleSubmit}>
                    <input value={values.bookName} name="bookName" onBlur={handleBlur} type="text" placeholder="Book Name" className="input input-bordered w-full m-2 max-w-xs sm:m-0" onChange={handleChange} /><br/>
                    {touched.bookName && errors.bookName?(<div className="text-red-400">{errors.bookName}</div>):("")}
                    <input value={values.bookAuthor} name="bookAuthor" onBlur={handleBlur} type="text" placeholder="Author" className="input input-bordered w-full m-2 max-w-xs sm:m-0" onChange={handleChange} /><br/>
                    {touched.bookAuthor && errors.bookAuthor?(<div className="text-red-400">{errors.bookAuthor}</div>):("")}
                    <input value={values.bookNumber} name="bookNumber" onBlur={handleBlur} type="number" placeholder="ISBN Number" className="input input-bordered m-2 w-full max-w-xs sm:m-0" onChange={handleChange}/><br/>
                    {touched.bookNumber && errors.bookNumber?(<div className="text-red-400">{errors.bookNumber}</div>):("")}
                    <input value={values.bookDate} name="bookDate" onBlur={handleBlur} type="number" placeholder="Published Year" className="input input-bordered m-2 w-full max-w-xs sm:m-0" onChange={handleChange}/><br/>
                    {touched.bookDate && errors.bookDate?(<div className="text-red-400">{errors.bookDate}</div>):("")}
                    <button type="submit" className="btn btn-active ml-20 mt-2 sm:ml-10">Update Book</button>
            </form>
          
        </div>
    )
}