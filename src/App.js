import './App.css';
import React, { useState, useEffect } from 'react';
import { filterData, apiUrl } from './data';
import NavBar from './components/NavBar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { toast } from 'react-toastify';
import Spinner from './components/Spinner';

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true)
  const [category,setCategory]= useState(filterData[0].title);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data);
      } catch (error) {
        toast.error("Something went wrong");
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className='min-h-screen flex flex-col bg-[#4A4E69]'>
      <div>
        <NavBar />
        </div>
        <div className='bg-[#4A4E69]'>
        <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory}/>
        </div>
        <div className=' w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
        {
          loading ? (<Spinner />) : (<Cards courses={courses} category={category}/>)
        }
      </div>
      </div>
    </div>
  );
}

export default App;
