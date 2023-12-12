import React, { useContext } from "react";  
import { AppCtx } from "../Context/AppContext";

export default function TopBar(){
    //useful states is imported from the context
    const {navigate,setTopBar,topBar}=useContext(AppCtx);
    //useContext and AppCtx is imported
    //handleAuthorsOnClick function to navigate page to author page while onClicking the books button with the topBar value
    function handleAuthorsOnClick(){
        navigate("/author");
        setTopBar("authors")
    }
    //handleBooksOnClick function to navigate page to books page while onClicking the authors button with the topBar value
    function handleBooksOnClick(){
        navigate("/books");
        setTopBar("books");
    }
    return(
        <div className="top-bar">
            <div className="navbar bg-accent lg:flex-col">
            <a className="btn btn-ghost text-xl" onClick={()=>navigate("/books")}>DASHBOARD</a>
            <a className="btn btn-ghost text-l" onClick={()=>handleBooksOnClick()}>BOOKS</a>
            <a className="btn btn-ghost text-l" onClick={()=>handleAuthorsOnClick()}>AUTHORS</a>
            {/* if the topBar value is books add book button will be displayed and if its not add author button will be displayed */}
            {topBar==="books"?
            (<a className="btn btn-ghost text-l" onClick={()=>navigate("/addBook")}>ADD BOOK</a>):
            (<a className="btn btn-ghost text-l"  onClick={()=>navigate("/addAuthor")}>ADD AUTHOR</a>)}
            </div>
        </div>
    )
}