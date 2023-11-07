import { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { updateCountryCode, updateCountryName } from '../../app/slices/zipSearchSlice'
import useOutsideClick from '../../hooks/useOutsideClick'
import useDebounce from '../../hooks/useDebounce'
import { countries } from '../../utilities/countries'
import CountrySearchInput from './CountrySearchInput'
import CountryList from './CountryList'
import CountryToggle from './CountryToggle'

export default function CountryDropdown() {
  const dispatch = useDispatch()
  const { countryCode } = useSelector((state) => state.zipsearch)
  const [isMenuShow, setIsMenuShow] = useState(false)
  const [filteredCountries, setFilteredCountries] = useState(countries)
  const [countryQuery, setCountryQuery] = useState('')
  const menuRef = useRef()

  useOutsideClick(menuRef, () => setIsMenuShow(false))
  const debouncedResult = useDebounce(countryQuery)

  const handleCheckbox = (e) => {
    const selectedCountryCode = e.target.value
    const selectedCountryName = e.target.name
    dispatch(updateCountryCode(selectedCountryCode))
    dispatch(updateCountryName(selectedCountryName))
  }

  const handleCountrySearch = (e) => setCountryQuery(e.target.value)

  useEffect(() => {
    if (debouncedResult) {
      const filterQuery = debouncedResult.toLowerCase()
      const filtered = countries.filter((countryObj) => {
        const nameMatches = countryObj.name.toLowerCase().includes(filterQuery)
        const valueMatches = countryObj.code.toLowerCase().includes(filterQuery)
        return nameMatches || valueMatches
      })
      setFilteredCountries(filtered)
    } else if (debouncedResult.length < 1) {
      setFilteredCountries(countries)
    }
  }, [debouncedResult])

  return (
    <div ref={menuRef}>
      <CountryToggle onToggle={setIsMenuShow} show={isMenuShow} />

      <menu
        className={`absolute bg-silver-gradient text-[#E6E7E8]/90 z-20 px-1 py-1 mt-4 rounded-2xl origin-left-right bg-[#020024]/90 transition-all ease-in-out duration-300 delay-100  ${
          isMenuShow ? 'translate-x-0' : '-translate-x-[200%]'
        }`}
      >
        <CountrySearchInput handleCountrySearch={handleCountrySearch} />

        <CountryList
          filteredCountries={filteredCountries}
          isMenuShow={isMenuShow}
          handleCheckbox={handleCheckbox}
          countryCode={countryCode}
        />
      </menu>
    </div>
  )
}
