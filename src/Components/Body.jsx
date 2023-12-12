import React, { useContext } from "react";
import { AppCtx } from "../Context/AppContext";

export default function Body({bookName,bookAuthor,bookNumber,bookDate,index}){
   
    //useful states is imported from context
    const {data,setData,navigate,setUseIndex}=useContext(AppCtx);
    //deleteBook function to delete the object of array from the data
    function deleteBook(){
        const filteredData=data.filter((value,idx)=>idx!=index);
        setData(filteredData);
    }
    //editBook function to navigate to editBook page with the index value
    function editBook(){
        navigate("/editBook");
        setUseIndex(index);
    }
    
    return(
        <div className="body p-1 m-5 sm:p-0 sm:m-0">
               
               <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-base-200"> 
                <div className="collapse-title text-xl font-medium">
                    {bookName}
                </div>
                <div className="collapse-content body-subject"> 
                   <div>
                        <p>Author : {bookAuthor}</p>
                        <p>ISBN : {bookNumber}</p>
                        <p>Published : {bookDate}</p>
                   </div> 
                   <div className="body-subject-2">
                   <button className="btn btn-active ml-1" onClick={()=>editBook()}>Edit</button>
                   <button className="btn btn-active ml-1" onClick={()=>deleteBook()}>Delete</button>  
                   </div>
                  
                </div>
                </div>
        </div>
    )
}