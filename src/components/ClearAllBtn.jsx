import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { clearAllAPIData } from '../app/slices/apiDataSlice'
import { clearAllStoreData } from '../app/slices/zipSearchSlice'
import DeleteIcon from '../assets/bin.svg'

// import CountryDropdown from './CountrySelector'
export default function ClearAllBtn() {
  const dispatch = useDispatch()

  const handleClearAllData = () => {
    dispatch(clearAllStoreData())
    dispatch(clearAllAPIData())
  }

  return (
      <button onClick={handleClearAllData} className='flex h-[35px] min-w-max bg-silver-gradient rounded-full text-2xl p-1'>
        <span className='flex justify-center items-center overflow-hidden min-w-[1rem] px-4 py-2 bg-[#020024] active:bg-red-gradient-mid rounded-full font-semibold'>
          <img src={DeleteIcon} alt='click Globe Icon for select Country' width={20} height={20} className='mr-1' />
          {""}Clear All
        </span>
      </button>
  )
}