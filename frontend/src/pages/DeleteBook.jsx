import React,{ useEffect, useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export const DeleteBook = () => {

  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleDelete = () => {

    setLoading(true);
    axios.delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Book</h1>
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDelete}>
          Delete ${id}
        </button>
      </div>
    </div>
  )
}

export default DeleteBook