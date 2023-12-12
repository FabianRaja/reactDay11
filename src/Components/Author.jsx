import React, { useContext } from "react";
import { AppCtx } from "../Context/AppContext";

export default function Author({bookAuthor,authorDoy,authorBio,index}){
    //useful states is imported from context
    const {info,setInfo,navigate,setUseIndex}=useContext(AppCtx);
    //useContext and AppCtx is imported
    //deleteAuthor function to delete the object of array from the setInfo state
    function deleteAuthor(){
        const filteredAuthorData=info.filter((value,idx)=>idx!=index);
        setInfo(filteredAuthorData);
    }
    //editAuthor function to navigate to editAuthor page with the index value
    function editAuthor(){
        navigate("/editAuthor");
        setUseIndex(index);
    }
    return(
        <div className="body p-1 m-5 sm:p-0 sm:m-0">
               <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-base-200"> 
                <div className="collapse-title text-xl font-medium">
                    {bookAuthor}
                </div>
                <div className="collapse-content body-subject"> 
                   <div>
                        <p>Birth Year : {authorDoy}</p>
                        <p>Bio : {authorBio}</p>
                   </div> 
                   <div className="body-subject-2">
                   <button className="btn btn-active ml-1" onClick={()=>editAuthor()}>Edit</button>
                   <button className="btn btn-active ml-1" onClick={()=>deleteAuthor()}>Delete</button>  
                   </div>
                  
                </div>
                </div>
        </div>
    )
}