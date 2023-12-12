import React, { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

//AppCtx is exported as createContext
export const AppCtx=createContext(null);
//createContext is imported

//using children property so that all the children can use these context values
export default function AppContext({children}){
    //books array of objects
    const books=[{
        bookName:"Adventures of Tom Sawyer",
        bookAuthor:"Mark Twain",
        bookNumber:54164533465,
        bookDate:2013,
    },
    {
        bookName:"Alice in Wonderland",
        bookAuthor:"Lewis Carrol",
        bookNumber:34342342341,
        bookDate:2015,
    },
    {
        bookName:"Ancient Mariner",
        bookAuthor:"Coleridge",
        bookNumber:41343142,
        bookDate:2009,
    },
    {
        bookName:"Pride and Prejudice",
        bookAuthor:"Jane Austen",
        bookNumber:2452562235,
        bookDate:2016,
    },
    {
        bookName:"Adventures of Sherlock Holmes",
        bookAuthor:"Arthur Conan Doyle",
        bookNumber:2134345452435,
        bookDate:2019,
    }
]
   //authors array of objects
    const authors=[{     
        bookAuthor:"Mark Twain",
        authorDoy:2000,
        authorBio:"Samuel Langhorne Clemens, known by the pen name Mark Twain, was an American writer, humorist, essayist, entrepreneur, publisher, and lecturer. He was praised as the greatest humorist the United States has produced, and William Faulkner called him the father of American literature"
    },
    {  
        bookAuthor:"Lewis Carrol",
        authorDoy:1990,
        authorBio:"Charles Lutwidge Dodgson, better known by his pen name Lewis Carroll, was an English author, poet, mathematician and photographer. His most notable works are Alice's Adventures in Wonderland and its sequel Through the Looking-Glass. He was noted for his facility with word play, logic, and fantasy"
    },
    {     
        bookAuthor:"Coleridge",    
        authorDoy:1992,
        authorBio:"Samuel Taylor Coleridge was an English poet, literary critic, philosopher, and theologian who, with his friend William Wordsworth, was a founder of the Romantic Movement in England and a member of the Lake Poets. He also shared volumes and collaborated with Charles Lamb, Robert Southey, and Charles Lloyd"
    },
    {      
        bookAuthor:"Jane Austen",
        authorDoy:2000,
        authorBio:"Jane Austen was an English novelist known primarily for her six novels, which implicitly interpret, critique, and comment upon the British landed gentry at the end of the 18th century. Austen's plots often explore the dependence of women on marriage for the pursuit of favourable social standing and economic security"
    },
    {
        bookAuthor:"Arthur Conan Doyle",
        authorDoy:1985,
        authorBio:"Sir Arthur Ignatius Conan Doyle KStJ, DL was a British writer and physician. He created the character Sherlock Holmes in 1887 for A Study in Scarlet, the first of four novels and fifty-six short stories about Holmes and Dr. Watson. The Sherlock Holmes stories are milestones in the field of crime fiction"
    }]

    //necessary states is used and is passed as a value to the AppCtx.Provider
    const navigate=useNavigate();
    const [data,setData]=useState(books);
    const [info,setInfo]=useState(authors);
    const [topBar,setTopBar]=useState("books");
    const [useIndex,setUseIndex]=useState();
    const [toEdit,setToEdit]=useState();
    const [remaining,setRemaining]=useState();
    return(
        <AppCtx.Provider
        value={{
           data,
           setData,
           info,
           setInfo,
           navigate,
           setTopBar,
           topBar,
           useIndex,
           setUseIndex,
           toEdit,
           setToEdit,
           remaining,
           setRemaining
        }}
        >
            {children}
        </AppCtx.Provider>
    )
}