import React, { useContext } from "react";
import MainSpace from "../Components/MainSpace";
import Body from "../Components/Body";
import { AppCtx } from "../Context/AppContext";

export default function BooksPage(){

    const {data}=useContext(AppCtx);
    return(
      <MainSpace>      
        {data && data?.map((value,index)=>(
          <Body key={index}
          bookName={value.bookName}
          bookAuthor={value.bookAuthor}
          bookNumber={value.bookNumber}
          bookDate={value.bookDate}
          index={index}
          data={data}
          />
        ))}
       
      </MainSpace>
    )
}