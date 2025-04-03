import SearchIcon from '../../assets/search.svg';
import LockIcon from '../../assets/info.svg';

const SearchButton = ({ isInvalidInput, handleSearchClick}) => {
  return (
    <button
      className='flex h-auto p-2 items-center justify-center cursor-pointer w-20 overflow-hidden rounded-full active:bg-white/20 transform transition duration-300 hover:scale-105'
      onClick={handleSearchClick}
    >
      <img src={isInvalidInput? LockIcon:SearchIcon} alt='click to search' width={24} height={24} className='w-full max-w-[2.5rem] h-auto object-contain'/>
    </button>
  );
}
export default SearchButton;
