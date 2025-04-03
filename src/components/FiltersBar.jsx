import CountryDropdown from './CountrySelector'
import SearchBar from './SearchBar'
import ClearAllBtn from './ClearAllBtn'
export default function FiltersBar() {
  return (
    <>
      <div
        className={`flex min-w-fit items-center justify-between gap-5
      h-20 font-semibold
        border-2 my-8 px-1 md:px-2 border-x-transparent border-y-white/25 
      `}
      >
        <CountryDropdown />
        <div className='hidden lg:block w-full translate-y-10'>
          <SearchBar />
        </div>
        <ClearAllBtn />
      </div>
      <div className='block lg:hidden w-full'>
        <SearchBar />
      </div>
    </>
  )
}
