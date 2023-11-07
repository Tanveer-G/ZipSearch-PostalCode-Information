import LocationPinIcon from '../../assets/location.svg';
import DownArrowIcon from '../../assets/down.png';
import { useSelector } from 'react-redux/es/hooks/useSelector'

const CountryToggle = ({ onToggle, show }) => {
  const { countryName, countryCode } = useSelector((state) => state.zipsearch)

  return (
    <span className='flex bg-silver-gradient text-[#E6E7E8]/90 min-w-[1rem]  items-center justify-center rounded-full pr-2'>
      <button
        onClick={() => onToggle(prev => !prev)}
        className='flex min-h-fit bg-[#020024] overflow-hidden active:bg-red-gradient-mid m-0.5 p-1.5 justify-between items-center w-56 rounded-full text-3xl/7 text-center'
      >
        <img src={LocationPinIcon} alt='click Globe Icon for select Country' width={22} height={22} />
        <span className=''>Country</span>
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
    </span>
  );
};

export default CountryToggle;

