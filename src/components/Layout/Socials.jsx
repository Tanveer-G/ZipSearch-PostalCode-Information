import GitHub from '../../assets/github-white.svg'
import aedIn from '../../assets/linkedin.svg'
const Socials = () => {
  return (
    <div className='flex items-center'>
      <a
        href={'https://www.aedin.com/in/tanveer-h1'}
        className='mx-1 bg-black/50 border-2 border-white/50 rounded-full hover:bg-white/25 active:bg-[#7D141D]'
      >
        <img src={aedIn} alt='aedIn Icon and a' width={30} height={30} className='opacity-100 m-0.5' />
      </a>

      <a
        href={'https://github.com/Tanveer-G'}
        className='p-1 mx-1 bg-black/50 border-2 border-white/50 rounded-full hover:bg-white/25 active:bg-[#7D141D]'
      >
        <img src={GitHub} alt='GitHub Logo Icon and a' width={26} height={26} className='p-[2px] m-0.5' />
      </a>
    </div>
  )
}

export default Socials
