import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthorPage from './Pages/AuthorPage'
import BooksPage from './Pages/BooksPage'
import AddBookPage from './Pages/AddBookPage'
import AddAuthorPage from './Pages/AddAuthorPage'
import EditBookPage from './Pages/EditBookPage'
import EditAuthorPage from './Pages/EditAuthorPage'


function App() {
  
 //Routes and Route is used for navigating between pages
  return (
    <Routes>
      <Route exact path="/" element={<BooksPage/>}/>
      <Route path="/books" element={<BooksPage/>}/>
      <Route path="/author" element={<AuthorPage/>}/>
      <Route path="/addBook" element={<AddBookPage/>}/>
      <Route path="/addAuthor" element={<AddAuthorPage/>}/>
      <Route path="/editBook" element={<EditBookPage/>}/>
      <Route path="/editAuthor" element={<EditAuthorPage/>}/>
    </Routes>
  )
}

export default App
