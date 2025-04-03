const CountryList = ({ filteredCountries, isMenuShow, handleCheckbox, countryCode }) => {
  // Handle the click or key press event
  const handleListItemInteraction = (e, code) => {
    // Toggle the checkbox state when clicking on the button
    const checkbox = e.target.closest('button').querySelector('input[type="checkbox"]');
    checkbox.checked = !checkbox.checked; // Toggle the checkbox state
    handleCheckbox({
      target: {
        name: checkbox.name,
        value: code,
        checked: checkbox.checked
      }
    });
  };

  return (
    <ul
      className={`bg-[#020024]/90 rounded-b-2xl space-y-1 max-h-[40vh] overflow-y-scroll`}
      style={{
        boxShadow: "0px 3.66px 21.96px -0.91px #00000040",
        scrollbarWidth: "none", // For Firefox
        msOverflowStyle: "none", // For Internet Explorer
      }}
    >
      {filteredCountries?.map(({ name, code }) => (
        <li
          key={name + code}
          className="flex justify-start items-center hover:font-semibold bg-transparent  px-4 py-1 border-b border-b-[#E6E7E8]/30 min-h-max hover:bg-[#E6E7E8]/30"
        >
          <button
            type="button" // Use the <button> element for interactive behavior
            className="flex w-full items-center justify-start cursor-pointer"
            onClick={(e) => handleListItemInteraction(e, code)} // Handle mouse click
            onKeyDown={(e) => handleListItemInteraction(e, code)} // Handle keyboard interaction (Enter, Space)
            tabIndex={0} // Make the button focusable for keyboard navigation
          >
            <input
              type="checkbox"
              className="h-[1.4rem] w-[1.4rem] rounded-2xl border-3 border-[#E6E7E8]/90 text-indigo-600 focus:ring-indigo-500"
              id={`filter-${name}-${code}`}
              checked={code === countryCode}
              name={`${name}`}
              value={code}
              onChange={handleCheckbox}
              style={{ pointerEvents: 'none' }} // Disable direct checkbox interaction
            />
            <label htmlFor={`filter-${name + code}`} className="max-w-fit max-h-fit ml-3 cursor-pointer">
              {name}
            </label>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
