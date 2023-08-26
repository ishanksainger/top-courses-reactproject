import React from 'react'

const Spinner = () => {
    return (
        <div className='flex flex-col items-center space-y-2'>
            <div class="custom-loader"></div>
                <p className=' text-[#22223B] text-lg font-semibold'>Loading...</p>
        </div>
    )
}

export default Spinner