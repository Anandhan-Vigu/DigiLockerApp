import React from 'react'
import { FiSearch } from "react-icons/fi";
import emblem from '/icons/home-logo/emblem.jpg'
import logo from '/icons/home-logo/logo.jpg'
import SearchContent from '~/components/SearchContent';

const Search = () => {
    return (
        <div className="w-full space-y-5 h-full  text-black">

            {/* Blue Section (Parent for absolute search bar) */}
            <div className="relative bg-blue-800 h-56 rounded-br-[200px] rounded-bl-[10px] px-5 py-5">

                {/* Header Content */}
                <div className="flex items-center">
                    <img src={emblem} alt="Emblem" className="h-14 w-10" />
                    <img src={logo} alt="Logo" className="h-9 w-8 ml-2" />
                    <p className="text-white text-2xl font-bold ml-1">DigiLocker</p>
                </div>

                <p className="text-white mt-3 text-sm font-semibold">
                    DigiLocker provides access to more than 5 Billion authentic documents
                </p>

                {/* SEARCH BAR → sits at bottom of blue background */}
                <div className="absolute -bottom-5 left-0 right-0 mx-5">
                    <div className="flex items-center gap-3 bg-white border border-gray-300 rounded-full py-3 px-4 shadow-md">
                        <FiSearch className="text-gray-600 text-xl" />

                        <input
                            type="text"
                            placeholder="Search for Documents"
                            className="flex-1 bg-transparent text-black outline-none"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-10 ">
                <SearchContent />
            </div>

        </div>
    )
}

export default Search;
