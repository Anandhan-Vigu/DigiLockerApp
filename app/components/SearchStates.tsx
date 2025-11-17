
const states = [
  { icon: '/icons/state/common.png', name: 'Andaman & Nicobar' },
  { icon: '/icons/state/andrapradesh.jpg', name: 'Andra Pradesh' },
  { icon: '/icons/state/arunachalpradesh.jpg', name: 'Arunachal Pradesh' },
  { icon: '/icons/state/common.png', name: 'Assam' },
  { icon: '/icons/state/bihar.jpg', name: 'Bihar' },
  { icon: '/icons/state/common.png', name: 'Chandigarh' },
  { icon: '/icons/state/chattisgarh.jpg', name: 'Chhattisgarh' },
  { icon: '/icons/state/telangana.jpg', name: 'Telangana' }
]

const SearchStates = () => {
  return (
    <div className='px-5 space-y-5'>
      <p className='font-bold'>States</p>
      <div className="grid grid-cols-4 gap-6">
        {states.map((state, i) => (
          <div key={i} className="flex flex-col items-center text-center">

            {/* Circle Image */}
            <img
              src={state.icon}
              alt={state.name}
              className="w-14 h-14 rounded-full p-1 bg-white"
            />

            {/* State Name */}
            <p className="mt-2 text-sm font-medium text-wrap truncate w-full text-center">
              {state.name}
            </p>

          </div>
        ))}
      </div>
    </div>

  )
}

export default SearchStates
