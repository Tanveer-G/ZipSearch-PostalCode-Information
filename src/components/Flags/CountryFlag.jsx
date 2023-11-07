import { ReactCountryFlag } from 'react-country-flag'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const CountryFlag = () => {
  const { countryCode, countryName } = useSelector((state) => state.zipsearch)

  return (
    <div className={` rounded-t-2xl bg-[#020024]/90`}>
      <ReactCountryFlag
        className='rounded-3xl'
        countryCode={countryCode}
        svg
        style={{
          width: '10.9rem',
          height: '10rem'
        }}
        title={countryName}
        aria-label={`${countryName} Flag`}
      />
    </div>
  )
}

export default CountryFlag
