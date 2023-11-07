import SearchIcon from '../../assets/search.svg';
import LockIcon from '../../assets/info.svg';

const SearchButton = ({ isInvalidInput, handleSearchClick}) => {
  return (
    <button
      className='flex h-full items-center justify-center cursor-pointer w-20 overflow-hidden rounded-full active:bg-white/20 '
      onClick={handleSearchClick}
    >
      <img src={isInvalidInput? LockIcon:SearchIcon} alt='click to search' width={27} height={27} />
    </button>
  );
}
export default SearchButton;
