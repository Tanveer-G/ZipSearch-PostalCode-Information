import { useSelector } from 'react-redux'
import ErrorMessage from '../Error/ErrorMessage'
import LocationInfoCard from './LocationInfoCard'

const MainContent = () => {
  const { data, error } = useSelector((state) => state.apiData)

  return (
    <main>
      {error.length > 0 && <ErrorMessage errorMessage={error} />}

      <article className='overflow-x-hidden mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
        {data?.places?.length > 0 &&
          data?.places?.map((place) => (
            <LocationInfoCard
              key={'PlaceName' + place['place name']}
              place={place}
              locationData={[data.country, data['post code'], data['country abbreviation']]}
            />
          ))}
      </article>
    </main>
  )
}

export default MainContent
