import React from "react";
import MainSpace from "../Components/MainSpace";
import EditAuthor from "../Components/EditAuthor";

export default function EditAuthorPage(){
    return(
         //EditAuthor component is fixed as the children for mainSpace
        <MainSpace>
            <EditAuthor/>
        </MainSpace>
    )
}