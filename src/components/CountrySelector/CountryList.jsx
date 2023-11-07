
const CountryList = ({ filteredCountries, isMenuShow, handleCheckbox, countryCode }) => {
  return (
    
      <ul className={`bg-[#020024]/90 rounded-b-2xl space-y-1`}>
          {filteredCountries?.map(({ name, code }) => (
            <li
              key={name + code}
              className='flex justify-start items-center bg-transparent cursor-pointer px-4 py-1 border-b border-b-[#E6E7E8]/30 min-h-max hover:bg-[#E6E7E8]/30'
            >
              <input
                type='checkbox'
                className={`h-[1.4rem] w-[1.4rem] rounded-2xl border-3 border-[#E6E7E8]/90 text-indigo-600 focus:ring-indigo-500`}
                id={`filter-${name}-${code}`}
                checked={code === countryCode}
                name={`${name}`}
                value={code}
                onChange={handleCheckbox}
              />
              <label htmlFor={`filter-${name + code}`} className={`max-w-fit max-h-fit ml-3`}>
                {name}
              </label>
            </li>
          ))}
        </ul>
  );
};
export default CountryList;