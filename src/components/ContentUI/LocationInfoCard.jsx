/* eslint-disable react/prop-types */
import CountryFlag from '../Flags/CountryFlag'

export default function LocationInfoCard({ place, locationData }) {
  const [country, postCode, countryAbbreviation] = locationData
  const { ['place name']: placeName, state, ['state abbreviation']: stateAbbreviation } = place

  return (
    <div className='bg-silver-gradient p-2 relative rounded-2xl'>
      <div className='flex flex-col bg-[#020024]/90 rounded-2xl justify-between h-full text-ellipsis overflow-hidden space-y-2'>
        <span className='bg-white/20'>
          {' '}
          <CountryFlag />{' '}
          <span className='flex justify-center items-center capitalize bg-white/10 border-b-2 border-white/50 pb-2'>
            <h3 className='text-6xl capitalize font-semibold text-transparent px-2 red-gradient-text'>
              {country}
            </h3>
            <b className='text-md md:text-xl px-2 silver-gradient-text'>({countryAbbreviation})</b>
          </span>
        </span>
        <label className='text-2xl font-bold text-[#E6E7E8]/90'>State Name:</label>
        <span className='text-4xl font-medium silver-gradient-text px-2'>
          {state} - <span className='text-2xl px-2'>{stateAbbreviation}</span>
        </span>

        <label className='text-2xl font-bold text-[#E6E7E8]/90'>Place Name:</label>
        <p className='silver-gradient-text px-2 text-4xl'>{placeName}</p>

        <span className='flex mt-1 silver-gradient-text justify-around items-center capitalize bg-white/10 border-t border-white/50 pb-2'>
          <label className='text-2xl md:text-3xl font-bold'>Post code:</label>
          <h4 className='text-4xl capitalize font-semibold silver-gradient-text'>
            {postCode}
          </h4>
        </span>
      </div>
    </div>
  )
}
