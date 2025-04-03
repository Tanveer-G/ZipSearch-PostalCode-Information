import LocationPinIcon from '../../assets/location.svg';
import DownArrowIcon from '../../assets/down.png';
import { useSelector } from 'react-redux/es/hooks/useSelector'

const CountryToggle = ({ onToggle, show }) => {
  const { countryName, countryCode } = useSelector((state) => state.zipsearch)

  return (
    <div className='flex bg-silver-gradient text-[#E6E7E8]/90 min-w-max items-center justify-center rounded-full pl-1 py-1 pr-3'>
      <button
        onClick={() => onToggle(prev => !prev)}
        className='flex min-h-fit bg-[#020024] overflow-hidden active:bg-red-gradient-mid mr-1 p-1.5 justify-between items-center w-[15rem] rounded-full text-2xl text-center'
      >
        <img src={LocationPinIcon} alt='click Globe Icon for select Country' width={22} height={22} />
        <span className='min-w-max font-semibold'>Select Country</span>
        <img
          src={DownArrowIcon}
          alt='drown arrow'
          width={15}
          height={14}
          className={`opacity-80 mt-1 ml-1 
          ${!show && '-rotate-90'} 
          `}
        />
      </button>
      <span className='red-gradient-text font-bold text-2xl cursor-none' title={countryName}>{countryCode}</span>
    </div>
  );
};

export default CountryToggle;

