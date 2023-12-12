import React, { useContext, useEffect } from "react";
import { AppCtx } from "../Context/AppContext";
import { useFormik } from "formik";
import { addBookSchema } from "../Helpers/Schema";

export default function AddBook(){

    const {data,setData,navigate}=useContext(AppCtx);

   const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
    initialValues:{
        bookName:"",
        bookAuthor:"",
        bookNumber:"",
        bookDate:""
    },
    validationSchema:addBookSchema,
    onSubmit:(newBook)=>{
        addNewBook(newBook);
    },
    
   })
   
   async function addNewBook(newBook){
       await setData(data.concat(newBook));
       navigate("/books");
    }

    return(
        <div className="add-book form-section">
            <form className="form-content" onSubmit={handleSubmit}>
                    <input value={values.bookName} onBlur={handleBlur} type="text" name="bookName" placeholder="Book Name" className="input input-bordered w-full m-2 max-w-xs sm:m-0" onChange={handleChange} /><br/>
                    {touched.bookName && errors.bookName?(<div className="text-red-400">{errors.bookName}</div>):("")}
                    <input value={values.bookAuthor} onBlur={handleBlur} type="text"  name="bookAuthor" placeholder="Author" className="input input-bordered w-full m-2 max-w-xs sm:m-0" onChange={handleChange} /><br/>
                    {touched.bookAuthor && errors.bookAuthor?(<div className="text-red-400">{errors.bookAuthor}</div>):("")}
                    <input value={values.bookNumber} onBlur={handleBlur} type="number"  name="bookNumber" placeholder="ISBN Number" className="input input-bordered m-2 w-full max-w-xs sm:m-0" onChange={handleChange}/><br/>
                    {touched.bookNumber && errors.bookNumber?(<div className="text-red-400">{errors.bookNumber}</div>):("")}
                    <input value={values.bookDate} onBlur={handleBlur} type="number"  name="bookDate" placeholder="Published Year" className="input input-bordered m-2 w-full max-w-xs sm:m-0" onChange={handleChange}/><br/>
                    {touched.bookDate && errors.bookDate?(<div className="text-red-400">{errors.bookDate}</div>):("")}
                    <button type="submit" className="btn btn-active ml-20 mt-2 sm:ml-10">Add Book</button>
            </form>
          
        </div>
    )
}