import React from "react";
import TopBar from "./TopBar";

export default function MainSpace({children}){
    return(
        //TopBar is the permanent component for mainspace page
        //Children property is used to use children components
        <div className="mainSpace">
            <TopBar/>
            {children}
        </div>
    )
}