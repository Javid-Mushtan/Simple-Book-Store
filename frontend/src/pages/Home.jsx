import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner.jsx';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import '../design/Home.css'; // Import the CSS file

export const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5555/books');
        setBooks(response.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setTimeout(() => { setLoading(false) }, 1000);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="books-container">
      {/* Header */}
      <div className="books-header">
        <h1 className="books-title">Books List</h1>
        <Link to="/books/create" title="Add new book">
          <MdOutlineAddBox className="add-book-btn" />
        </Link>
      </div>

      {/* Loading state */}
      {loading ? (
        <Spinner />
      ) : (
        <table className="books-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th className="hidden-mobile">Author</th>
              <th className="hidden-mobile">Publish Year</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id}>
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td className="hidden-mobile">{book.author}</td>
                <td className="hidden-mobile">{book.publishYear}</td>
                <td>
                  <div className="actions-container">
                    <Link to={`/books/${book._id}`} title="Details">
                      <BsInfoCircle className="action-btn details-btn" />
                    </Link>
                    <Link to={`/books/edit/${book._id}`} title="Edit">
                      <AiOutlineEdit className="action-btn edit-btn" />
                    </Link>
                    <Link to={`/books/delete/${book._id}`} title="Delete">
                      <MdOutlineDelete className="action-btn delete-btn" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;