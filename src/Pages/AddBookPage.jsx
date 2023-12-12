import React from "react";
import MainSpace from "../Components/MainSpace";
import AddBook from "../Components/AddBook";

export default function AddBookPage(){
    return(
         //AddBook component is fixed as the children for mainSpace
        <MainSpace>
            <AddBook/>
        </MainSpace>
    )
}