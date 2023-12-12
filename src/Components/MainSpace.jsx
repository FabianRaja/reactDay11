import React from "react";
import TopBar from "./TopBar";

export default function MainSpace({children}){
    return(
        <div className="mainSpace">
            <TopBar/>
            {children}
        </div>
    )
}