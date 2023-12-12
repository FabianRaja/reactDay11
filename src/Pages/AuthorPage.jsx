import React, { useContext } from "react";
import MainSpace from "../Components/MainSpace";
import Author from "../Components/Author";
import { AppCtx } from "../Context/AppContext";

export default function AuthorPage(){
   //info state is imported from context
    const {info}=useContext(AppCtx);
    //useContext and AppCtx is imported
    return(
        //Author component is fixed as the children for mainSpace and mapped with necessary values being passed to it
        <MainSpace>
            {info && info?.map((value,index)=>(
               <Author
               key={index}
               bookAuthor={value.bookAuthor}
               authorDoy={value.authorDoy}
               authorBio={value.authorBio}
               index={index}
               />
            ))}
          
        </MainSpace>
    )
}