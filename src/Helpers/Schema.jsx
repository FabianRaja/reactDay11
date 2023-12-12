import * as yup from "yup";

export const addBookSchema=yup.object({
       bookName:yup.string().required("Please fill").min(3,"Minimum three letters required"),
       bookAuthor:yup.string().required("Please enter the author name"),
       bookNumber:yup.number().required("Enter the ISBN number of the book"),
       bookDate:yup.number().required("Enter the published year")
})

export const addAuthorSchema=yup.object({
    bookAuthor:yup.string().required("Please fill the author name"),
    authorBio:yup.string().required("Please fill the bio"),
    authorDoy:yup.number().required("Please enter the birth year")
})

export const editBookSchema=yup.object({
    bookName:yup.string().required("Please fill").min(3,"Minimum three letters required"),
    bookAuthor:yup.string().required("Please enter the author name"),
    bookNumber:yup.number().required("Enter the ISBN number of the book"),
    bookDate:yup.number().required("Enter the published year")
})

export const editAuthorSchema=yup.object({
    bookAuthor:yup.string().required("Please fill the author name"),
    authorBio:yup.string().required("Please fill the bio"),
    authorDoy:yup.number().required("Please enter the birth year")
})