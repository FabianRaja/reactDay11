import React, { useContext } from "react";  
import { AppCtx } from "../Context/AppContext";

export default function TopBar(){

    const {navigate,setTopBar,topBar,data,setData}=useContext(AppCtx);

    function handleAuthorsOnClick(){
        navigate("/author");
        setTopBar("authors")
    }
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
            {topBar==="books"?
            (<a className="btn btn-ghost text-l" onClick={()=>navigate("/addBook")}>ADD BOOK</a>):
            (<a className="btn btn-ghost text-l"  onClick={()=>navigate("/addAuthor")}>ADD AUTHOR</a>)}
            </div>
        </div>
    )
}