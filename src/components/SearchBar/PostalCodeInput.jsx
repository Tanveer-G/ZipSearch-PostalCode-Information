import { useSelector } from 'react-redux/es/hooks/useSelector'

const PostalCodeInput = ({ handleInputChange, handleKeyDown, isInvalidInput, input, handleFocus }) => {
  const { countryName } = useSelector((state) => state.zipsearch)

  const handleFocusing = (value) => {
    handleFocus(value)
  }
  return (
    <div className='w-full flex h-full items-center'>
      <input
        className={`bg-transparent text-xl md:text-2xl w-full h-full overflow-hidden text-ellipsis whitespace-nowrap font-semibold outline-0 focus:outline-none placeholder:silver-gradient-text ${
          isInvalidInput ? 'red-gradient-text' : 'text-#E6E7E8'
        }`}
        aria-label={`Please enter a valid postal code of your selected country ${countryName}. This field is required.`}
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={() => handleFocusing(true)}
        onBlur={() => handleFocusing(false)}
        maxLength={9}
        min={3}
        required
        placeholder={`Please Enter "${countryName}" Postal Code.*`}
      />
    </div>
  )
}
export default PostalCodeInput
