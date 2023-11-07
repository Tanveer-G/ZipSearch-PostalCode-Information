/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useZipCodeAPI } from '../../hooks/useZipCodeAPI'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { updateSearchHistory } from '../../app/slices/zipSearchSlice'
import { clearAllAPIData } from '../../app/slices/apiDataSlice'
import Loading from '../../components/Loader/Loading'
import History from '../../components/History'
import LocationPinIcon from '../../assets/location.svg'
import ValidSearch from '../Modal/ValidSearch'
import PostalCodeInput from './PostalCodeInput'
import SearchButton from './SearchButton'
import { BASE_URL, postalCodeRegex } from '../../utilities/constant'

const SearchBar = () => {
  const dispatch = useDispatch()
  const { countryCode } = useSelector((state) => state.zipsearch)

  const [input, setInput] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [isInValid, setIsInValid] = useState(false)
  const { mutate, isLoading } = useZipCodeAPI()

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleSearchClick = () => {
    if (postalCodeRegex.test(input)) {
      dispatch(clearAllAPIData())
      dispatch(updateSearchHistory(input))
      const payload = {
        countrycode: countryCode,
        zipcode: input,
        BASE_URL
      }
      mutate(payload)
      setInput('')
    } else {
      setIsInValid(true)
      console.error('Error: Invalid Postal Code!')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick()
    }
  }
  const handleFocus = () => {
    setIsFocused(false)
  }
  const handleSelectHistory = (historyItem) => {
    setInput(historyItem)
    setTimeout(() => {
      setIsFocused(false)
    }, 0)
  }

  const handleValidate = () => {
    setIsInValid(false)
  }
  const isInvalidInput = input.length > 0 && !postalCodeRegex.test(input)

  return (
    <div className=''>
      <ValidSearch handleValidate={handleValidate} isInValid={isInValid} />
      <div className='p-0.5 bg-silver-gradient rounded-full mt-4'>
        <div className='w-full h-[3.7rem] md:h-[4.5rem] bg-[#020024] rounded-full text-center flex items-center justify-between'>
          <img src={LocationPinIcon} alt='click Globe Icon for select Country' width={25} height={25} className='ml-4 mr-[2px]' />

          <PostalCodeInput
            handleFocus={handleFocus}
            handleInputChange={handleInputChange}
            handleKeyDown={handleKeyDown}
            isInvalidInput={isInvalidInput}
            input={input}
          />
          <SearchButton isInvalidInput={isInvalidInput} handleSearchClick={handleSearchClick} handleValidate={handleValidate} />
        </div>
      </div>
      {isFocused && <History onSelectHistory={handleSelectHistory} />}
      {isLoading && <Loading />}
    </div>
  )
}
export default SearchBar
