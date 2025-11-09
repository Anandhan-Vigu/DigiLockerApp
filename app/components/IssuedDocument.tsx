import React from 'react'
import aadhar from '../../public/issued-document/aadhar.jpeg'
import emblem from '../../public/issued-document/emblem.png'
import pan from '../../public/issued-document/pan.png'
import xii from '../../public/issued-document/xii.png'

const IssuedDocument = () => {
    return (
        <div className='flex gap-1 w-full overflow-x-auto scrollbar-hide  text-black text-nowrap'>
            <div className='min-w-[300px]  ml-5 mb-1 px-5 pt-5 pb-5 flex flex-col  justify-between bg-white  border-white shadow-sm shadow-gray-400 rounded-2xl '>
                <div className='flex gap-5'>
                    <img src={aadhar} alt="aadhar" className="h-12 " />
                    <div >
                        <p className='font-bold text-base'>Aadhaar Card</p>
                        <p className='text-gray-400 text-xl'>xxxx-xxxx-xxxx</p>
                    </div>
                </div>
                <p className='text-xs text-gray-400'>Unique Identification Authority of India (UIDAI)</p>
            </div>
            <div className='min-w-[300px]  ml-5 mb-1 px-5 pt-5 pb-3 flex flex-col gap-1 justify-between bg-white  border-white shadow-sm shadow-gray-400 rounded-2xl '>
                <div className='flex gap-5'>
                    <img src={emblem} alt="driving-emblem" className="h-12 " />
                    <div >
                        <p className='font-bold text-base'>Driving License</p>
                        <p className='text-gray-400 text-sm'>Ministry of Road</p>
                        <p className='text-gray-400 text-sm'>Transport and Highways</p>

                    </div>
                </div>
                <button className='bg-blue-800 rounded-4xl h-8 text-white'>Get Now</button>
            </div>
            <div className='min-w-[300px]  ml-5 mb-1 px-5 pt-5 pb-5 flex flex-col gap-10 justify-between bg-white  border-white shadow-sm shadow-gray-400 rounded-2xl '>
                <div className='flex gap-5'>
                    <img src={pan} alt="pan" className="h-16 " />
                    <div >
                        <p className='font-bold text-base'>PAN Verification R...</p>
                        <p className='text-gray-400 text-xl'>xxxx-xxxx-xxxx</p>
                    </div>
                </div>
                <p className='text-xs text-gray-400'>Income Tax Department</p>
            </div>
            <div className='min-w-[300px]  ml-5 mb-1 px-5 pt-5 pb-3 flex flex-col gap-3 justify-between bg-white  border-white shadow-sm shadow-gray-400 rounded-2xl '>
                <div className='flex gap-5'>
                    <img src={xii} alt="xii-icon" className="h-16 " />
                    <div >
                        <p className='font-bold text-base'>Class XII Marksheet</p>
                        <p className='text-gray-400 text-sm text-wrap'>Central Board of Secondary Education</p>

                    </div>
                </div>
                <button className='bg-blue-800 rounded-4xl h-8 text-white'>Get Now</button>
            </div>



        </div>
    )
}

export default IssuedDocument
