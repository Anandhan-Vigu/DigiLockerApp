import React from 'react'
import SearchStates from './SearchStates'
import UtilityGrid from './UtilityGrid'
import SwiperWithDots from './SwiperWithDots'
import { FaArrowRight } from 'react-icons/fa'

const insurance = ['Vehicle Insurance Certificate', 'Policy Document', 'Insurance Policy - Two Wheeler']
const documentImage = ['aadhar.jpg', 'pan.jpg', 'ssc.jpg', 'hsc.jpg', 'license.jpg', 'ration.jpg', 'vehicle-reg.jpg', 'income.jpg']
const newAddedDocument = [
    {
        icon: '/icons/search-new-doc/marriage.jpg',
        certificate: 'Marriage Certificate',
        group: 'Satara Municipal Council'
    },
    {
        icon: '/icons/search-new-doc/skill.png',
        certificate: 'Skill Certificate',
        group: 'Directorate General of Armoured Corps'
    },
    {
        icon: '/icons/search-new-doc/diploma.png',
        certificate: 'Degree/ Diploma Marksheet',
        group: 'National Sports University'
    },
    {
        icon: '/icons/search-new-doc/degree.jpeg',
        certificate: 'Degree Certificate',
        group: 'Jawaharlal Nehru Technological University'
    }
]
const SearchContent = () => {
    return (
        <div className='space-y-5 w-full'>
            <div className='flex overflow-x-auto scrollbar-hide w-full gap-5'>
                {insurance?.map((data, index) => (
                    <div
                        key={index}
                        className={`flex gap-2 shrink-0 w-auto p-4 items-center flex-nowrap border border-blue-900 rounded-full ${index === 0 ? 'ml-5' : ''
                            }`}
                    >
                        <img src='/icons/others/stats.png' className='w-5 h-5'></img>
                        <p className="text-nowrap">{data}</p>
                    </div>
                ))}
            </div>
            <div className='w-full'>
                <p className='font-bold pl-5'>Most Popular Documents</p>
                <div className="flex overflow-x-auto scrollbar-hide w-full gap-5">
                    {documentImage?.map((data, index) => (
                        <div
                            key={index}
                            className={`${index === 0 ? 'ml-5' : ''} shrink-0 w-52 h-40`}
                        >
                            <img
                                src={`/icons/search-most-popular/${data}`}
                                className="w-full h-full object-contain "
                                alt="search-most-popular"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className='space-y-5'>
                <p className='font-bold px-5'>New Added Documents</p>
                <div className='flex overflow-x-auto scrollbar-hide w-full gap-5 '>
                    {newAddedDocument?.map((data, index) => (
                        <div
                            key={index}
                            className={`flex min-w-64 gap-2 p-2 items-center flex-nowrap border border-blue-900 rounded-full ${index === 0 ? 'ml-5' : ''}`}
                        >
                            <img src={data.icon} className='w-10 h-10 shrink-0' alt="icon" />

                            {/* Allow this container to shrink so truncate works */}
                            <div className="shrink min-w-0 text-gray-500">
                                <p className="truncate text-xs">{data.certificate}</p>
                                <p className="truncate text-xs ">{data.group}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            <div>
                <SearchStates />
                <button className='px-6 py-2 mt-5 mx-auto rounded-4xl bg-white text-violet-900 w-fit font-semibold  text-base flex items-center gap-3'>Explore More
                    <FaArrowRight />
                </button>
            </div>
            <div className='px-5'>
                <p className='font-bold mb-5'>Categories</p>
                <UtilityGrid name='/search-page/categories' />
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-semibold px-5 text-black text-base">New in Digilocker</p>
                <SwiperWithDots />
            </div>
        </div>
    )
}

export default SearchContent
