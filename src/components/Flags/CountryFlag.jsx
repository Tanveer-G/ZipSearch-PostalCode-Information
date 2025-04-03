import { useSelector } from 'react-redux/es/hooks/useSelector'
import { CircleFlag } from 'react-circle-flags'

const CountryFlag = () => {
  const { countryCode, countryName } = useSelector((state) => state.zipsearch)

  return (
    <div className="w-16 h-16 flex tex-center items-center justify-center rounded-full overflow-hidden bg-silver-gradient p-0.5">
      <CircleFlag 
        countryCode={countryCode.toLowerCase()} // countryCode should be in lowercase
        style={{ width: '100%', height: '100%' }}
        title={countryName}
        aria-label={`${countryName} Flag`}
      />
    </div>
  )
}

export default CountryFlag
