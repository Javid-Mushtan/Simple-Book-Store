import React,{ useState } from 'react'
import BackButton from '../components/BackButton.jsx'
import Spinner from '../components/Spinner.jsx'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const CreateBooks = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };

    setLoading(true);
    axios.post('http://localhost:5555/books',data)
    .then(() => {
      setLoading(false);
      navigate('/');
    })
    .catch((error) => {
      alert(`there is an error ? `);
      console.log(error);
      setLoading(false);
    })
  }

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Create Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input 
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 p-4'
            />
        </div>

        <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input 
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500 p-4'
            />
        </div>

        <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
          <input 
            type='text'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 border-gray-500 p-4'
            />
        </div>
        <button className='p-4 bg-sky-300 px-400 py-200 w-full' onClick={handleSaveBook}>
          save
        </button>
      </div>
    </div>
  )
}

export default CreateBooks