import { useSelector } from 'react-redux/es/hooks/useSelector'
import ClockIcon from '../assets/clock.svg'

export default function History({ onSelectHistory }) {
  const { searchHistory } = useSelector((state) => state.zipsearch)
  return (
    <div className='relative translate-all ease-in-out'>
      <ul className='absolute z-20 w-80 max-h-[200px] overflow-y-auto bg-[#020024]/80 text-right p-2 rounded-lg'>
        {searchHistory?.map((historyItem) => (
          <li
            key={historyItem + 'historyItems'}
            onMouseDown={() => onSelectHistory(historyItem)}
            className='flex items-center hover:bg-[#E6E7E8]/30 ml-1.5 text-left text-white text-3xl font-semibold py-3 rounded-lg border border-x-transparent border-t-transparent border-b-white/50 cursor-pointer'
          >
            <img src={ClockIcon} alt={'clock icon for showing History'} width={18} height={18} className='mr-2' />
            <span>{historyItem}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
