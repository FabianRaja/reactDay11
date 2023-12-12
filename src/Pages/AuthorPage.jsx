import React, { useContext } from "react";
import MainSpace from "../Components/MainSpace";
import Author from "../Components/Author";
import { AppCtx } from "../Context/AppContext";

export default function AuthorPage(){

    const {info}=useContext(AppCtx);
    return(
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