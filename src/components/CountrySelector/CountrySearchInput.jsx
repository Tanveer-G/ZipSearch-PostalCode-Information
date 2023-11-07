const CountrySearchInput = ({ handleCountrySearch }) => {
  return (
    <div className='bg-[#020024] rounded-t-2xl p-2 mb-0.5'>
      <span className='flex min-w-full bg-silver-gradient rounded-2xl h-16 p-1'>
        <input
          className='bg-[#020024]/80 w-full h-full rounded-lg pl-4 text-ellipsis overflow-x-auto outline-0 focus:outline-none'
          type='search'
          onChange={handleCountrySearch}
          placeholder='Search and Select Country'
        />
      </span>
    </div>
  )
}
export default CountrySearchInput
