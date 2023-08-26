import React, { useState } from 'react'
import Card from './Card';

const Cards = (props) => {
const {courses}=props
console.log(courses);
const [likedCourses, setLikedCourses]=useState([])
const {category}=props;


    let allcourses=[];
    const getCourses= () => { 
        if(category==='All'){
        Object.values(courses).forEach((courseCategory) => { 
            courseCategory.forEach((course) => { 
                allcourses.push(course);
            })
        })
        return allcourses;
    }
    else{
        return courses[category]
    }
    }
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>{
        getCourses().map((course) => {
        return   <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
        })     
    }
    </div>
  )
}
export default Cards