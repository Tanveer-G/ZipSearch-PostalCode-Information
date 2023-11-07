import GlobeIcon from '../../assets/globe.svg'

export default function BrandHeader() {
  return (
    <div className='flex justify-center items-center mb-8'>
      <img
        src={GlobeIcon}
        alt='Zip Search App Icon: A Big Globe'
        className='w-28 h-28 md:w-44 md:h-44 lg:w-52 lg:h-5w-52'
      />
      <div className='relative'>
      <h1 className='red-gradient-text font-semibold pb-4 text-6xl md:text-7xl lg:text-8xl'>
        ZipSearch
      </h1>
      <span className='absolute left-0 w-full h-4 bg-silver-gradient rounded-full'></span>

      </div>
    </div>
  )
}
