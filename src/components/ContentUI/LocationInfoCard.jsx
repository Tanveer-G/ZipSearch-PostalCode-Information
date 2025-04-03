import CountryFlag from "../Flags/CountryFlag";

export default function LocationInfoCard({ place, locationData }) {
  const [country, postCode] = locationData;
  const { ["place name"]: placeName, state } = place;

  return (
    <div className="w-full max-w-lg mx-auto bg-gradient-to-r from-gray-800 to-gray-900 py-5 pl-5 pr-8 rounded-xl shadow-md">
      <div className="flex">
          <CountryFlag />
        <div className="ml-4 flex-1 text-left">
          <div className="flex flex-col space-y-1">
            <p className="text-2xl font-semibold text-white">{`${placeName}`}</p>
            <p className="text-2xl font-semibold text-white">{`${state}, ${country}`}</p>
          </div>
          <div className="mt-1">
            <span className="text-[1.15rem] text-gray-300">Post code: {postCode}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
