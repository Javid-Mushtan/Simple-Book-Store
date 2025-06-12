import React from 'react';
import { Routes, Route } from 'react-router-dom';   // ← add this
import Home from './pages/Home';
import CreateBooks from './pages/CreateBooks.jsx';
import DeleteBook from './pages/DeleteBook.jsx';
import ShowBook from './pages/ShowBook.jsx';
import EditBook from './pages/EditBook.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* CRUD routes that match the <Link> targets you used in Home.jsx */}
      <Route path="/books/create" element={<CreateBooks />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
      <Route path="/books/:id" element={<ShowBook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
    </Routes>
  );
};

export default App;