import React from "react";
import MainSpace from "../Components/MainSpace";
import AddAuthor from "../Components/AddAuthor";


export default function AddAuthorPage(){
    return(
      //AddAuthor component is fixed as the children for mainSpace
        <MainSpace>
          <AddAuthor/>
        </MainSpace>
    )
}