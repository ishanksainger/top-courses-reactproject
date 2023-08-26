import React from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = (props) => {
    const { title, description, image, id } = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler() {
        if (likedCourses.includes(id)) {
            // in this the id is already there so we are just saying if the id mathces inside set liked course then filter that and send the rest of the id for rendering
            setLikedCourses((prev) => prev.filter((cid) => (cid !== id)));
            toast.warning("Like Removed")
        }
        else {
            if (likedCourses.length === 0) {
                // saving data first time in array form
                setLikedCourses([id]);
            }
            else {
                // here basically there are already saved ids of different cards are there so we are accessing them in array via prev and then add another 
                setLikedCourses((prev) => [...prev, id]);
            }
            toast.success("Liked Successfully")
        }
    }
    return (
        <div className='w-[300px] bg-[#22223B] rounded-sm overflow-hidden bg-opacity-80    '>
            <div className=' relative'>
                <img src={image.url} alt='null'></img>
                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-0.8rem] grid place-items-center'>
                    <button onClick={clickHandler}>{
                        likedCourses.includes(id) ? (<FcLike fontSize="1.75rem" />) : (<FcLikePlaceholder fontSize="1.75rem" />)
                    }
                    </button>
                </div>
            </div>
            <div className='p-4 '>
                <p className=' text-white font-semibold text-lg leading-6'>{title}</p>
                <p className=' mt-2 text-white'>
                {
                    description.length>100 ? (description.substr(0,100)) + "...." : (description)
                }</p>
            </div>
        </div>
    )
}
export default Card