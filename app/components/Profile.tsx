
import emblem from '/icons/home-logo/emblem.jpg'
import logo from '/icons/home-logo/logo.jpg'
import IssuedDocument from './IssuedDocument'
const Profile = () => {
    return (
        <div className='relative h-[430px] text-white'>
            <div className="bg-blue-800 h-72 rounded-br-[200px] rounded-bl-[10px] px-5 py-5 flex flex-col gap-5  ">
                <div className="flex items-center ">
                    <img
                        src={emblem}
                        alt="Emblem"
                        className="h-14 w-10"
                    />
                    <img src={logo} alt="Logo" className="h-9 w-8" />
                    <p className="text-white text-2xl font-bold ml-1">DigiLocker</p>
                </div>
                <div className='flex  w-full h-28 items-center justify-between'>
                    <div className='w-[70%]'>
                        <p className='font-semibold text-xl'>Welcome, Anandhan!</p>{/* Replace with dynamic value */}
                        <p className='text-wrap font-semibold mt-3 text-sm'>DigiLocker 'Issued Documents' are at par with original Documents as per IT ACT, 2000</p>
                    </div>
                    <img src='/icons/menu/profile-placeholder.png' alt="profile" className="h-20 w-20 rounded-full" />
                </div>
                <div className='flex justify-between items-center w-[85%]'>
                    <p className='font-bold   text-base'>Issued Documents</p>
                    <button className=' px-3 rounded-4xl bg-violet-300 text-blue-700'>See All</button>
                </div>
            </div>
            <div className='absolute w-full bottom-0 z-1'>
                <IssuedDocument />
            </div>
        </div>

    )
}

export default Profile
