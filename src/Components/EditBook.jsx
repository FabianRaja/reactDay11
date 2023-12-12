import React, { useContext, useEffect, useState } from "react";  
import { AppCtx } from "../Context/AppContext";
import { useFormik } from "formik";
import { editBookSchema } from "../Helpers/Schema";

export default function EditBook(){
   //useful states is imported from the context
    const{useIndex,remaining,setRemaining,data,setData,navigate}=useContext(AppCtx);    
   //useContext and AppCtx is imported
    //formik validation
   const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
       //initial values to remain as empty for editing
    initialValues:{
            bookName:"",
            bookAuthor:"",
            bookNumber:"",
            bookDate:"",
        },
         //editBookSchema is imported from Schema in the Helpers Folder
        validationSchema:editBookSchema,
        //while on submit all the values will be stored in the editedObj Object
        onSubmit:(editedObj)=>{
             //editedObj is passed as an argument to the editBook function
            editBook(editedObj);
        },        
       });
      //used useEffect to perfrom certain operation when the page is loaded while mouting
       useEffect(()=>{
        //filteredBookEditData is filtering the data from all the data to the book data that gonna be edited by comparing index
        const filteredBookEditData=data.filter((value,idx)=>idx===useIndex);
        //reaminingData will filter all the data and store without the edited data
        const remainingData=data.filter((value,idx)=>idx!=useIndex);
        //remainingdata is setted to the state remaining
        setRemaining(remainingData);
    
    },[])
     //async function to wait and execute the setData operation
    async function editBook(editedObj){ 
       await setData(remaining.concat(editedObj));
       //while on Submit the page will navigate to the books page
       navigate("/books");
    }
    return(
        <div className="edit-book form-section">
            {/* necessary steps for using formik validation is followed */}
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