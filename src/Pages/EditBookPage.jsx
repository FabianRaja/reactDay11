import React from "react";
import MainSpace from "../Components/MainSpace";
import EditBook from "../Components/EditBook";

export default function EditBookPage(){
    return(
         //EditBook component is fixed as the children for mainSpace
        <MainSpace>
            <EditBook/>
        </MainSpace>
    )
}