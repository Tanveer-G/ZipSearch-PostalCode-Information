import BrandHeader from './components/Layout/BrandHeader'
import FiltersBar from './components/FiltersBar'
// import SearchBar from './components/SearchBar'
// import ClearAllBtn from './components/SearchBar/ClearAllBtn'
import MainContent from './components/ContentUI/MainContent'
import Footer from './components/Layout/Footer'
import './App.css'
// import WorldMap from './components/Map'
import { useSelector } from 'react-redux'
// import CountryDropdown from './components/CountrySelector'

export default function App() {
  const { data, error } = useSelector((state) => state.apiData)
  console.log("🚀 ~ App ~ data:", data)
  console.log("🚀 ~ App ~ error:", error)
  return (
    <>
      <BrandHeader />
      <FiltersBar />
      <MainContent />
      <Footer />
    </>
  )
}
