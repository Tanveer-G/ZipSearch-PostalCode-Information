import Modal from './Modal'

const validList = [
  { label: 'Minimum Length:', value: 'At least 3 characters.' },
  { label: 'Maximum Length:', value: 'Up to 9 characters including hyphens and spaces.' },
  { label: 'Numeric Characters:', value: 'At least 1 number.' },
  { label: 'Alphabetic Characters:', value: 'Upper and lowercase allowed.' },
  { label: 'Whitespace:', value: 'Optional, based on country format.' },
  { label: 'Hyphen Usage:', value: 'Optional, based on country format.' },
  { label: 'Examples:', value: "'AB1', 'A0A', 'AD100', 'L-1009', 'MD-2000', '00-001', '1601', '100 00', '*: 96167'" }
]
export default function ValidSearch({ handleValidate, isInValid }) {
  function onClose() {
    handleValidate()
  }

  function onOk() {
    handleValidate()
  }

  return (
    <Modal title='Invalid Input' onClose={onClose} onOk={onOk} showModal={isInValid}>
      <h2 className='text-4xl my-2 font-semibold bg-black/50 rounded-lg red-gradient-text underline underline-offset-1'>
        Valid Postal Code Formats & Guidelines
      </h2>
      <section className='flex flex-col justify-start'>
        <ul className='flex flex-col justify-start silver-gradient-text'>
          {validList.map(({ label, value }) => (
            <li key={label} className='text-left text-3xl border-b border-b-white/20 p-3'>
              <b className=''>&#10004; {label}</b> <i>{value}</i>
            </li>
          ))}
        </ul>
      </section>
    </Modal>
  )
}
